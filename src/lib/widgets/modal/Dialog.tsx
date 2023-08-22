import React, { ReactNode, useEffect, useRef } from "react";
import { HTMLAttributes } from "react";
import { Interpolation, Theme } from "@emotion/react";

import { IconTab, Layer } from "../_index";
import { borderRadius, colors } from "../../theme/_index";

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  view: boolean;
  onCancel: () => void;
}

//
export function Dialog({ children, view, onCancel, ...props }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const clickModalOutside = (event: MouseEvent) => {
    if (view && ref.current && !ref.current.contains(event.target as Node)) {
      onCancel();
    }
  };

  useEffect(() => {
    if (view) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    document.addEventListener("mousedown", clickModalOutside);
    return () => {
      document.removeEventListener("mousedown", clickModalOutside);
    };
  }, [view]);

  return (
    <>
      <Layer isActive={view} />
      <div
        css={
          {
            ...styles.container,
            top: view ? "0" : "120%",
          } as Interpolation<Theme>
        }
      >
        <div ref={ref} css={styles.box as Interpolation<Theme>} {...props}>
          {children}

          <div css={styles.tab as Interpolation<Theme>}>
            <IconTab onClick={onCancel}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 26 26"
              >
                <path
                  id="xIcon"
                  d="M26.334,7.95a13,13,0,1,0,0,18.384,13,13,0,0,0,0-18.384M19.761,21.286l-2.619-2.619-2.621,2.621A1.079,1.079,0,0,1,13,19.761l2.621-2.621L13,14.525A1.079,1.079,0,0,1,14.526,13l2.616,2.617L19.758,13a1.076,1.076,0,0,1,1.522,1.522l-2.616,2.616,2.621,2.619-.23.23.23-.23a1.079,1.079,0,0,1-1.526,1.526"
                  transform="translate(-4.141 -4.142)"
                  fill="#e0e0e0"
                />
              </svg>
            </IconTab>
          </div>
        </div>
      </div>
    </>
  );
}

//
const styles = {
  container: {
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    position: "fixed",
    zIndex: "9999",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 30px 50px",
    transition: "0.25s ease-in-out",
  },

  box: {
    width: "100%",
    minWidth: "300px",
    maxWidth: "460px",
    padding: "26px 20px 16px",
    borderRadius: borderRadius.s700,
    backgroundColor: colors.white,
    boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
    position: "relative",
    transition: "0.5s ease-in-out",
  },

  tab: {
    position: "absolute",
    top: "6px",
    right: "6px",
  },
};
