/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, ReactNode, forwardRef, HTMLAttributes } from 'react';
import { Interpolation, Theme } from '@emotion/react';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong' | 'p';
  direction?: 'horizontal' | 'vertical';
  gap?: number;
  color?: string;
  size?: number;
  lineHeight?: number;
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

// -----------------------------------------------------
// -------------- Txt [h1~6 / strong / p] --------------
// -----------------------------------------------------
export const Txt = forwardRef(function Txt(
  {
    children,
    as = 'p',
    direction = 'horizontal',
    gap = 4,
    size,
    weight,
    color = '#333333',
    lineHeight = 1.48,
    padding = { all: 0 },
    margin = { all: 0 },
    ...Props
  }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  const themeProps = { direction, gap, lineHeight, color, padding, margin };

  return (
    <>
      {as === 'h1' && (
        <h1
          ref={ref}
          css={[
            { fontSize: size ? `${size / 16}rem` : '3.25rem' },
            TYPOGRAPH_WEIGHT[weight ? weight : 'bold'],
            getThemeStyles(themeProps),
          ]}
          {...Props}
        >
          {children}
        </h1>
      )}

      {as === 'h2' && (
        <h2
          ref={ref}
          css={[
            { fontSize: size ? `${size / 16}rem` : '2.75rem' },
            TYPOGRAPH_WEIGHT[weight ? weight : 'bold'],
            getThemeStyles(themeProps),
          ]}
          {...Props}
        >
          {children}
        </h2>
      )}

      {as === 'h3' && (
        <h3
          ref={ref}
          css={[
            { fontSize: size ? `${size / 16}rem` : '2.375rem' },
            TYPOGRAPH_WEIGHT[weight ? weight : 'bold'],
            getThemeStyles(themeProps),
          ]}
          {...Props}
        >
          {children}
        </h3>
      )}

      {as === 'h4' && (
        <h4
          ref={ref}
          css={[
            { fontSize: size ? `${size / 16}rem` : '2rem' },
            TYPOGRAPH_WEIGHT[weight ? weight : 'bold'],
            getThemeStyles(themeProps),
          ]}
          {...Props}
        >
          {children}
        </h4>
      )}

      {as === 'h5' && (
        <h5
          ref={ref}
          css={[
            { fontSize: size ? `${size / 16}rem` : '1.75rem' },
            TYPOGRAPH_WEIGHT[weight ? weight : 'bold'],
            getThemeStyles(themeProps),
          ]}
          {...Props}
        >
          {children}
        </h5>
      )}

      {as === 'h6' && (
        <h6
          ref={ref}
          css={[
            { fontSize: size ? `${size / 16}rem` : '1.25rem' },
            TYPOGRAPH_WEIGHT[weight ? weight : 'bold'],
            getThemeStyles(themeProps),
          ]}
          {...Props}
        >
          {children}
        </h6>
      )}

      {as === 'strong' && (
        <strong
          ref={ref}
          css={[
            { fontSize: size ? `${size / 16}rem` : '1.125rem' },
            TYPOGRAPH_WEIGHT[weight ? weight : 'medium'],
            getThemeStyles(themeProps),
          ]}
          {...Props}
        >
          {children}
        </strong>
      )}

      {as === 'p' && (
        <p
          ref={ref}
          css={[
            { fontSize: size ? `${size / 16}rem` : '0.938rem' },
            TYPOGRAPH_WEIGHT[weight ? weight : 'normal'],
            getThemeStyles(themeProps),
          ]}
          {...Props}
        >
          {children}
        </p>
      )}
    </>
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
  direction,
  gap,
  lineHeight,
  color,
  padding,
  margin,
}: ThemeStyleProps): Interpolation<Theme> {
  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'pre-line',
    transition: '0.3s ease-in-out',
    lineHeight: lineHeight,
    color: color,
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    rowGap: direction === 'vertical' ? `${gap}px` : undefined,
    columnGap: direction === 'horizontal' ? `${gap}px` : undefined,
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
