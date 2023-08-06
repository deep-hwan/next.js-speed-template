import React, {
  Children,
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
} from "react";
import { fontSize } from "../theme/size";
import { colors } from "../theme/colors";

////
interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  children: ReactElement;
}

export function CheckInput({ label, children, ...props }: InputProps) {
  const child = Children.only(children);
  const id = child.props.id ?? "check";

  return (
    <div
      css={{
        display: "flex",
        columnGap: "2px",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {cloneElement(child, {
        id,
        ...child.props,
      })}

      <div
        css={{ display: "flex", alignItems: "center", paddingBottom: "2px" }}
        {...props}
      >
        <label
          htmlFor={id}
          css={{
            fontSize: fontSize.s15,
            color: colors.black100,
            cursor: "pointer",
          }}
        >
          {label}
        </label>
      </div>
    </div>
  );
}

//
////
//
interface CheckProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: number;
  type?: string;
}

CheckInput.CheckBox = forwardRef(function CheckBox(
  { type, ...props }: CheckProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div
      css={{
        display: "flex",
        maxWidth: "28px",
        maxHeight: "28px",
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
        type={type ? type : "checkbox"}
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
        ref={ref}
        {...props}
      />
    </div>
  );
});
