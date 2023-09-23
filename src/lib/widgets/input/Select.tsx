/** @jsxImportSource @emotion/react */
import React, {
  Children,
  ForwardedRef,
  HTMLAttributes,
  OptionHTMLAttributes,
  ReactElement,
  ReactNode,
  SelectHTMLAttributes,
  cloneElement,
  forwardRef,
  memo,
} from 'react';
import { Interpolation, Theme } from '@emotion/react';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  labelEdge?: string;
  children: ReactElement;
  maxWidth?: number;
}

interface SelectBoxProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  shape?: 'default' | 'box';
  placeholder?: string;
  error?: boolean;
  errorMsg?: string;
  tolTip?: string;
}

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  children: ReactNode;
}

// -------------------------------------------
// -------------- Input (Label) --------------
// -------------------------------------------
export function Select({ children, label, labelEdge, maxWidth, ...props }: SelectProps) {
  const child = Children.only(children);
  const id = child.props.id ?? 1;
  const error: boolean = child.props.error ?? false;
  const errorMsg: string = child.props.errorMsg ?? undefined;
  const tolTip: string = child.props.tolTip ?? undefined;

  return (
    <div css={{ ...styles.wrap, maxWidth: `${maxWidth}px` } as Interpolation<Theme>} {...props}>
      {label && (
        <label
          htmlFor={id}
          css={{
            color: error ? '#ED5C5C' : '#797979',
            ...styles.label,
          }}
        >
          {label}
          {labelEdge && <span css={styles.labelEdge}>{labelEdge}</span>}
        </label>
      )}

      {cloneElement(child, {
        id,
        ...child.props,
      })}

      {error && <p css={styles.errMsg as Interpolation<Theme>}>{errorMsg}</p>}

      {tolTip && !error && <p css={styles.tolTip as Interpolation<Theme>}>{tolTip}</p>}
    </div>
  );
}

// ---------------------------------------
// -------------- SelectBox --------------
// ---------------------------------------
Select.SelectBox = forwardRef(function SelectBox(
  { children, shape = 'default', placeholder, error, ...props }: SelectBoxProps,
  ref?: ForwardedRef<HTMLSelectElement>,
) {
  const { value } = props;

  return (
    <>
      {cloneElement(
        <select
          ref={ref}
          css={
            {
              ...styles.select,
              ...SelectTypeStyles(shape, error),
              color: value !== '' ? '#555555' : '#cccccc',
            } as Interpolation<Theme>
          }
          {...props}
        >
          {placeholder && (
            <option value="" disabled selected>
              {placeholder}
            </option>
          )}
          {children}
        </select>,
      )}
    </>
  );
});

// ------------------------------------
// -------------- Option --------------
// ------------------------------------
export const Option = memo(function Option({ children, ...props }: OptionProps) {
  return cloneElement(<option {...props}>{children}</option>);
});

// -----------------------------------------
// -------------- THEME_STYLE --------------
// -----------------------------------------
function SelectTypeStyles(shape: 'default' | 'box', error?: boolean | string) {
  let styles: Record<string, string | any> = {};

  if (shape === 'default') {
    styles = {
      padding: '12px',
      borderBottom: error ? `1px solid #ED5C5C` : `1px solid #e2e2e2`,
      backgroundColor: error ? '#FFF8F8' : '#f8f9fc',
      '&:focus, &:hover, &:active': {
        backgroundColor: error ? '#FFF4F4' : '#f5f7fc',
      },
    };
  } else if (shape === 'box') {
    styles = {
      padding: '14px 12px',
      border: error ? `1px solid #ED5C5C` : `1px solid #e2e2e2`,
      backgroundColor: error ? '#FFF8F8' : '#ffffff',
      borderRadius: '14px',
      '&:focus, &:hover, &:active': {
        backgroundColor: error ? '#FFF4F4' : '#fafafa',
      },
    };
  }

  return styles;
}

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const styles = {
  wrap: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    transition: '0.3s ease-in-out',
  },

  label: {
    display: 'inline-block',
    fontSize: '0.813rem',
    marginBottom: '5px',

    '&:focus-within': {
      fontWeight: 500,
    },
  },

  labelEdge: {
    fontSize: '0.7rem',
    color: '#ed5c5c',
    marginLeft: '3px',
  },

  errMsg: {
    color: '#ed5c5c',
    fontSize: '0.75rem',
    whiteSpace: 'pre-line',
    lineHeight: '1.4',
    marginTop: '6px',
  },

  tolTip: {
    color: '#999999',
    fontSize: '0.75rem',
    whiteSpace: 'pre-line',
    lineHeight: '1.4',
    marginTop: '8px',
  },

  select: {
    width: '100%',
    minWidth: '100px',
    display: 'flex',
    fontSize: `0.913rem !important`,
    font: 'inherit',
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    boxSizing: 'border-box',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    cursor: 'pointer',
    backgroundImage:
      'linear-gradient(-45deg, transparent 50%, #cccccc 50%),linear-gradient(45deg, transparent 50%, #cccccc 50%)',
    backgroundPosition: 'calc(100% - 10px) 50%, calc(100% - 15px) 50%',
    backgroundSize: '5px 5px, 5px 5px',
    backgroundRepeat: 'no-repeat',
    outline: '0',
    paddingRight: '30px',
    transition: '0.4s ease-in-out',

    '&:disabled': {
      backgroundColor: '#f2f2f2',
      color: '#999',
      opacity: '0.9',
    },

    '::placeholder': { color: '#cccccc' },

    "&[type='number']::-webkit-outer-spin-button, &[type='number']::-webkit-inner-spin-button": {
      WebkitAppearance: 'none',
      margin: 0,
    },

    '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active':
      {
        WebkitTextFillColor: '#555555',
        WebkitBoxShadow: '0 0 0px 1000px transparent inset',
        boxShadow: '0 0 0px 1000px transparent inset',
        transition: 'background-color 5000s ease-in-out 0s',
      },

    '&:autofill, &:autofill:hover, &:autofill:focus, &:autofill:active': {
      WebkitTextFillColor: '#555555',
      WebkitBoxShadow: '0 0 0px 1000px transparent inset',
      boxShadow: '0 0 0px 1000px transparent inset',
      transition: 'background-color 5000s ease-in-out 0s',
    },

    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
};
