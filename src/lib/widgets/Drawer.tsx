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
            <CancelIcon fill="#e2e8e7" width={22} />
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
