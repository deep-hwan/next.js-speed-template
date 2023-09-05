/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, forwardRef, memo } from "react";

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  borderRadius?: number;
}

// --------------------------------------
// -------------- Skeleton --------------
// --------------------------------------
export const Skeleton = memo(
  forwardRef(function Skeleton(
    { width, height, borderRadius, ...props }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) {
    const loadAnimation = `
      @keyframes load {
        100% {
          background-position: -100% 0;
        }
      }
    `;

    return (
      <>
        <style>{loadAnimation}</style>
        <div
          ref={ref}
          css={{
            width: width ? `${width}px` : "100%",
            height: height ? `${height}px` : "10px",
            minHeight: height ? `${height}px` : "10px",
            background:
              "linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%)",
            borderRadius: borderRadius ? `${borderRadius}px` : "1000px",
            backgroundSize: "200% 100%",
            backgroundPosition: "100% 0",
            animation: "load 1s infinite", // Added animation property
          }}
          {...props}
        />
      </>
    );
  })
);
