import React, { Children, HTMLAttributes, ReactElement } from "react";
import { colors } from "../theme/colors";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement;
  onClick: () => void;
  size?: number;
}

export function Tab() {
  return <button type="button"></button>;
}

//
export function IconTab({ children, size = 25, onClick, ...props }: Props) {
  const child = Children.only(children);

  const svgChild = React.cloneElement(child, {
    css: {
      width: `100%`,
      height: `100%`,
    },
  });

  return (
    <button
      type="button"
      onClick={onClick}
      css={{
        display: "flex",
        justifyContent: "center",
        padding: "6px",
        borderRadius: "8px",
        transition: "0.3s ease-in-out",
        cursor: "pointer",

        "&:hover": {
          backgroundColor: colors.grey000,
        },
      }}
    >
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: `${size}px`,
          height: `${size}px`,
          transition: "0.3s ease-in-out",
          cursor: "pointer",
        }}
        {...props}
      >
        {svgChild}
      </div>
    </button>
  );
}
