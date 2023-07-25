import React, { HTMLAttributes, ReactNode, memo } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  direction?: "horizontal" | "vertical";
  gap?: number;
}

export const Container = memo(function Container({
  children,
  direction = "vertical",
  gap,
  ...props
}: Props) {
  return (
    <div
      css={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
        transition: "0.3s ease-in-out",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
      }}
      {...props}
    >
      {children}
    </div>
  );
});

export const Wrap = memo(function Wrap({
  children,
  direction = "vertical",
  gap,
  ...props
}: Props) {
  return (
    <div
      css={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
        transition: "0.3s ease-in-out",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
      }}
      {...props}
    >
      {children}
    </div>
  );
});

export const Box = memo(function Box({
  children,
  direction = "vertical",
  gap,
  ...props
}: Props) {
  return (
    <div
      css={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
        transition: "0.3s ease-in-out",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
      }}
      {...props}
    >
      {children}
    </div>
  );
});

export const BoxShadow = memo(function BoxShadow({
  children,
  direction = "vertical",
  gap,
  ...props
}: Props) {
  return (
    <div
      css={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
        transition: "0.3s ease-in-out",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
        boxShadow: "0px 2px 20px rgba(0,0,0,0.1)",
        background: "#fff",
        borderRadius: "16px",
      }}
      {...props}
    >
      {children}
    </div>
  );
});
