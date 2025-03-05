export function GlobalInputTheme() {
  return {
    "&[type='number']::-webkit-outer-spin-button, &[type='number']::-webkit-inner-spin-button": {
      WebkitAppearance: 'none',
      margin: 0,
    },

    '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
      WebkitTextFillColor: '#797979',
      WebkitBoxShadow: '0 0 0px 1000px transparent inset',
      boxShadow: '0 0 0px 1000px transparent inset',
      transition: 'background-color 5000s ease-in-out 0s',
      transitionDelay: '9999s',
    },

    '&:autofill, &:autofill:hover, &:autofill:focus, &:autofill:active': {
      WebkitTextFillColor: '#797979',
      WebkitBoxShadow: '0 0 0px 1000px transparent inset',
      boxShadow: '0 0 0px 1000px transparent inset',
      transition: 'background-color 5000s ease-in-out 0s',
    },

    '::-webkit-scrollbar': {
      display: 'none',
    },
  };
}
