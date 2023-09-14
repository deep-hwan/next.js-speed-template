/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

import { Interpolation, Theme } from '@emotion/react';

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
    ...props
  }: ItemsProps,
  ref?: ForwardedRef<HTMLUListElement>,
) {
  return (
    <ul
      ref={ref}
      css={
        {
          ...defaultStyles,
          width: width,
          minWidth: minWidth && `${minWidth}px`,
          maxWidth: maxWidth && `${maxWidth}px`,
          height: maxHeight ? '100%' : 'auto',
          minHeight: `${minHeight}px`,
          maxHeight: `${maxHeight}px`,
          flexDirection: direction === 'vertical' ? 'column' : 'row',
          alignItems: align ? align : direction === 'horizontal' ? 'stretch' : 'center',
          justifyContent: crossAlign && crossAlign,
          flexWrap: wrap,
          rowGap: direction === 'vertical' ? `${gap}px` : undefined,
          columnGap: direction === 'horizontal' ? `${gap}px` : undefined,
        } as Interpolation<Theme>
      }
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
    ...props
  }: ItemProps,
  ref?: ForwardedRef<HTMLLIElement>,
) {
  return (
    <li
      ref={ref}
      css={
        {
          ...defaultStyles,
          width: width,
          minWidth: minWidth && `${minWidth}px`,
          maxWidth: maxWidth && `${maxWidth}px`,
          height: maxHeight ? '100%' : 'auto',
          minHeight: `${minHeight}px`,
          maxHeight: `${maxHeight}px`,
          flexDirection: direction === 'vertical' ? 'column' : 'row',
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
    </li>
  );
});

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const defaultStyles = {
  position: 'relative',
  padding: '0',
  margin: '0',
  display: 'flex',
  transition: '0.3s ease-in-out',
  listStyle: 'none',
};
