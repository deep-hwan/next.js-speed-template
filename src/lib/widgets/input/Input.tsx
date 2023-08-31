import React, {
  useState,
  useEffect,
  ChangeEvent,
  Children,
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  TextareaHTMLAttributes,
  cloneElement,
  forwardRef,
} from "react";
import { Interpolation, Theme, CSSObject } from "@emotion/react";

import { borderRadius, colors, fontSize } from "../../theme/_index";
import { Box } from "../_index";

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  labelEdge?: string;
  children: ReactElement;
  bottomText?: string;
}

interface FieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  shape?: "default" | "box";
  error?: boolean | string;
  errorMsg?: boolean | string;
  tolTip?: string;
  edge?: ReactNode;
}

interface SearchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  shape?: "default" | "box";
  id?: string;
  onClick?: () => void;
  searchTab?: boolean;
  css?: CSSObject;
}

interface NumericFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    FieldProps {
  numericValue?: number | string;
  onNumericChange?: (value: number) => void;
}

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  shape?: "default" | "box";
  rows?: number;
  error?: boolean | string;
  errorMsg?: boolean | string;
  tolTip?: string;
}

// -------------------------------------------
// -------------- Input (Label) --------------
// -------------------------------------------
export function Input({
  label,
  labelEdge,
  children,
  bottomText,
  ...props
}: InputProps) {
  const child = Children.only(children);
  const id = child.props.id ?? 1;
  const error: boolean = child.props.error ?? false;
  const errorMsg: string = child.props.errorMsg ?? undefined;
  const tolTip: string = child.props.tolTip ?? undefined;

  return (
    <Box {...props}>
      <label
        htmlFor={id}
        css={{
          color: error ? colors.red : colors.grey700,
          ...styles.label,
        }}
      >
        {label}
        {labelEdge && <span css={styles.labelEdge}>{labelEdge}</span>}
      </label>

      {cloneElement(child, {
        id,
        ...child.props,
      })}

      {error && <p css={styles.errMsg as Interpolation<Theme>}>{errorMsg}</p>}

      {tolTip && !error && (
        <p css={styles.tolTip as Interpolation<Theme>}>{tolTip}</p>
      )}
    </Box>
  );
}

// ---------------------------------------
// -------------- TextField --------------
// ---------------------------------------
Input.TextField = forwardRef(function TextField(
  { shape = "default", error, edge, ...props }: FieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div
      css={
        {
          ...styles.inputField,
          borderBottom:
            shape === "default" &&
            `${
              error ? `1px solid ${colors.red}` : `1px solid ${colors.grey200}`
            }`,
          border:
            shape === "box" &&
            `${
              error ? `1px solid ${colors.red}` : `1px solid ${colors.grey200}`
            }`,
          backgroundColor: shape === "box" ? colors.white : colors.ground100,
          borderRadius: shape === "box" && borderRadius.s500,
        } as Interpolation<Theme>
      }
    >
      <input
        ref={ref}
        css={
          {
            ...styles.input,
            padding: shape === "box" ? `14px 12px` : `12px`,
          } as Interpolation<Theme>
        }
        {...props}
      />

      {edge && (
        <span
          css={
            {
              ...styles.inputEdge,
              paddingRight: shape === "box" ? `10px` : `12px`,
            } as Interpolation<Theme>
          }
        >
          {edge}
        </span>
      )}
    </div>
  );
});

// -----------------------------------------
// -------------- SearchField --------------
// -----------------------------------------
Input.SearchField = forwardRef(function SearchField(
  {
    id = "searchInputId",
    shape = "default",
    searchTab,
    onClick,
    css,
    ...props
  }: SearchProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div
      ref={ref}
      css={
        {
          ...styles.searchBox,
          borderBottom: shape === "default" && `1px solid ${colors.grey200}`,
          border: shape === "box" && `1px solid ${colors.grey200}`,
          backgroundColor: shape === "box" ? colors.white : colors.ground100,
          borderRadius: shape === "box" && borderRadius.s500,
        } as Interpolation<Theme>
      }
      {...props}
    >
      <SearchIcon />

      <input
        id={id}
        type="search"
        placeholder="검색어를 입력하세요"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            document.getElementById(`${id}-button`)?.click();
          }
        }}
        css={
          {
            ...styles.input,
            padding: shape === "box" ? `14px 0` : `12px 0`,
          } as Interpolation<Theme>
        }
      />

      {searchTab && (
        <button
          type="button"
          id={`${id}-button`}
          css={styles.searchTab as Interpolation<Theme>}
          onClick={onClick}
        >
          검색
        </button>
      )}
    </div>
  );
});

// ----------------------------------------------
// -------------- PhoneNumberField --------------
// ----------------------------------------------
Input.PhoneNumberField = forwardRef(function PhoneNumberField(
  {
    shape = "default",
    error,
    edge,
    value: externalValue,
    onChange: externalOnChange,
    ...props
  }: FieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [internalValue, setInternalValue] = useState<string>(
    String(externalValue) || ""
  );

  // 외부에서 전달된 value 값이 변경되면, 내부 state도 업데이트합니다.
  useEffect(() => {
    if (externalValue) {
      setInternalValue(String(externalValue));
    }
  }, [externalValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value.trim().replace(/[^0-9]/g, "");
    let formattedVal = inputVal;
    if (inputVal.length === 9) {
      formattedVal = inputVal.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3");
    } else if (inputVal.length === 10) {
      formattedVal = inputVal.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3");
    } else if (inputVal.length === 11) {
      formattedVal = inputVal.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    }

    setInternalValue(formattedVal);

    if (externalOnChange) {
      const newEvent = {
        ...e,
        target: {
          ...e.target,
          value: formattedVal,
        },
      } as ChangeEvent<HTMLInputElement>;
      externalOnChange(newEvent);
    }
  };

  return (
    <div
      css={
        {
          ...styles.inputField,
          borderBottom:
            shape === "default" &&
            `${
              error ? `1px solid ${colors.red}` : `1px solid ${colors.grey200}`
            }`,
          border:
            shape === "box" &&
            `${
              error ? `1px solid ${colors.red}` : `1px solid ${colors.grey200}`
            }`,
          backgroundColor: shape === "box" ? colors.white : colors.ground100,
          borderRadius: shape === "box" && borderRadius.s500,
        } as Interpolation<Theme>
      }
    >
      <input
        ref={ref}
        type="text"
        maxLength={13}
        value={internalValue}
        onChange={handleInputChange}
        css={
          {
            ...styles.input,
            padding: shape === "box" ? `14px 12px` : `12px`,
          } as Interpolation<Theme>
        }
        {...props}
      />

      {edge && (
        <span
          css={
            {
              ...styles.inputEdge,
              paddingRight: shape === "box" ? `10px` : `12px`,
            } as Interpolation<Theme>
          }
        >
          {edge}
        </span>
      )}
    </div>
  );
});

// ----------------------------------------
// -------------- PriceField --------------
// ----------------------------------------
Input.NumericField = forwardRef(function NumericField(
  { shape = "default", error, edge, ...props }: NumericFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [displayValue, setDisplayValue] = useState<string | any>(
    props.value || ""
  );

  useEffect(() => {
    if (typeof props.value === "number") {
      setDisplayValue(props.value.toLocaleString());
    } else if (typeof props.value === "string") {
      setDisplayValue(props.value);
    }
  }, [props.value]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, "");

    if (rawValue === "") {
      setDisplayValue("");
      if (props.onChange) {
        const newEvent = {
          ...e,
          target: {
            ...e.target,
            value: "",
          },
        } as ChangeEvent<HTMLInputElement>;
        props.onChange(newEvent);
      }
    } else if (!isNaN(Number(rawValue))) {
      setDisplayValue(parseFloat(rawValue).toLocaleString());
      if (props.onChange) {
        const newEvent = {
          ...e,
          target: {
            ...e.target,
            value: rawValue,
          },
        } as ChangeEvent<HTMLInputElement>;
        props.onChange(newEvent);
      }
    }
  };
  return (
    <div
      css={
        {
          ...styles.inputField,
          borderBottom:
            shape === "default" &&
            `${
              error ? `1px solid ${colors.red}` : `1px solid ${colors.grey200}`
            }`,
          border:
            shape === "box" &&
            `${
              error ? `1px solid ${colors.red}` : `1px solid ${colors.grey200}`
            }`,
          backgroundColor: shape === "box" ? colors.white : colors.ground100,
          borderRadius: shape === "box" && borderRadius.s500,
        } as Interpolation<Theme>
      }
    >
      <input
        ref={ref}
        css={
          {
            ...styles.input,
            padding: shape === "box" ? `14px 12px` : `12px`,
          } as Interpolation<Theme>
        }
        {...props}
        value={displayValue}
        onChange={handleInputChange}
      />

      {edge && (
        <span
          css={
            {
              ...styles.inputEdge,
              paddingRight: shape === "box" ? `10px` : `12px`,
            } as Interpolation<Theme>
          }
        >
          {edge}
        </span>
      )}
    </div>
  );
});

// --------------------------------------
// -------------- Textarea --------------
// --------------------------------------
Input.Textarea = forwardRef(function Textarea(
  { shape = "default", error, rows = 1, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <div
      css={
        {
          ...styles.inputField,
          borderBottom:
            shape === "default" &&
            `${
              error ? `1px solid ${colors.red}` : `1px solid ${colors.grey200}`
            }`,
          border:
            shape === "box" &&
            `${
              error ? `1px solid ${colors.red}` : `1px solid ${colors.grey200}`
            }`,
          backgroundColor: shape === "box" ? colors.white : colors.ground100,
          borderRadius: shape === "box" && borderRadius.s500,
        } as Interpolation<Theme>
      }
    >
      <textarea
        ref={ref}
        rows={rows}
        css={
          {
            ...styles.input,
            padding: shape === "box" ? `14px 12px` : `12px`,
          } as Interpolation<Theme>
        }
        {...props}
      />
    </div>
  );
});

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const styles = {
  label: {
    display: "inline-block",
    fontSize: fontSize.s13,
    marginBottom: "5px",

    "&:focus-within": {
      fontWeight: 500,
    },
  },

  labelEdge: {
    fontSize: fontSize.s12,
    color: colors.red,
    marginLeft: "3px",
  },

  errMsg: {
    color: colors.red,
    fontSize: fontSize.s12,
    whiteSpace: "pre-line",
    lineHeight: "1.4",
    marginTop: "6px",
  },

  tolTip: {
    color: colors.grey600,
    fontSize: fontSize.s12,
    whiteSpace: "pre-line",
    lineHeight: "1.4",
    marginTop: "8px",
  },

  inputField: {
    position: "relative",
    width: "100%",
    display: "flex",
    alignItems: "center",
    border: "none",
    backgroundColor: colors.ground100,
    transition: "all 0.3s ease-in-out",

    "&:focus, &:hover, &:active": {
      backgroundColor: colors.none,
    },
  },

  input: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    margin: 0,
    border: "none",
    backgroundColor: "transparent",
    outline: "none",
    borderRadius: "0px",
    fontSize: fontSize.s15,
    color: colors.grey800,
    overflow: "hidden",
    resize: "none",

    "::placeholder": { color: colors.grey300 },

    "&[type='number']::-webkit-outer-spin-button, &[type='number']::-webkit-inner-spin-button":
      {
        WebkitAppearance: "none",
        margin: 0,
      },

    "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active":
      {
        WebkitTextFillColor: colors.grey800,
        WebkitBoxShadow: "0 0 0px 1000px transparent inset",
        boxShadow: "0 0 0px 1000px transparent inset",
        transition: "background-color 5000s ease-in-out 0s",
      },

    "&:autofill, &:autofill:hover, &:autofill:focus, &:autofill:active": {
      WebkitTextFillColor: colors.grey800,
      WebkitBoxShadow: "0 0 0px 1000px transparent inset",
      boxShadow: "0 0 0px 1000px transparent inset",
      transition: "background-color 5000s ease-in-out 0s",
    },

    "::-webkit-scrollbar": {
      display: "none",
    },
  },

  inputEdge: {
    fontSize: fontSize.s14,
    color: colors.grey500,
    whiteSpace: "nowrap",
    paddingRight: "12px",
  },

  searchBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    columnGap: "9px",
    padding: "0 12px",
  },

  searchTab: {
    whiteSpace: "nowrap",
    position: "relative",
    fontSize: fontSize.s14,
    color: colors.blue,
    backgrounColor: "transparent !important",
    transition: "0.3s ease-in-out",
    "&:hover": {
      fontWeight: "500",
    },
  },
};

// ----------------------------------------
// -------------- SearchIcon --------------
// ----------------------------------------
function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.3866 21.1152C22.3466 20.9052 22.2466 20.7152 22.0966 20.5652L17.1166 15.6052L17.2966 15.3752L17.1366 15.2552L17.2866 15.3752C18.7466 13.4352 19.4066 11.0052 19.1566 8.58523C18.8966 6.16523 17.7366 3.94523 15.8966 2.34523C14.0766 0.765232 11.7066 -0.0747677 9.27655 0.00523228C6.84655 0.0952323 4.54655 1.09523 2.82655 2.81523C1.10655 4.53523 0.0965528 6.84523 0.0065528 9.26523C-0.0834472 11.6952 0.756553 14.0652 2.34655 15.9052C3.93655 17.7452 6.16655 18.9052 8.58655 19.1652C11.0066 19.4252 13.4266 18.7552 15.3766 17.3052L15.6066 17.1252L20.5666 22.1052C20.7666 22.3052 21.0366 22.4152 21.3166 22.4052H21.3266C21.5366 22.4052 21.7466 22.3352 21.9266 22.2152C22.1066 22.0952 22.2366 21.9252 22.3166 21.7352C22.3966 21.5352 22.4166 21.3252 22.3766 21.1152H22.3866ZM9.64655 17.0552C7.67655 17.0552 5.79655 16.2752 4.40655 14.8852C3.01655 13.4952 2.23655 11.6052 2.23655 9.64523C2.23655 7.68523 3.01655 5.79523 4.40655 4.40523C5.79655 3.01523 7.67655 2.23523 9.64655 2.23523C11.5866 2.27523 13.4366 3.07523 14.7966 4.45523C16.1566 5.84523 16.9166 7.70523 16.9166 9.64523C16.9166 11.5852 16.1566 13.4452 14.7966 14.8352C13.4366 16.2252 11.5866 17.0152 9.64655 17.0552Z"
        fill="#999999"
      />
    </svg>
  );
}
