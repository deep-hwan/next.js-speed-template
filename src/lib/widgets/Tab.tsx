import React, {
  ButtonHTMLAttributes,
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import { colors } from "../theme/colors";
import { borderRadius, fontSize } from "../theme/size";
interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Tab({ children, ...props }: TabProps) {
  return (
    <button
      type="button"
      css={{
        position: "relative",
        fontSize: fontSize.s15,
        padding: "12px 20px",
        borderRadius: borderRadius.s500,
        color: colors.grey700,
        backgroundColor: colors.ground200,
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

interface IconProps extends HTMLAttributes<HTMLElement> {
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
          backgroundColor: "rgba(0,0,0,0.05)",
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

//
////
/////
export function TxtTab({ children, ...props }: TabProps) {
  return (
    <button
      type="button"
      css={{
        position: "relative",
        fontSize: fontSize.s14,
        color: colors.keyColor,
        transition: "0.3s ease-in-out",

        "&:hover": {
          fontWeight: "500",
        },
      }}
      {...props}
    >
      {children}
    </button>
  );
}
