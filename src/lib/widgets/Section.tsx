import React, { CSSProperties, HTMLAttributes, ReactNode, memo } from "react";

interface Props extends HTMLAttributes<HTMLOptionElement> {
  direction?: "horizontal" | "vertical";
  gap?: number;
  children: ReactNode;
}

export const Section = memo(function Section({
  direction = "vertical",
  gap,
  children,
  ...props
}: Props) {
  return (
    <section
      css={{
        width: "100%",
        height: "100%",
        display: "flex",
        flex: "1",
        flexDirection: direction === "vertical" ? "column" : "row",
        alignItems: "center",
        rowGap: direction === "vertical" ? `${gap}px` : undefined,
        columnGap: direction === "horizontal" ? `${gap}px` : undefined,
        transition: "0.3s ease-in-out",
      }}
      {...props}
    >
      {children}
    </section>
  );
});
