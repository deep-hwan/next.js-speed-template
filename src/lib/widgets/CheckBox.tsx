import React, {
  CSSProperties,
  HTMLAttributes,
  ReactElement,
  Ref,
  forwardRef,
} from "react";
import { colors, fontSize } from "../theme/_index";

//
interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactElement;
  ref?: Ref<HTMLDivElement>;
  type?: string;
  id?: string;
  checked?: boolean;
  onChange?: () => void;
}

//
export const CheckBox = forwardRef(function CheckBox({
  id = "check",
  type = "checkbox",
  children,
  ref,
  checked,
  onChange,
  ...props
}: Props) {
  return (
    <div
      ref={ref}
      css={{
        display: "flex",
        columnGap: "2px",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6px",
          borderRadius: "100px",
          transition: "0.1s ease-in-out",
          cursor: "pointer",

          "&:hover": {
            backgroundColor: colors.ground200,
          },
        }}
      >
        <input
          id={id}
          checked={checked}
          onChange={onChange}
          type={type}
          css={{
            width: "16px",
            minWidth: "16px",
            height: "16px",
            minHeight: "16px",
            border: "0px solid gainsboro",
            borderRadius: "5px !important",
            appearance: "none",
            backgroundColor: colors.grey200,
            userSelect: "none",
            transition: "0.2s ease-in-out",
            backgroundImage:
              "url('data:image/svg+xml,%3csvg viewBox=%220 0 16 16%22 fill=%22white%22 xmlns=%22http://www.w3.org/2000/svg%22%3e%3cpath d=%27M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z%27/%3e%3c/svg%3e')",

            "&:checked": {
              borderColor: "transparent",
              backgroundSize: "100% 100%",
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat",
              backgroundColor: colors.keyColor,
              borderRadius: "5px",
            },
          }}
          {...props}
        />
      </div>

      <div
        css={{ display: "flex", alignItems: "center", paddingBottom: "2px" }}
      >
        <label
          htmlFor={id}
          css={{
            fontSize: fontSize.s15,
            color: colors.black100,
            cursor: "pointer",
          }}
        >
          {children}
        </label>
      </div>
    </div>
  );
});
