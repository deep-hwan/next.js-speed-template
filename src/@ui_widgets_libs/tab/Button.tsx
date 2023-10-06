/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { MarignTheme, PaddingTheme, StyleTheme } from '@/libs/theme/global';
import { colors } from '@/libs/theme/colors';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
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

// ------------------------------------
// -------------- Button --------------
// ------------------------------------
const color = colors;
export const Button = forwardRef(function Button(
  {
    children,
    width = '100%',
    maxWidth,
    minWidth,
    txtSize = 15,
    weight = 'normal',
    colors = { button: color.keyColor, txt: '#f0f0f0' },
    borderRadius = 18,
    border,
    boxShadow,
    padding,
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
  };

  return (
    <button
      ref={ref}
      css={[
        buttonStyle as Interpolation<Theme>,
        TYPOGRAPH_WEIGHT[weight],
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
const buttonStyle = {
  width: '100%',
  minHeight: '56px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  outline: 'none',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  transition: '0.3s ease-in-out',
  lineHeight: '26px',

  '&:hover': { opacity: '0.9' },

  '&:disabled': {
    opacity: '0.25',
    cursor: 'default',
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
