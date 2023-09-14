/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLElement> {
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'center' | 'stretch' | 'end';
  crossAlign?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  maxWidth?: number;
  minWidth?: number;
  children: ReactNode;
}

// ----------------------------------
// -------------- Form --------------
// ----------------------------------
export const Form = forwardRef(function Form(
  {
    direction = 'vertical',
    align = 'center',
    crossAlign,
    wrap = 'nowrap',
    gap,
    minWidth,
    maxWidth,
    children,
    ...props
  }: Props,
  ref?: ForwardedRef<HTMLFormElement>,
) {
  return (
    <form
      ref={ref}
      css={{
        position: 'relative',
        width: '100%',
        maxWidth: `${maxWidth}px`,
        minWidth: `${minWidth}px`,
        display: 'flex',
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
        alignItems: align,
        justifyContent: crossAlign,
        rowGap: direction === 'vertical' ? `${gap}px` : undefined,
        columnGap: direction === 'horizontal' ? `${gap}px` : undefined,
        transition: '0.3s ease-in-out',
      }}
      {...props}
    >
      {children}
    </form>
  );
});
