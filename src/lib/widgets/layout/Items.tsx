import React, { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLUListElement | HTMLLIElement> {
  direction?: "horizontal" | "vertical";
  children: ReactNode;
  gap?: number;
}

export function Items({
  direction = "vertical",
  children,
  gap,
  ...props
}: Props) {
  return (
    <ul
      css={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: direction === "vertical" ? "column" : "row",
        overflow: "auto",
        transition: "0.3s ease-in-out",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
      }}
      {...props}
    >
      {children}
    </ul>
  );
}

export function Item({
  direction = "vertical",
  children,
  gap,
  ...props
}: Props) {
  return (
    <li
      css={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: direction === "vertical" ? "column" : "row",
        transition: "0.3s ease-in-out",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
      }}
      {...props}
    >
      {children}
    </li>
  );
}
