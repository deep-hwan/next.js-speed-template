import { CSSObject } from "@emotion/react";

// ------------------------
// -------- Colors --------
// ------------------------
export const colors = {
  keyColor: "#4788f4",

  none: "transparent",
  white: "#ffffff",

  black100: "#333333",
  black200: "#222222",
  black300: "#181818",

  grey000: "#f6f6f6",
  grey100: "#eeeeee",
  grey200: "#e2e2e2",
  grey300: "#cccccc",
  grey400: "#aaaaaa",
  grey500: "#9DA2A7",
  grey600: "#888888",
  grey700: "#797979",
  grey800: "#555555",

  red: "#ED5C5C",
  redBg: "#FFF2F2",

  blue: "#4788f4",
  blueBg: "#EEF4FD",

  ground100: "#f8f9fc",
  ground200: "#f5f7fc",
} as const;

// -------------------------------------
// -------- Global_Input_Styles --------
// -------------------------------------
export const GlobalInputStyles: CSSObject = {
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
