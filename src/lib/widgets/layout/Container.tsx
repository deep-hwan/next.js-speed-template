import React, {
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  direction?: "horizontal" | "vertical";
  gap?: number;
  maxWidth?: number;
}

//
/// Container
export const Container = forwardRef(function Container(
  { children, maxWidth, direction = "vertical", gap, ...props }: Props,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      css={{
        position: "relative",
        width: "100%",
        maxWidth: maxWidth && `${maxWidth}px`,
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
        alignItems: direction === "horizontal" ? "stretch" : "flex-start",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
        transition: "0.3s ease-in-out",
      }}
      {...props}
    >
      {children}
    </div>
  );
});

//
/// Wrap
export const Wrap = forwardRef(function Wrap(
  { children, maxWidth, direction = "vertical", gap, ...props }: Props,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      css={{
        position: "relative",
        width: "100%",
        maxWidth: maxWidth && `${maxWidth}px`,
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
        alignItems: direction === "horizontal" ? "stretch" : "flex-start",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
        transition: "0.3s ease-in-out",
      }}
      {...props}
    >
      {children}
    </div>
  );
});

//
/// Box
export const Box = forwardRef(function Box(
  { children, maxWidth, direction = "vertical", gap, ...props }: Props,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      css={{
        position: "relative",
        width: "100%",
        maxWidth: maxWidth && `${maxWidth}px`,
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
        alignItems: direction === "horizontal" ? "stretch" : "flex-start",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
        transition: "0.3s ease-in-out",
      }}
      {...props}
    >
      {children}
    </div>
  );
});

//
/// BoxShadow
export const BoxShadow = forwardRef(function BoxShadow(
  { children, maxWidth, direction = "vertical", gap, ...props }: Props,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      css={{
        position: "relative",
        width: "100%",
        maxWidth: maxWidth && `${maxWidth}px`,
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
        alignItems: direction === "horizontal" ? "stretch" : "flex-start",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
        boxShadow: "0px 2px 30px rgba(0,0,0,0.08)",
        background: "#fff",
        borderRadius: "16px",
        transition: "0.3s ease-in-out",
      }}
      {...props}
    >
      {children}
    </div>
  );
});
