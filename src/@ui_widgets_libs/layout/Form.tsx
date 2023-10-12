/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

import {
  FlexTheme,
  MarignTheme,
  PaddingTheme,
  ScrollTheme,
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
  crossAlign?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  crossGap?: number;
  width?: 'auto' | '100%';
  height?: 'auto' | '100%';
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
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
  scroll?: {
    type?: 'visible' | 'auto' | 'scroll' | 'hidden';
    bar?: boolean;
  };
}

// ----------------------------------
// -------------- Form --------------
// ----------------------------------
export const Form = forwardRef(function Form(
  {
    children,
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
    border,
    backgroundColor,
    borderRadius,
    boxShadow,
    padding,
    margin,
    scroll,
    ...props
  }: Props,
  ref?: ForwardedRef<HTMLFormElement>,
) {
  return (
    <form
      ref={ref}
      css={[
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        ViewportTheme({ width, height, minWidth, maxWidth, minHeight, maxHeight }),
        FlexTheme({ direction, align, crossAlign, wrap, gap, crossGap }),
        StyleTheme({ backgroundColor, border, borderRadius, boxShadow }),
        ScrollTheme({ scroll }),
      ]}
      {...props}
    >
      {children}
    </form>
  );
});
