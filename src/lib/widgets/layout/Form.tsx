/** @jsxImportSource @emotion/react */
import React, {
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  direction?: "horizontal" | "vertical";
  gap?: number;
  maxWidth?: number;
}

// ----------------------------------
// -------------- Form --------------
// ----------------------------------
export const Form = forwardRef(function Form(
  { children, maxWidth, direction = "vertical", gap, ...props }: Props,
  ref?: ForwardedRef<HTMLFormElement>
) {
  return (
    <form
      ref={ref}
      css={{
        position: "relative",
        display: "flex",
        width: "100%",
        maxWidth: `${maxWidth}px`,
        flexDirection: direction === "horizontal" ? "row" : "column",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
        transition: "0.3s ease-in-out",
      }}
      {...props}
    >
      {children}
    </form>
  );
});
