import React, {
  ButtonHTMLAttributes,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from "react";
import { colors, borderRadius, fontSize } from "../../theme/_index";

///
interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Tab = forwardRef(function Tab(
  { children, ...props }: TabProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      type="button"
      ref={ref}
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

        "&:disabled": {
          opacity: 0.4,
        },
      }}
      {...props}
    >
      {children}
    </button>
  );
});

//
////
/////
export const TxtTab = forwardRef(function TxtTab(
  { children, ...props }: TabProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      type="button"
      ref={ref}
      css={{
        position: "relative",
        fontSize: fontSize.s14,
        color: colors.keyColor,
        whiteSpace: "nowrap",
        transition: "0.3s ease-in-out",

        "&:hover": {
          fontWeight: "500",
        },
        "&:disabled": {
          opacity: 0.4,
        },
      }}
      {...props}
    >
      {children}
    </button>
  );
});
