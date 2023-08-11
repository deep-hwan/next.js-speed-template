import { colors } from "../../theme/colors";
import { fontSize } from "../../theme/size";
import React, { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function TxtSpan({ children, ...props }: Props) {
  return (
    <span
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
}
