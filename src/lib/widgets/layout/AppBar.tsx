import React, {
  Children,
  ForwardedRef,
  ReactElement,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { MQ, colors } from "../../theme/_index";

//
interface Props {
  children: ReactElement;
  variant?: "primary" | "dark";
}

//
export const AppBar = forwardRef(function AppBar(
  { variant = "primary", children, ...props }: Props,
  ref: ForwardedRef<HTMLDivElement>
) {
  const child = Children.only(children);

  const [isActive, setIsActive] = useState<boolean>(false);
  const scrollActive = () => {
    if (window.scrollY >= 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollActive);
  }, []);

  const TYPE_VARIANTS = {
    primary: {
      backgroundColor: colors.white,
      borderBottom: isActive ? `1px solid ${colors.grey200}` : "none",
    },
    dark: {
      backgroundColor: colors.black200,
      borderBottom: isActive ? `1px solid ${colors.black300}` : "none",
    },
  };

  return (
    <header
      css={{
        position: "relative",
        width: "100%",
        height: "66px",
        minHeight: "66px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "0.3s ease-in-out",

        [MQ[2]]: { height: "58px", minHeight: "58px" },
      }}
    >
      <strong
        aria-hidden="true"
        css={{
          width: "0px",
          height: "0px",
          clip: "rect(0 0 0 0)",
          clipPath: "inset(50%)",
          position: "absolute",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        서비스명
      </strong>

      <nav
        ref={ref}
        css={{
          zIndex: 8999,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "66px",
          minHeight: "66px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "0.3s ease-in-out",
          ...TYPE_VARIANTS[variant],

          [MQ[2]]: { height: "58px", minHeight: "58px" },
        }}
        {...props}
      >
        {child}
      </nav>
    </header>
  );
});
