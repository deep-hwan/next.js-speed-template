/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import {
  FlexTheme,
  MarignTheme,
  PaddingTheme,
  TabTheme,
  TypographyTheme,
  ViewportTheme,
} from '@/libs/themes/_theme';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'border' | 'box';
  type?: 'button' | 'submit';
  width?: 'auto' | '100%';
  minWidth?: number | string;
  maxWidth?: number | string;
  gap?: number;
  txtSize?: number | string;
  weight?: 'lighter' | 'normal' | 'medium' | 'bold';
  colors?: { button?: string; txt?: string };
  borderRadius?: number | string;
  boxShadow?: {
    x?: number;
    y?: number;
    blur?: number;
    color?: string;
  };
  border?: {
    solid: number;
    color?: string;
  };
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

type ThemeStyleProps = Omit<Props, 'children'>;

// ---------------------------------
// -------------- Tab --------------
// ---------------------------------
export const Tab = forwardRef(function Tab(
  {
    children,
    variant = 'box',
    type = 'button',
    width = 'auto',
    maxWidth,
    minWidth,
    txtSize = 14,
    weight,
    gap = 8,
    colors = {
      button: variant === 'box' ? '#f5f7fc' : '#ffffff',
      txt: variant === 'box' ? '#797979' : '#666666',
    },
    borderRadius = 13,
    border = {
      solid: variant === 'border' ? 1 : 0,
      color: variant === 'border' ? '#e2e2e2' : 'transparent',
    },
    boxShadow,
    padding = { horizontal: 12, vertical: 10 },
    margin,
    ...props
  }: Props,
  ref?: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      type={type}
      ref={ref}
      css={[
        getThemeStyles({ variant }),
        TypographyTheme({ size: txtSize, color: colors.txt, weight, whiteSpace: 'nowrap' }),
        ViewportTheme({ width, maxWidth, minWidth }),
        FlexTheme({ direction: 'horizontal', align: 'center', crossAlign: 'center', gap }),
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        TabTheme({
          backgroundColor: colors?.button,
          border,
          borderRadius,
          boxShadow,
        }),
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
function getThemeStyles({ variant }: ThemeStyleProps): Interpolation<Theme> {
  return {
    '&:hover': {
      opacity: variant === 'box' ? '0.85' : undefined,
      backgroundColor: variant === 'border' ? '#fafafa' : undefined,
    },
    '&:disabled': {
      opacity: variant === 'box' ? '0.55' : undefined,
      backgroundColor: variant === 'border' ? '#fafafa' : undefined,
      color: variant === 'border' ? '#aaaaaa' : undefined,
      cursor: 'default',
    },
  };
}
