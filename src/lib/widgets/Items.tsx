import React, { HTMLAttributes, ReactNode, memo } from "react";

interface Props extends HTMLAttributes<HTMLUListElement | HTMLLIElement> {
  direction?: "horizontal" | "vertical";
  children: ReactNode;
}

export const Items = memo(function Items({
  direction = "vertical",
  children,
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
      }}
      {...props}
    >
      {children}
    </ul>
  );
});

export const Item = memo(function Item({
  direction = "vertical",
  children,
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
      }}
      {...props}
    >
      {children}
    </li>
  );
});
