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
interface ItemsProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'center' | 'stretch' | 'end';
  crossAlign?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  width?: 'auto' | '100%';
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
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

interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'center' | 'stretch' | 'end';
  crossAlign?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  width?: 'auto' | '100%';
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

// -----------------------------------
// -------------- Items --------------
// -----------------------------------
export const Items = forwardRef(function Items(
  {
    children,
    direction = 'vertical',
    align,
    crossAlign,
    wrap = 'nowrap',
    gap = 0,
    width = '100%',
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    padding = { all: 0 },
    margin = { all: 0 },
    ...props
  }: ItemsProps,
  ref?: ForwardedRef<HTMLUListElement>,
) {
  return (
    <ul
      ref={ref}
      css={[
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        ViewportTheme({ width, minWidth, maxWidth, minHeight, maxHeight }),
        FlexTheme({
          direction,
          align: align ? align : direction === 'horizontal' ? 'stretch' : 'center',
          crossAlign,
          wrap,
          gap,
        }),
      ]}
      {...props}
    >
      {children}
    </ul>
  );
});

// ----------------------------------
// -------------- Item --------------
// ----------------------------------
export const Item = forwardRef(function Item(
  {
    children,
    direction = 'vertical',
    align,
    crossAlign,
    wrap = 'nowrap',
    gap = 0,
    width = '100%',
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    padding = { all: 0 },
    margin = { all: 0 },
    border,
    backgroundColor,
    borderRadius,
    boxShadow,
    ...props
  }: ItemProps,
  ref?: ForwardedRef<HTMLLIElement>,
) {
  return (
    <li
      ref={ref}
      css={[
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        ViewportTheme({ width, minWidth, maxWidth, minHeight, maxHeight }),
        FlexTheme({ direction, align, crossAlign, wrap, gap }),
        StyleTheme({ backgroundColor, border, borderRadius, boxShadow }),
      ]}
      {...props}
    >
      {children}
    </li>
  );
});
