/** @jsxImportSource @emotion/react */
import React, {
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

import { Interpolation, Theme } from "@emotion/react";

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface ItemsProps extends HTMLAttributes<HTMLUListElement> {
  direction?: "horizontal" | "vertical";
  children: ReactNode;
  gap?: number;
  maxWidth?: number;
}

interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  direction?: "horizontal" | "vertical";
  children: ReactNode;
  gap?: number;
  maxWidth?: number;
}

// -----------------------------------
// -------------- Items --------------
// -----------------------------------
export const Items = forwardRef(function Items(
  { direction = "vertical", maxWidth, children, gap, ...props }: ItemsProps,
  ref: ForwardedRef<HTMLUListElement>
) {
  return (
    <ul
      ref={ref}
      css={
        {
          ...defaultStyles,
          maxWidth: maxWidth && `${maxWidth}px`,
          flexDirection: direction === "vertical" ? "column" : "row",
          alignItems: direction === "horizontal" ? "stretch" : "center",
          rowGap: direction === "vertical" ? `${gap}px` : undefined,
          columnGap: direction === "horizontal" ? `${gap}px` : undefined,
        } as Interpolation<Theme>
      }
      {...props}
    >
      {children}
    </ul>
  );
});

// ----------------------------------
// -------------- Item --------------
// ----------------------------------
export const Item = forwardRef(function Item(
  { direction = "vertical", maxWidth, children, gap, ...props }: ItemProps,
  ref: ForwardedRef<HTMLLIElement>
) {
  return (
    <li
      ref={ref}
      css={
        {
          ...defaultStyles,
          maxWidth: maxWidth && `${maxWidth}px`,
          flexDirection: direction === "vertical" ? "column" : "row",
          alignItems: direction === "horizontal" ? "stretch" : "flex-start",
          rowGap: direction === "vertical" ? `${gap}px` : undefined,
          columnGap: direction === "horizontal" ? `${gap}px` : undefined,
        } as Interpolation<Theme>
      }
      {...props}
    >
      {children}
    </li>
  );
});

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const defaultStyles = {
  position: "relative",
  width: "100%",
  padding: "0",
  margin: "0",
  display: "flex",
  transition: "0.3s ease-in-out",
  listStyle: "none",
};
