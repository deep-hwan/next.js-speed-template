/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';
import { Interpolation, Theme } from '@emotion/react';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  direction?: 'horizontal' | 'vertical';
  gap?: number;
  align?: 'start' | 'center' | 'stretch' | 'end';
  crossAlign?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  width?: 'auto' | '100%';
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
    ...props
  }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      css={
        {
          paddingTop: (all && `${all}px`) || (vertical && `${vertical}px`) || (top && `${top}px`),
          paddingBottom:
            (all && `${all}px`) || (vertical && `${vertical}px`) || (bottom && `${bottom}px`),
          paddingLeft:
            (all && `${all}px`) || (horizontal && `${horizontal}px`) || (left && `${left}px`),
          paddingRight:
            (all && `${all}px`) || (horizontal && `${horizontal}px`) || (right && `${right}px`),
          width: width,
          minWidth: `${minWidth}px`,
          maxWidth: `${maxWidth}px`,
          height: maxHeight ? '100%' : 'auto',
          minHeight: `${minHeight}px`,
          maxHeight: `${maxHeight}px`,
          position: 'relative',
          display: 'flex',
          transition: '0.3s ease-in-out',
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          alignItems: align ? align : direction === 'horizontal' ? 'stretch' : 'flex-start',
          justifyContent: crossAlign && crossAlign,
          flexWrap: wrap,
          rowGap: direction === 'vertical' ? `${gap}px` : undefined,
          columnGap: direction === 'horizontal' ? `${gap}px` : undefined,
        } as Interpolation<Theme>
      }
      {...props}
    >
      {children}
    </div>
  );
});
