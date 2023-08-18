import React from "react";
import { css } from "@emotion/react"; // Import the required types
import { Layer } from "../_index";
import { fontSize, colors } from "../../theme/_index";

export function LoadingLayer() {
  return (
    <>
      {/* Assuming Layer component is properly defined */}
      <Layer isActive={true} />

      <div
        css={{
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
        }}
      >
        <span
          css={css`
            width: 48px;
            height: 48px;
            display: block;
            margin: 15px auto;
            position: relative;
            color: #fff;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;

            &::after,
            &::before {
              content: "";
              box-sizing: border-box;
              position: absolute;
              width: 24px;
              height: 24px;
              top: 0;
              background-color: #fff;
              border-radius: 50%;
              animation: scale50 1s infinite ease-in-out;
            }
            &::before {
              top: auto;
              bottom: 0;
              background-color: ${colors.blue};
              animation-delay: 0.5s;
            }

            @keyframes rotation {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
            @keyframes scale50 {
              0%,
              100% {
                transform: scale(0);
              }
              50% {
                transform: scale(1);
              }
            }
          `}
        />

        <span css={{ color: colors.white, fontSize: fontSize.s14 }}>
          잠시만 기다려주세요
        </span>
      </div>
    </>
  );
}
