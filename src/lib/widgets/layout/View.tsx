/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';
import {
  FlexTheme,
  MarignTheme,
  PaddingTheme,
  StyleTheme,
  ViewportTheme,
} from '@/lib/theme/global';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'center' | 'stretch' | 'end';
  crossAlign?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  width?: 'auto' | '100%';
  height?: 'auto' | '100%';
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  backgroundColor?: string;
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

// ----------------------------------------------
// -------------- Container (부모1) --------------
// ----------------------------------------------
export const Container = forwardRef(function Container(
  {
    children,
    direction = 'vertical',
    align,
    crossAlign,
    wrap = 'nowrap',
    gap = 0,
    width = '100%',
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    border,
    backgroundColor,
    borderRadius,
    boxShadow,
    padding,
    margin,
    ...props
  }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      css={[
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        ViewportTheme({ width, height, minWidth, maxWidth, minHeight, maxHeight }),
        FlexTheme({ direction, align, crossAlign, wrap, gap }),
        StyleTheme({ backgroundColor, border, borderRadius, boxShadow }),
      ]}
      {...props}
    >
      {children}
    </div>
  );
});

// -----------------------------------------
// -------------- Wrap (부모1) --------------
// -----------------------------------------
export const Wrap = forwardRef(function Wrap(
  {
    children,
    direction = 'vertical',
    align,
    crossAlign,
    wrap = 'nowrap',
    gap = 0,
    width = '100%',
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    border,
    backgroundColor,
    borderRadius,
    boxShadow,
    padding,
    margin,
    ...props
  }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      css={[
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        ViewportTheme({ width, height, minWidth, maxWidth, minHeight, maxHeight }),
        FlexTheme({ direction, align, crossAlign, wrap, gap }),
        StyleTheme({ backgroundColor, border, borderRadius, boxShadow }),
      ]}
      {...props}
    >
      {children}
    </div>
  );
});

// -----------------------------------------
// -------------- Row (부모3) --------------
// -----------------------------------------
export const Row = forwardRef(function Row(
  {
    children,
    direction = 'horizontal',
    align = 'stretch',
    crossAlign,
    wrap = 'nowrap',
    gap = 0,
    width = '100%',
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    border,
    backgroundColor,
    borderRadius,
    boxShadow,
    padding,
    margin,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      css={[
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        ViewportTheme({ width, height, minWidth, maxWidth, minHeight, maxHeight }),
        FlexTheme({ direction, align, crossAlign, wrap, gap }),
        StyleTheme({ backgroundColor, border, borderRadius, boxShadow }),
      ]}
      {...props}
    >
      {children}
    </div>
  );
});

// -------------------------------------------
// -------------- Column (부모3) --------------
// -------------------------------------------
export const Column = forwardRef(function Column(
  {
    children,
    direction = 'vertical',
    align = 'start',
    crossAlign,
    wrap = 'nowrap',
    gap = 0,
    width = '100%',
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    border,
    backgroundColor,
    borderRadius,
    boxShadow,
    padding,
    margin,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      css={[
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        ViewportTheme({ width, height, minWidth, maxWidth, minHeight, maxHeight }),
        FlexTheme({ direction, align, crossAlign, wrap, gap }),
        StyleTheme({ backgroundColor, border, borderRadius, boxShadow }),
      ]}
      {...props}
    >
      {children}
    </div>
  );
});

// -----------------------------------------------------------
// -------------- BoxShadow (부모3 : 그림자타입) -----------------
// -----------------------------------------------------------
export const BoxShadow = forwardRef(function BoxShadow(
  {
    children,
    direction = 'vertical',
    align,
    crossAlign,
    wrap = 'nowrap',
    gap = 0,
    width = '100%',
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    border,
    backgroundColor = '#ffffff',
    borderRadius = 18,
    boxShadow = {
      x: 0,
      y: 2,
      blur: 36,
      color: 'rgba(0,0,0,0.075)',
    },
    padding,
    margin,
    ...props
  }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      css={[
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        ViewportTheme({ width, height, minWidth, maxWidth, minHeight, maxHeight }),
        FlexTheme({ direction, align, crossAlign, wrap, gap }),
        StyleTheme({ backgroundColor, border, borderRadius, boxShadow }),
      ]}
      {...props}
    >
      {children}
    </div>
  );
});
