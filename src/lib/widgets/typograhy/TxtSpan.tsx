import React, {
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";
import { colors, fontSize } from "../../theme/_index";

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const TxtSpan = forwardRef(function TxtSpan(
  { children, ...props }: Props,
  ref: ForwardedRef<HTMLSpanElement>
) {
  return (
    <span
      ref={ref}
      css={{
        display: "flex",
        alignItems: "center",
        whiteSpace: "pre-line",
        margin: 0,
        padding: 0,
        fontSize: fontSize.s13,
        color: colors.grey700,
        fontWeight: 400,
        transition: "0.3s ease-in-out",
      }}
      {...props}
    >
      {children}
    </span>
  );
});
