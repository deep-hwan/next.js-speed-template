/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';
import { FlexTheme, PaddingTheme, ViewportTheme } from '@/libs/themes/_theme';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'center' | 'stretch' | 'end';
  crossAlign?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  crossGap?: number;
  maxWidth?: number | string;
  minWidth?: number | string;
  backgroundColor?: string;
  padding?: {
    all?: number;
    horizontal?: number;
    vertical?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}

// -------------------------------------
// -------------- Section --------------
// -------------------------------------
export const Section = forwardRef(function Section(
  {
    direction = 'vertical',
    align = 'center',
    crossAlign,
    wrap = 'nowrap',
    gap = 0,
    crossGap = 0,
    minWidth,
    maxWidth,
    children,
    backgroundColor,
    padding,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLElement>,
) {
  return (
    <section
      ref={ref}
      css={[
        PaddingTheme({ safeArea: true, padding }),
        ViewportTheme({ width: '100%', height: '100%', minWidth, maxWidth }),
        FlexTheme({ direction, align, crossAlign, wrap, gap, crossGap }),
        {
          flex: '1 auto',
          backgroundColor: backgroundColor,
        },
      ]}
      {...props}
    >
      {children}
    </section>
  );
});
