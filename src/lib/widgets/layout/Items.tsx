import React, {
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

interface ItemsProps extends HTMLAttributes<HTMLUListElement> {
  direction?: "horizontal" | "vertical";
  children: ReactNode;
  gap?: number;
  maxWidth?: number;
}

export const Items = forwardRef(function Items(
  { direction = "vertical", maxWidth, children, gap, ...props }: ItemsProps,
  ref: ForwardedRef<HTMLUListElement>
) {
  return (
    <ul
      ref={ref}
      css={{
        position: "relative",
        width: "100%",
        maxWidth: maxWidth && `${maxWidth}px`,
        padding: "0",
        margin: "0",
        display: "flex",
        flexDirection: direction === "vertical" ? "column" : "row",
        alignItems: direction === "horizontal" ? "stretch" : "center",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
        transition: "0.3s ease-in-out",
        listStyle: "none",
      }}
      {...props}
    >
      {children}
    </ul>
  );
});

interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  direction?: "horizontal" | "vertical";
  children: ReactNode;
  gap?: number;
  maxWidth?: number;
}

export const Item = forwardRef(function Item(
  { direction = "vertical", maxWidth, children, gap, ...props }: ItemProps,
  ref: ForwardedRef<HTMLLIElement>
) {
  return (
    <li
      ref={ref}
      css={{
        position: "relative",
        width: "100%",
        maxWidth: maxWidth && `${maxWidth}px`,
        padding: "0",
        margin: "0",
        display: "flex",
        flexDirection: direction === "vertical" ? "column" : "row",
        alignItems: direction === "horizontal" ? "stretch" : "flex-start",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
        transition: "0.3s ease-in-out",
        listStyle: "none",
      }}
      {...props}
    >
      {children}
    </li>
  );
});
