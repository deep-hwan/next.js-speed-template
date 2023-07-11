import { HTMLAttributes, memo } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: never[];
  direction?: "horizontal" | "vertical";
  size: number;
}

export const Spacing = memo(function Spacing({
  direction = "vertical",
  size,
  ...props
}: Props) {
  return (
    <div
      css={{
        flex: "none",
        width: direction === "horizontal" ? `${size}px` : "100%",
        height: direction === "vertical" ? `${size}px` : "100%",
      }}
      {...props}
    />
  );
});
