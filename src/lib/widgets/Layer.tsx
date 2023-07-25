import { CSSProperties, HTMLAttributes, memo } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

export const Layer = memo(function Layer({ isActive, ...props }: Props) {
  return (
    <div
      css={{
        zIndex: 9000,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        minWidth: "100vw",
        height: "100vh",
        minHeight: "100vh",
        display: isActive ? "flex" : "none",
        backgroundColor: "rgba(0,0,0,0.35)",
      }}
      {...props}
    />
  );
});
