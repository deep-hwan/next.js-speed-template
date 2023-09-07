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
  width?: 'auto' | '100%';
  minWidth?: number;
  maxWidth?: number;
}

// -----------------------------------------------
// -------------- Cantainer (부모1) --------------
// -----------------------------------------------
export const Container = forwardRef(function Container(
  {
    children,
    direction = 'vertical',
    width = '100%',
    minWidth,
    maxWidth,
    gap = 0,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      css={
        {
          ...styles.default,
          width: width,
          minWidth: minWidth && `${minWidth}px`,
          maxWidth: maxWidth && `${maxWidth}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          alignItems: direction === 'horizontal' ? 'stretch' : 'center',
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

// ------------------------------------------
// -------------- Wrap (부모2) --------------
// ------------------------------------------
export const Wrap = forwardRef(function Wrap(
  {
    children,
    direction = 'vertical',
    width = '100%',
    minWidth,
    maxWidth,
    gap = 0,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      css={
        {
          ...styles.default,
          width: width,
          minWidth: minWidth && `${minWidth}px`,
          maxWidth: maxWidth && `${maxWidth}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          alignItems: direction === 'horizontal' ? 'stretch' : 'flex-start',
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

// -----------------------------------------
// -------------- Box (부모3) --------------
// -----------------------------------------
export const Box = forwardRef(function Box(
  {
    children,
    direction = 'vertical',
    width = '100%',
    minWidth,
    maxWidth,
    gap = 0,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      css={
        {
          ...styles.default,
          width: width,
          minWidth: minWidth && `${minWidth}px`,
          maxWidth: maxWidth && `${maxWidth}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          alignItems: direction === 'horizontal' ? 'stretch' : 'flex-start',
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

// -----------------------------------------------------------
// -------------- BoxShadow (부모3 : 그림자타입) --------------
// -----------------------------------------------------------
export const BoxShadow = forwardRef(function BoxShadow(
  {
    children,
    direction = 'vertical',
    width = '100%',
    minWidth,
    maxWidth,
    gap = 0,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      css={
        {
          ...styles.boxShadow,
          width: width,
          minWidth: minWidth && `${minWidth}px`,
          maxWidth: maxWidth && `${maxWidth}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          alignItems: direction === 'horizontal' ? 'stretch' : 'flex-start',
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

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const styles = {
  default: {
    position: 'relative',
    display: 'flex',
    transition: '0.3s ease-in-out',
  },

  boxShadow: {
    position: 'relative',
    display: 'flex',
    boxShadow: '0px 2px 30px rgba(0,0,0,0.08)',
    background: '#fff',
    borderRadius: '18px',
    transition: '0.3s ease-in-out',
  },
};
