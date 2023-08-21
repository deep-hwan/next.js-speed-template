import React, { ForwardedRef, ReactNode, forwardRef } from "react";
import { HTMLAttributes } from "react";
import { colors, fontSize } from "../../theme/_index";

interface Props extends HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | "p";
  children: ReactNode;
}

export const Txt = forwardRef(function Txt(
  { as = "p", children, ...Props }: Props,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <>
      {as === "h1" && (
        <h1
          ref={ref}
          css={{
            whiteSpace: "pre-line",
            ...initialStyle,
            ...TYPOGRAPH_VARIANT["h1"],
          }}
          {...Props}
        >
          {children}
        </h1>
      )}

      {as === "h2" && (
        <h2
          ref={ref}
          css={{
            whiteSpace: "pre-line",
            ...initialStyle,
            ...TYPOGRAPH_VARIANT["h2"],
          }}
          {...Props}
        >
          {children}
        </h2>
      )}

      {as === "h3" && (
        <h3
          ref={ref}
          css={{
            whiteSpace: "pre-line",
            ...initialStyle,
            ...TYPOGRAPH_VARIANT["h3"],
          }}
          {...Props}
        >
          {children}
        </h3>
      )}

      {as === "h4" && (
        <h4
          ref={ref}
          css={{
            whiteSpace: "pre-line",
            ...initialStyle,
            ...TYPOGRAPH_VARIANT["h4"],
          }}
          {...Props}
        >
          {children}
        </h4>
      )}

      {as === "h5" && (
        <h5
          ref={ref}
          css={{
            whiteSpace: "pre-line",
            ...initialStyle,
            ...TYPOGRAPH_VARIANT["h5"],
          }}
          {...Props}
        >
          {children}
        </h5>
      )}

      {as === "h6" && (
        <h6
          ref={ref}
          css={{
            whiteSpace: "pre-line",
            ...initialStyle,
            ...TYPOGRAPH_VARIANT["h6"],
          }}
          {...Props}
        >
          {children}
        </h6>
      )}

      {as === "strong" && (
        <strong
          ref={ref}
          css={{
            whiteSpace: "pre-line",
            ...initialStyle,
            ...TYPOGRAPH_VARIANT["strong"],
          }}
          {...Props}
        >
          {children}
        </strong>
      )}

      {as === "p" && (
        <p
          ref={ref}
          css={{
            lineHeight: "1.55",
            whiteSpace: "pre-line",
            ...initialStyle,
            ...TYPOGRAPH_VARIANT["p"],
          }}
          {...Props}
        >
          {children}
        </p>
      )}
    </>
  );
});

const initialStyle = {
  margin: 0,
  padding: 0,
  color: colors.black100,
  display: "flex",
  alignItems: "center",
  transition: "0.3s ease-in-out",
};

const TYPOGRAPH_VARIANT = {
  h1: {
    fontSize: fontSize.s52,
    fontWeight: 600,
    lineHeight: "1.4",
  },
  h2: {
    fontSize: fontSize.s44,
    fontWeight: 600,
    lineHeight: "1.4",
  },
  h3: {
    fontSize: fontSize.s38,
    fontWeight: 600,
    lineHeight: "1.4",
  },
  h4: {
    fontSize: fontSize.s32,
    fontWeight: 600,
    lineHeight: "1.4",
  },
  h5: {
    fontSize: fontSize.s28,
    fontWeight: 600,
    lineHeight: "1.4",
  },
  h6: {
    fontSize: fontSize.s20,
    fontWeight: 600,
    lineHeight: "1.4",
  },
  strong: {
    fontSize: fontSize.s20,
    fontWeight: 500,
  },
  p: {
    fontSize: fontSize.s15,
    fontWeight: 400,
  },
};
