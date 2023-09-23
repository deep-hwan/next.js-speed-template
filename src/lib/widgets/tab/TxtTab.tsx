/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { colors } from '../../theme/_index';
import { MarignTheme, PaddingTheme } from '@/lib/theme/global';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: 'button' | 'submit';
  weight?: 'lighter' | 'normal' | 'medium' | 'bold';
  size?: number;
  color?: string;
  padding?: {
    all?: number;
    horizontal?: number;
    vertical?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  margin?: {
    all?: number;
    horizontal?: number;
    vertical?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}

// ------------------------------------
// -------------- TxtTab --------------
// ------------------------------------
export const TxtTab = forwardRef(function TxtTab(
  { children, type = 'button', size, weight, color, padding, margin, ...props }: TabProps,
  ref?: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      type={type}
      ref={ref}
      css={[
        TYPOGRAPH_WEIGHT[weight ? weight : 'normal'],
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        {
          ...tabStyles,
          fontSize: size ? `${size / 16}rem` : '0.875rem',
          color: color ? color : colors.keyColor,
        } as Interpolation<Theme>,
      ]}
      {...props}
    >
      {children}
    </button>
  );
});

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const tabStyles = {
  position: 'relative',
  whiteSpace: 'nowrap',
  transition: '0.3s ease-in-out',
  outline: 'none',
  border: 'none',

  '&:hover': {
    fontWeight: '500',
  },
  '&:disabled': {
    opacity: 0.4,
  },
};

const TYPOGRAPH_WEIGHT = {
  lighter: { fontWeight: '300' },
  normal: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  bold: { fontWeight: '600' },
} as const;
