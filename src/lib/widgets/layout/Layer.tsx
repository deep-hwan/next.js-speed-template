import { ForwardedRef, HTMLAttributes, forwardRef, memo } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

export const Layer = memo(
  forwardRef(function Layer(
    { isActive, ...props }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) {
    return (
      <div
        ref={ref}
        css={{
          zIndex: 9000,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100vw",
          minWidth: "100vw",
          height: "100vh",
          minHeight: "100vh",
          display: isActive ? "flex" : "none",
          backgroundColor: "rgba(0,0,0,0.35)",
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
        {...props}
      />
    );
  })
);
