import { ForwardedRef, HTMLAttributes, forwardRef, memo } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: never[];
  direction?: "horizontal" | "vertical";
  size: number;
}

export const Spacing = memo(
  forwardRef(function Spacing(
    { direction = "vertical", size, ...props }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) {
    return (
      <div
        ref={ref}
        css={{
          flex: "none",
          width: direction === "horizontal" ? `${size}px` : "100%",
          height: direction === "vertical" ? `${size}px` : "100%",
        }}
        {...props}
      />
    );
  })
);
