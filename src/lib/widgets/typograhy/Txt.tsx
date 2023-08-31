import React, {
  ForwardedRef,
  ReactNode,
  forwardRef,
  HTMLAttributes,
} from "react";
import { Interpolation, Theme } from "@emotion/react";
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
          css={
            {
              ...initialStyle,
              ...TYPOGRAPH_VARIANT["h1"],
            } as Interpolation<Theme>
          }
          {...Props}
        >
          {children}
        </h1>
      )}

      {as === "h2" && (
        <h2
          ref={ref}
          css={
            {
              ...initialStyle,
              ...TYPOGRAPH_VARIANT["h2"],
            } as Interpolation<Theme>
          }
          {...Props}
        >
          {children}
        </h2>
      )}

      {as === "h3" && (
        <h3
          ref={ref}
          css={
            {
              ...initialStyle,
              ...TYPOGRAPH_VARIANT["h3"],
            } as Interpolation<Theme>
          }
          {...Props}
        >
          {children}
        </h3>
      )}

      {as === "h4" && (
        <h4
          ref={ref}
          css={
            {
              ...initialStyle,
              ...TYPOGRAPH_VARIANT["h4"],
            } as Interpolation<Theme>
          }
          {...Props}
        >
          {children}
        </h4>
      )}

      {as === "h5" && (
        <h5
          ref={ref}
          css={
            {
              ...initialStyle,
              ...TYPOGRAPH_VARIANT["h5"],
            } as Interpolation<Theme>
          }
          {...Props}
        >
          {children}
        </h5>
      )}

      {as === "h6" && (
        <h6
          ref={ref}
          css={
            {
              ...initialStyle,
              ...TYPOGRAPH_VARIANT["h6"],
            } as Interpolation<Theme>
          }
          {...Props}
        >
          {children}
        </h6>
      )}

      {as === "strong" && (
        <strong
          ref={ref}
          css={
            {
              ...initialStyle,
              ...TYPOGRAPH_VARIANT["strong"],
            } as Interpolation<Theme>
          }
          {...Props}
        >
          {children}
        </strong>
      )}

      {as === "p" && (
        <p
          ref={ref}
          css={
            {
              ...initialStyle,
              ...TYPOGRAPH_VARIANT["p"],
            } as Interpolation<Theme>
          }
          {...Props}
        >
          {children}
        </p>
      )}
    </>
  );
});

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const initialStyle = {
  margin: 0,
  padding: 0,
  color: colors.black100,
  display: "flex",
  alignItems: "center",
  whiteSpace: "pre-line",
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
    lineHeight: "1.4",
  },
};
