/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { MarignTheme, PaddingTheme, StyleTheme } from '@/lib/theme/global';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
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
    width = 'auto',
    maxWidth,
    minWidth,
    txtSize = 14,
    weight,
    colors = {
      button: '#f5f7fc',
      txt: '#797979',
    },
    borderRadius = 13,
    border,
    boxShadow,
    padding = { horizontal: 14, vertical: 12 },
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
      type="button"
      ref={ref}
      css={[
        buttonStyles as Interpolation<Theme>,
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
const buttonStyles = {
  position: 'relative',
  whiteSpace: 'nowrap',
  transition: '0.3s ease-in-out',
  outline: 'none',
  border: 'none',

  '&:hover': {
    opacity: 0.85,
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
  };
}
