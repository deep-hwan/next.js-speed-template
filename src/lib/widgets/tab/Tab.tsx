import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { colors, borderRadius, fontSize } from "../../theme/_index";

///
interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Tab({ children, ...props }: TabProps) {
  return (
    <button
      type="button"
      css={{
        position: "relative",
        fontSize: fontSize.s15,
        padding: "12px 20px",
        borderRadius: borderRadius.s500,
        color: colors.grey700,
        backgroundColor: colors.ground200,
        whiteSpace: "nowrap",
        transition: "0.3s ease-in-out",

        "&:hover": {
          opacity: 0.9,
        },
      }}
      {...props}
    >
      {children}
    </button>
  );
}

//
////
/////
export function TxtTab({ children, ...props }: TabProps) {
  return (
    <button
      type="button"
      css={{
        position: "relative",
        fontSize: fontSize.s14,
        color: colors.keyColor,
        whiteSpace: "nowrap",
        transition: "0.3s ease-in-out",

        "&:hover": {
          fontWeight: "500",
        },
      }}
      {...props}
    >
      {children}
    </button>
  );
}
