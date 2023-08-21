import React, {
  ForwardedRef,
  ReactNode,
  Ref,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import { Interpolation, Theme } from "@emotion/react";

import { IconTab, Layer } from "../_index";
import { MQ, colors } from "../../theme/_index";

interface Props {
  view: boolean;
  onCancel: () => void;
  children: ReactNode;
}

//
export const AppDrawer = forwardRef(function AppDrawer(
  { view, onCancel, children, ...props }: Props,
  ref: ForwardedRef<HTMLDivElement>
) {
  const drawerRef = useRef<HTMLDivElement>(null);

  const clickModalOutside = (event: MouseEvent) => {
    if (
      view &&
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node)
    ) {
      onCancel();
    }
  };

  useEffect(() => {
    drawerRef.current?.scrollTo(0, 0);

    if (view) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    document.addEventListener("mousedown", clickModalOutside);
    return () => {
      document.removeEventListener("mousedown", clickModalOutside);
    };
  });

  return (
    <>
      <div
        css={{
          display: "none",

          [MQ[1]]: {
            display: view ? "flex" : "none",
          },
        }}
      >
        <Layer isActive={view} />
      </div>

      <div
        ref={drawerRef}
        css={
          {
            ...theme.container,
            right: view ? "0" : "-100%",
          } as Interpolation<Theme>
        }
      >
        <div ref={ref} css={theme.wrap as Interpolation<Theme>} {...props}>
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

        <div css={theme.box as Interpolation<Theme>}>{children}</div>
      </div>
    </>
  );
});

//
const theme = {
  container: {
    zIndex: "9999",
    position: "fixed",
    top: "0",
    display: "none",
    flexDirection: "column",
    width: "100%",
    maxWidth: "390px",
    height: "100vh",
    minHeight: "100vh",
    backgroundColor: colors.white,
    overflow: "auto",
    transition: "0.3s ease-in-out",

    ":webkit-scrollbar": {
      display: "none",
    },

    [MQ[1]]: {
      display: "flex",
    },
  },

  wrap: {
    zIndex: "11",
    position: "sticky",
    left: "0",
    top: "8px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10px",
  },

  box: {
    zIndex: "10",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",

    ":webkit-scrollbar": {
      display: "none",
    },
  },
};
