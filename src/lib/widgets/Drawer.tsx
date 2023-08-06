import React, { ReactNode, useRef } from "react";
import CancelIcon from "@/icons/cancel-icon.svg";
import { useClickOutside } from "../hooks/useClickOutSide";
import { Layer } from "./Layer";
import { IconTab } from "./Tab";
import { MQ } from "../theme/mediaQuery";
import { colors } from "../theme/colors";

interface Props {
  view: boolean;
  onCancel: () => void;
  children: ReactNode;
}

//
export default function Drawer(props: Props) {
  const { view, onCancel, children } = props;
  const boxRef = useRef<HTMLDivElement>(null);

  useClickOutside({ ref: boxRef, state: view, handler: onCancel });

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
        ref={boxRef}
        css={{
          zIndex: "9999",
          position: "fixed",
          top: "0",
          right: view ? "0" : "-100%",
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
        }}
      >
        <div
          css={{
            zIndex: "11",
            position: "sticky",
            left: "0",
            top: "8px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "10px",
          }}
        >
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

        <div
          css={{
            zIndex: "10",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "auto",

            ":webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
