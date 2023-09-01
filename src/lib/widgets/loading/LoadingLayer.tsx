import React from "react";
import { Interpolation, Theme } from "@emotion/react";
import { keyframes } from "@emotion/css";

import { Layer } from "../_index";
import { fontSize, colors } from "../../theme/_index";

// ------------------------------------------
// -------------- LoadingLayer --------------
// ------------------------------------------
export function LoadingLayer({ size = 48 }: { size?: number }) {
  const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

  const scale50 = keyframes`
  0%, 100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
`;

  return (
    <>
      <Layer isActive={true} />

      <div css={styles.wrap as Interpolation<Theme>}>
        <span
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: `${size}px`,
            minWidth: `${size}px`,
            height: `${size}px`,
            minHeight: `${size}px`,
            margin: "15px auto",
            color: "#fff",
            boxSizing: "border-box",
            animation: `${rotation} 1s linear infinite`,
            "&::after, &::before": {
              content: '""',
              boxSizing: "border-box",
              position: "absolute",
              width: "24px",
              height: "24px",
              top: "0",
              backgroundColor: "#fff",
              borderRadius: "50%",
              animation: `${scale50} 1s infinite ease-in-out`,
            },
            "&::before": {
              top: "auto",
              bottom: "0",
              backgroundColor: colors.blue,
              animationDelay: "0.5s",
            },
          }}
        />

        <span css={styles.txt}>잠시만 기다려주세요</span>
      </div>
    </>
  );
}

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const styles = {
  wrap: {
    position: "fixed",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9999",
  },

  txt: {
    color: colors.white,
    fontSize: fontSize.s14,
  },
};
