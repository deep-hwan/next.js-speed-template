import React, { memo } from "react";

export const Skeleton = memo(function Skeleton({
  width,
  height,
  br,
}: {
  width?: number;
  height?: number;
  br?: number;
}) {
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
        css={{
          width: width ? `${width}px` : "100%",
          minWidth: width ? `${width}px` : "100%",
          height: height ? `${height}px` : "10px",
          minHeight: height ? `${height}px` : "10px",
          background:
            "linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%)",
          borderRadius: br ? `${br}px` : "1000px",
          backgroundSize: "200% 100%",
          backgroundPosition: "100% 0",
          animation: "load 1s infinite", // Added animation property
        }}
      />
    </>
  );
});
