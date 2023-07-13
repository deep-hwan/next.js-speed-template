import React, { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLUListElement | HTMLLIElement> {
  direction?: "horizontal" | "vertical";
  children: ReactNode;
}

export function Items({ direction = "vertical", children, ...props }: Props) {
  return (
    <ul
      css={{
        width: "100%",
        display: "flex",
        flexDirection: direction === "vertical" ? "column" : "row",
        overflow: "auto",
        transition: "0.3s ease-in-out",
      }}
      {...props}
    >
      {children}
    </ul>
  );
}

export function Item({ direction = "vertical", children, ...props }: Props) {
  return (
    <li
      css={{
        width: "100%",
        display: "flex",
        flexDirection: direction === "vertical" ? "column" : "row",
        transition: "0.3s ease-in-out",
      }}
      {...props}
    >
      {children}
    </li>
  );
}
