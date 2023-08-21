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
}

export const Items = forwardRef(function Items(
  { direction = "vertical", children, gap, ...props }: ItemsProps,
  ref: ForwardedRef<HTMLUListElement>
) {
  return (
    <ul
      ref={ref}
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
});

interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  direction?: "horizontal" | "vertical";
  children: ReactNode;
  gap?: number;
}

export const Item = forwardRef(function Item(
  { direction = "vertical", children, gap, ...props }: ItemProps,
  ref: ForwardedRef<HTMLLIElement>
) {
  return (
    <li
      ref={ref}
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
});
