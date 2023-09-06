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
  size?: number;
  color?: string;
  weight?: "lighter" | "normal" | "medium" | "bold";
}

// -------------------------------------
// -------------- TxtSpan --------------
// -------------------------------------
export const TxtSpan = forwardRef(function TxtSpan(
  { children, size, weight = "normal", color = "#888888", ...props }: Props,
  ref: ForwardedRef<HTMLSpanElement>
) {
  return (
    <span
      ref={ref}
      css={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        whiteSpace: "pre-line",
        margin: 0,
        padding: 0,
        fontSize: size ? `${size / 16}rem` : "0.813rem",
        color: color,
        transition: "0.3s ease-in-out",
        ...TYPOGRAPH_WEIGHT[weight],
      }}
      {...props}
    >
      {children}
    </span>
  );
});

const TYPOGRAPH_WEIGHT = {
  lighter: { fontWeight: "300" },
  normal: { fontWeight: "400" },
  medium: { fontWeight: "500" },
  bold: { fontWeight: "600" },
};
