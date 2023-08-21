import React, {
  Children,
  ForwardedRef,
  HTMLAttributes,
  ReactElement,
  forwardRef,
} from "react";

interface IconProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement;
  onClick: () => void;
  size?: number;
  iconSize?: number;
}

export const IconTab = forwardRef(function IconTab(
  { children, size, iconSize = 24, onClick, ...props }: IconProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
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
      ref={ref}
      css={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "6px",
        borderRadius: "8px",
        whiteSpace: "nowrap",
        transition: "0.3s ease-in-out",
        cursor: "pointer",

        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.03)",
        },
      }}
    >
      <div
        onClick={onClick}
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          transition: "0.3s ease-in-out",
          whiteSpace: "nowrap",
          cursor: "pointer",
        }}
        {...props}
      >
        {svgChild}
      </div>
    </button>
  );
});
