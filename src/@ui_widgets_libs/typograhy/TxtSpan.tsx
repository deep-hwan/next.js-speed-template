/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  size?: number;
  color?: string;
  weight?: 'lighter' | 'normal' | 'medium' | 'bold';
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

// -------------------------------------
// -------------- TxtSpan --------------
// -------------------------------------
export const TxtSpan = forwardRef(function TxtSpan(
  {
    children,
    size = 13,
    weight = 'normal',
    color = '#888888',
    padding = { all: 0 },
    margin = { all: 0 },
    ...props
  }: Props,
  ref?: ForwardedRef<HTMLSpanElement>,
) {
  const themeProps = { size, color, padding, margin };

  return (
    <span ref={ref} css={[getThemeStyles(themeProps), TYPOGRAPH_WEIGHT[weight]]} {...props}>
      {children}
    </span>
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

function getThemeStyles({ size, color, padding, margin }: ThemeStyleProps): Interpolation<Theme> {
  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    transition: '0.3s ease-in-out',
    color: color,
    fontSize: size ? `${size / 16}rem` : '0.813rem',
    paddingTop:
      (padding?.all && `${padding?.all}px`) ||
      (padding?.vertical && `${padding?.vertical}px`) ||
      (padding?.top && `${padding?.top}px`),
    paddingBottom:
      (padding?.all && `${padding?.all}px`) ||
      (padding?.vertical && `${padding?.vertical}px`) ||
      (padding?.bottom && `${padding?.bottom}px`),
    paddingLeft:
      (padding?.all && `${padding?.all}px`) ||
      (padding?.horizontal && `${padding?.horizontal}px`) ||
      (padding?.left && `${padding?.left}px`),
    paddingRight:
      (padding?.all && `${padding?.all}px`) ||
      (padding?.horizontal && `${padding?.horizontal}px`) ||
      (padding?.right && `${padding?.right}px`),
    marginTop:
      (margin?.all && `${margin?.all}px`) ||
      (margin?.vertical && `${margin?.vertical}px`) ||
      (margin?.top && `${margin?.top}px`),
    marginBottom:
      (margin?.all && `${margin?.all}px`) ||
      (margin?.vertical && `${margin?.vertical}px`) ||
      (margin?.bottom && `${margin?.bottom}px`),
    marginLeft:
      (margin?.all && `${margin?.all}px`) ||
      (margin?.horizontal && `${margin?.horizontal}px`) ||
      (margin?.left && `${margin?.left}px`),
    marginRight:
      (margin?.all && `${margin?.all}px`) ||
      (margin?.horizontal && `${margin?.horizontal}px`) ||
      (margin?.right && `${margin?.right}px`),
  };
}
