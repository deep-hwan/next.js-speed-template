import React, {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import { colors } from "../theme/colors";
import { fontSize, sizes } from "../theme/size";
interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Tab({ children, ...props }: TabProps) {
  return (
    <button
      type="button"
      css={{
        position: "relative",
        fontSize: fontSize.s14,
        padding: "10px 12px",
        borderRadius: sizes.br600,
        color: colors.grey700,
        backgroundColor: colors.ground100,
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

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement;
  onClick: () => void;
  size?: number;
}

//
export function IconTab({ children, size = 25, onClick, ...props }: IconProps) {
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
        position: "relative",
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
