import React, {
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  Ref,
  forwardRef,
} from "react";
import { colors, borderRadius, fontSize } from "../theme/_index";

//
interface AcodiProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical";
  children: ReactNode;
  gap?: number;
  ref?: Ref<HTMLDivElement>;
}

//
export const Accordion = forwardRef(function Accordion(
  { direction = "horizontal", gap, children, ...props }: AcodiProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      css={{
        width: "100%",
        padding: "14px",
        cursor: "pointer",
        borderRadius: borderRadius.s500,
        transition: "0.3s ease-in-out",
        display: "flex",
        flexDirection: direction === "vertical" ? "column" : "row",
        rowGap: direction == "vertical" ? `${gap}px` : `6px`,
        columnGap: direction == "horizontal" ? `${gap}px` : `6px`,

        ":hover": {
          backgroundColor: colors.ground100,
        },

        "& p:hover": {
          fontWeight: "500",
        },
      }}
      {...props}
    >
      {children}
    </div>
  );
});

//
interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  view: boolean;
  children: ReactNode;
}

//
export function AccordionPanel({ view, children, ...props }: PanelProps) {
  return (
    <div
      css={{
        width: "100%",
        height: view ? "auto" : "0px",
        maxHeight: view ? "9999px" : "0px",
        padding: view ? "20px" : "0 20px",
        backgroundColor: colors.ground100,
        borderRadius: borderRadius.s500,
        transition: "0.2s ease-in-out",
        fontSize: fontSize.s15,
        overflow: "hidden",
        whiteSpace: "pre-line",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
