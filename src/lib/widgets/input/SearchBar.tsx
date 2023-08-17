import { CSSObject } from "@emotion/react";

import React, { Children, InputHTMLAttributes } from "react";

import { colors } from "../../theme/colors";
import { borderRadius, fontSize } from "../../theme/size";
import {
  ForwardedRef,
  HTMLAttributes,
  ReactElement,
  cloneElement,
  forwardRef,
} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement;
  id?: string;
  onClick?: () => void;
  searchTab?: boolean;
}

export function SearchBar(
  { onClick, searchTab, children, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
  const child = Children.only(children);
  const id = child.props.id ?? "seerchId";

  return (
    <div
      css={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: colors.white,
        borderRadius: borderRadius.s600,
        border: `1px solid ${colors.grey200}`,
        columnGap: "12px",
        padding: "14px",
      }}
      {...props}
    >
      <SearchIcon />

      {cloneElement(child, {
        id,
        ...child.props,
      })}

      {searchTab && (
        <>
          {cloneElement(
            <button
              type="button"
              id={id}
              css={{
                whiteSpace: "nowrap",
                position: "relative",
                fontSize: fontSize.s14,
                color: colors.blue,
                transition: "0.3s ease-in-out",

                "&:hover": {
                  fontWeight: "500",
                },
              }}
              onClick={onClick}
            >
              검색
            </button>
          )}
        </>
      )}
    </div>
  );
}

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
}

SearchBar.SearchInput = forwardRef(function SearchInput(
  { id, ...props }: SearchInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      type="search"
      placeholder="검색어를 입력하세요"
      onKeyDown={(e) => {
        if (e.keyCode === 13) {
          document.getElementById(id ? id : "searchId")?.click();
        }
      }}
      css={{
        fontSize: fontSize.s15,
        width: "100%",
        ...TextInputGlobalStyles,
      }}
      {...props}
    />
  );
});

//
///
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

  // Hide the scrollbar
  "::-webkit-scrollbar": {
    display: "none",
  },
};
