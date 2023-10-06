/** @jsxImportSource @emotion/react */
import {
  FlexTheme,
  MarignTheme,
  PaddingTheme,
  StyleTheme,
  ViewportTheme,
} from '@/libs/theme/global';
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

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
  type?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
  position?: {
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
    x?: string;
    y?: string;
  };
}

export const Position = forwardRef(function Position(
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
    type = 'relative',
    position,
    ...props
  }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  const { top, bottom, left, right, x = '0px', y = '0px' } = position || {};

  return (
    <div
      ref={ref}
      css={[
        {
          position: type,
          top: `${top}px`,
          bottom: `${bottom}px`,
          left: `${left}px`,
          right: `${right}px`,
          transform: `translate(${x}, ${y})`,
        },
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
