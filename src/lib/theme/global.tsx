import { CSSObject } from "@emotion/react";
import { colors } from "./colors";

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
