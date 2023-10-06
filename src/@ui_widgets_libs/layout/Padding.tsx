/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';
import {
  FlexTheme,
  MarignTheme,
  PaddingTheme,
  StyleTheme,
  ViewportTheme,
} from '@/libs/theme/global';

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
  all?: number;
  horizontal?: number;
  vertical?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
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
    position?: 'left' | 'right' | 'top' | 'bottom';
    color?: string;
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

export const Padding = forwardRef(function Container(
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
    all,
    horizontal,
    vertical,
    top,
    bottom,
    left,
    right,
    border,
    backgroundColor,
    borderRadius,
    boxShadow,
    margin,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const padding = { all, horizontal, vertical, top, bottom, left, right };
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
