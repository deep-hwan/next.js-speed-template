import { CSSObject } from "@emotion/react";
import {
  Children,
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
} from "react";
import { colors, fontSize } from "../theme/_index";

////
interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  labelEdge?: string;
  children: ReactElement;
  bottomText?: string;
}

////
export function Input({
  label,
  labelEdge,
  children,
  bottomText,
  ...props
}: InputProps) {
  const child = Children.only(children);
  const id = child.props.id ?? 1;
  const isError: boolean = child.props.error ?? false;
  const isErrorText: string = child.props.errorText ?? undefined;
  const isTolTip: string = child.props.tolTip ?? undefined;

  return (
    <div
      css={{ width: "100%", display: "flex", flexDirection: "column" }}
      {...props}
    >
      <label
        htmlFor={id}
        css={{
          display: "inline-block",
          fontSize: fontSize.s13,
          color: isError ? colors.red : colors.grey700,
          marginBottom: "5px",

          "&:focus-within": {
            fontWeight: 500,
          },
        }}
      >
        {label}

        {labelEdge && (
          <span
            css={{
              fontSize: fontSize.s12,
              color: colors.blue,
              marginLeft: "3px",
            }}
          >
            {labelEdge}
          </span>
        )}
      </label>

      {cloneElement(child, {
        id,
        ...child.props,
      })}

      {isError && (
        <div
          css={{
            color: colors.red,
            fontSize: fontSize.s12,
            whiteSpace: "pre-line",
            lineHeight: "1.5",
            marginTop: "8px",
          }}
        >
          {isErrorText}
        </div>
      )}

      {isTolTip && !isError && (
        <div
          css={{
            color: colors.grey500,
            fontSize: fontSize.s12,
            whiteSpace: "pre-line",
            lineHeight: "1.5",
            marginTop: "8px",
          }}
        >
          {isTolTip}
        </div>
      )}
    </div>
  );
}

////
////
interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  error?: boolean;
  errorText?: string;
  tolTip?: string;
  edge?: any;
}

Input.TextField = forwardRef(function TextField(
  { error, errorText, tolTip, edge, ...props }: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div
      css={{
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "12px",
        border: "none",
        borderBottom: error
          ? `1px solid ${colors.red}`
          : `1px solid ${colors.grey200}`,
        backgroundColor: colors.ground100,
        transition: "all 0.3s ease-in-out",

        "&:focus, &:hover, &:active": {
          backgroundColor: colors.ground200,
        },
      }}
    >
      <input
        css={{
          width: "100%",
          margin: 0,
          border: "none",
          backgroundColor: "transparent",
          outline: "none",
          borderRadius: "0px",
          fontSize: fontSize.s15,
          color: colors.grey800,

          ...TextInputGlobalStyles,
        }}
        ref={ref}
        {...props}
      />

      {edge}
    </div>
  );
});

////
////
interface TextareaProps
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, "size"> {
  edge?: any;
  error?: boolean;
  errorText?: string;
  tolTip?: string;
}

Input.Textarea = forwardRef(function TextField(
  { edge, error, errorText, tolTip, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <div
      css={{
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "12px",
        border: "none",
        borderBottom: error
          ? `1px solid ${colors.red}`
          : `1px solid ${colors.grey200}`,
        backgroundColor: colors.ground100,
        transition: "all 0.3s ease-in-out",

        "&:focus, &:hover, &:active": {
          backgroundColor: colors.ground200,
        },
      }}
    >
      <textarea
        rows={1}
        css={{
          width: "100%",
          margin: 0,
          border: "none",
          backgroundColor: "transparent",
          outline: "none",
          borderRadius: "0px",
          fontSize: fontSize.s15,
          color: colors.grey800,
          overflow: "hidden",

          ...TextInputGlobalStyles,
        }}
        ref={ref}
        {...props}
      />

      {edge}
    </div>
  );
});

////
////
const TextInputGlobalStyles: CSSObject = {
  "::placeholder": { color: colors.grey300 },

  "&[type='number']::-webkit-outer-spin-button, &[type='number']::-webkit-inner-spin-button":
    {
      WebkitAppearance: "none",
      margin: 0,
    },

  "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active":
    {
      WebkitTextFillColor: "#000",
      WebkitBoxShadow: "0 0 0px 1000px transparent inset",
      boxShadow: "0 0 0px 1000px transparent inset",
      transition: "background-color 5000s ease-in-out 0s",
    },

  "&:autofill, &:autofill:hover, &:autofill:focus, &:autofill:active": {
    WebkitTextFillColor: "#555",
    WebkitBoxShadow: "0 0 0px 1000px transparent inset",
    boxShadow: "0 0 0px 1000px transparent inset",
    transition: "background-color 5000s ease-in-out 0s",
  },

  // Hide the scrollbar
  "::-webkit-scrollbar": {
    display: "none",
  },
};
