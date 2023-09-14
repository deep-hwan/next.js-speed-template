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
}

// -----------------------------------------------
// -------------- Cantainer (부모1) --------------
// -----------------------------------------------
export const Container = forwardRef(function Container(
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
  }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
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
          height: maxHeight ? '100%' : 'auto',
          minHeight: `${minHeight}px`,
          maxHeight: `${maxHeight}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
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
  }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
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
          height: maxHeight ? '100%' : 'auto',
          minHeight: `${minHeight}px`,
          maxHeight: `${maxHeight}px`,
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

// -----------------------------------------
// -------------- Box (부모3) --------------
// -----------------------------------------
export const Box = forwardRef(function Box(
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
  }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
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
          height: maxHeight ? '100%' : 'auto',
          minHeight: `${minHeight}px`,
          maxHeight: `${maxHeight}px`,
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

// -----------------------------------------
// -------------- Row (부모3) --------------
// -----------------------------------------
export const Row = forwardRef(function Row(
  {
    children,
    direction = 'horizontal',
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
  }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
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
          height: maxHeight ? '100%' : 'auto',
          minHeight: `${minHeight}px`,
          maxHeight: `${maxHeight}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          alignItems: align ? align : direction === 'horizontal' ? 'center' : 'flex-start',
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

// -------------------------------------------
// -------------- Column (부모3) --------------
// -------------------------------------------
export const Column = forwardRef(function Column(
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
  }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
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
          height: maxHeight ? '100%' : 'auto',
          minHeight: `${minHeight}px`,
          maxHeight: `${maxHeight}px`,
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
    width = '100%',
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    gap = 0,
    ...props
  }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
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
          height: maxHeight ? '100%' : 'auto',
          minHeight: `${minHeight}px`,
          maxHeight: `${maxHeight}px`,
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
    boxShadow: '0px 2px 36px rgba(0,0,0,0.07)',
    background: '#fff',
    borderRadius: '18px',
    transition: '0.3s ease-in-out',
  },
};
