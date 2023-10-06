/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { MarignTheme, PaddingTheme, StyleTheme } from '@/libs/theme/global';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'border' | 'box';
  type?: 'button' | 'submit';
  width?: 'auto' | '100%';
  minWidth?: number;
  maxWidth?: number;
  txtSize?: number;
  weight?: 'lighter' | 'normal' | 'medium' | 'bold';
  colors?: { button?: string; txt?: string };
  borderRadius?: number;
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
  const themeProps = {
    width,
    maxWidth,
    minWidth,
    txtSize,
    colors,
    borderRadius,
    border,
    boxShadow,
    padding,
    margin,
  };

  return (
    <button
      type={type}
      ref={ref}
      css={[
        {
          '&:hover': {
            opacity: variant === 'box' ? '0.85' : undefined,
            backgroundColor: variant === 'border' ? '#fafafa' : undefined,
          },
          '&:disabled': {
            opacity: variant === 'box' ? '0.4' : undefined,
            backgroundColor: variant === 'border' ? '#fafafa' : undefined,
            color: variant === 'border' ? '#aaaaaa' : undefined,
            cursor: 'default',
          },
        },
        TYPOGRAPH_WEIGHT[weight ? weight : 'normal'],
        getThemeStyles(themeProps),
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        StyleTheme({
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

const TYPOGRAPH_WEIGHT = {
  lighter: { fontWeight: '300' },
  normal: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  bold: { fontWeight: '600' },
} as const;

function getThemeStyles({
  width,
  maxWidth,
  minWidth,
  txtSize,
  colors,
}: ThemeStyleProps): Interpolation<Theme> {
  return {
    width: width,
    minWidth: minWidth && `${minWidth}px`,
    maxWidth: maxWidth && `${maxWidth}px`,
    fontSize: txtSize ? `${txtSize / 16}rem` : '1em',
    color: colors?.txt,
    position: 'relative',
    whiteSpace: 'nowrap',
    transition: '0.3s ease-in-out',
    outline: 'none',
    border: 'none',
  };
}
