/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, ReactNode, forwardRef, HTMLAttributes } from 'react';
import { Interpolation, Theme } from '@emotion/react';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong' | 'p';
  weight?: 'lighter' | 'normal' | 'medium' | 'bold';
  size?: number;
  color?: string;
  direction?: 'horizontal' | 'vertical';
  gap?: number;
}

// -----------------------------------------------------
// -------------- Txt [h1~6 / strong / p] --------------
// -----------------------------------------------------
export const Txt = forwardRef(function Txt(
  {
    as = 'p',
    size,
    weight,
    color = '#333333',
    direction = 'horizontal',
    gap = 4,
    children,
    ...Props
  }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const display = {
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    rowGap: direction === 'vertical' ? `${gap}px` : undefined,
    columnGap: direction === 'horizontal' ? `${gap}px` : undefined,
    alignItems: 'center',
  };

  return (
    <>
      {as === 'h1' && (
        <h1
          ref={ref}
          css={
            {
              ...display,
              ...initialStyle,
              ...TYPOGRAPH_WEIGHT[weight ? weight : 'bold'],
              fontSize: size ? `${size / 16}rem` : '3.25rem',
              color: color,
            } as Interpolation<Theme>
          }
          {...Props}
        >
          {children}
        </h1>
      )}

      {as === 'h2' && (
        <h2
          ref={ref}
          css={
            {
              ...display,
              ...initialStyle,
              ...TYPOGRAPH_WEIGHT[weight ? weight : 'bold'],
              fontSize: size ? `${size / 16}rem` : '2.75rem',
              color: color,
            } as Interpolation<Theme>
          }
          {...Props}
        >
          {children}
        </h2>
      )}

      {as === 'h3' && (
        <h3
          ref={ref}
          css={
            {
              ...display,
              ...initialStyle,
              ...TYPOGRAPH_WEIGHT[weight ? weight : 'bold'],
              fontSize: size ? `${size / 16}rem` : '2.375rem',
              color: color,
            } as Interpolation<Theme>
          }
          {...Props}
        >
          {children}
        </h3>
      )}

      {as === 'h4' && (
        <h4
          ref={ref}
          css={
            {
              ...display,
              ...initialStyle,
              ...TYPOGRAPH_WEIGHT[weight ? weight : 'bold'],
              fontSize: size ? `${size / 16}rem` : '2rem',
              color: color,
            } as Interpolation<Theme>
          }
          {...Props}
        >
          {children}
        </h4>
      )}

      {as === 'h5' && (
        <h5
          ref={ref}
          css={
            {
              ...display,
              ...initialStyle,
              ...TYPOGRAPH_WEIGHT[weight ? weight : 'bold'],
              fontSize: size ? `${size / 16}rem` : '1.75rem',
              color: color,
            } as Interpolation<Theme>
          }
          {...Props}
        >
          {children}
        </h5>
      )}

      {as === 'h6' && (
        <h6
          ref={ref}
          css={
            {
              ...display,
              ...initialStyle,
              ...TYPOGRAPH_WEIGHT[weight ? weight : 'bold'],
              fontSize: size ? `${size / 16}rem` : '1.25rem',
              color: color,
            } as Interpolation<Theme>
          }
          {...Props}
        >
          {children}
        </h6>
      )}

      {as === 'strong' && (
        <strong
          ref={ref}
          css={
            {
              ...display,
              ...initialStyle,
              ...TYPOGRAPH_WEIGHT[weight ? weight : 'medium'],
              fontSize: size ? `${size / 16}rem` : '1.125rem',
              color: color,
            } as Interpolation<Theme>
          }
          {...Props}
        >
          {children}
        </strong>
      )}

      {as === 'p' && (
        <p
          ref={ref}
          css={
            {
              ...initialStyle,
              ...TYPOGRAPH_WEIGHT[weight ? weight : 'normal'],
              fontSize: size ? `${size / 16}rem` : '0.938rem',
              color: color,
            } as Interpolation<Theme>
          }
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
const initialStyle = {
  position: 'relative',
  margin: 0,
  padding: 0,
  lineHeight: '1.4',
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'pre-line',
  transition: '0.3s ease-in-out',
};

const TYPOGRAPH_WEIGHT = {
  lighter: { fontWeight: '300' },
  normal: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  bold: { fontWeight: '600' },
};
