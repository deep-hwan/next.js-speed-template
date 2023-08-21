import React, {
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  direction?: "horizontal" | "vertical";
  gap?: number;
}

export const Form = forwardRef(function Form(
  { children, direction = "vertical", gap, ...props }: Props,
  ref: ForwardedRef<HTMLFormElement>
) {
  return (
    <form
      ref={ref}
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
    </form>
  );
});
