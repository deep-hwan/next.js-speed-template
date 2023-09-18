/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { colors } from '../../theme/_index';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'medium' | 'large';
}

// ------------------------------------
// -------------- Button --------------
// ------------------------------------
export const Button = forwardRef(function Button(
  { variant = 'primary', size = 'medium', children, ...props }: Props,
  ref?: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      css={
        {
          ...buttonStyle,
          ...TYPE_VARIANTS[variant],
          ...SIZE_VARIANTS[size],
        } as Interpolation<Theme>
      }
      {...props}
    >
      {children}
    </button>
  );
});

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const TYPE_VARIANTS = {
  primary: {
    color: '#eeeeee',
    backgroundColor: colors.keyColor,
  },
  secondary: {
    color: '#999999',
    backgroundColor: '#252525',
  },
};

const SIZE_VARIANTS = {
  medium: {
    fontSize: '0.938rem',
    padding: '11px 16px',
  },
  large: {
    fontSize: '1rem',
    padding: '12px 22px',
  },
};

const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '54px',
  outline: 'none',
  border: '0 solid transparent',
  borderRadius: '18px',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  transition: '0.3s ease-in-out',
  fontWeight: 500,
  lineHeight: '26px',

  '&:hover': { opacity: '0.93' },

  '&:disabled': {
    opacity: '0.25',
  },
};
