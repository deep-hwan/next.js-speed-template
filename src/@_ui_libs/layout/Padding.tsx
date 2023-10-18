/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';
import {
  FlexTheme,
  MarignTheme,
  PaddingTheme,
  ScrollTheme,
  StyleTheme,
  ViewportTheme,
} from '@/@_ui_libs/_theme';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  direction?: 'horizontal' | 'vertical';
  safeArea?: boolean;
  align?: 'start' | 'center' | 'stretch' | 'end';
  crossAlign?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  crossGap?: number;
  width?: 'auto' | '100%';
  height?: 'auto' | '100%';
  minWidth?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  all?: number;
  horizontal?: number;
  vertical?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  backgroundColor?: string;
  borderRadius?: number | string;
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
  scroll?: {
    type?: 'visible' | 'auto' | 'scroll' | 'hidden';
    bar?: boolean;
  };
}

export const Padding = forwardRef(function Container(
  {
    children,
    safeArea,
    direction = 'vertical',
    align,
    crossAlign,
    wrap = 'nowrap',
    gap = 0,
    crossGap = 0,
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
    scroll,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const padding = { all, horizontal, vertical, top, bottom, left, right };
  return (
    <div
      ref={ref}
      css={[
        PaddingTheme({ safeArea, padding }),
        MarignTheme({ margin }),
        ViewportTheme({ width, height, minWidth, maxWidth, minHeight, maxHeight }),
        FlexTheme({ direction, align, crossAlign, wrap, gap, crossGap }),
        StyleTheme({ backgroundColor, border, borderRadius, boxShadow }),
        ScrollTheme({ scroll }),
      ]}
      {...props}
    >
      {children}
    </div>
  );
});
