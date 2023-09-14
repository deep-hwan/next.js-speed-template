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

// -------------------------------------
// -------------- Section --------------
// -------------------------------------
export const Section = forwardRef(function Section(
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
  ref: ForwardedRef<HTMLElement>,
) {
  return (
    <section
      ref={ref}
      css={{
        position: 'relative',
        maxWidth: `${maxWidth}px`,
        minWidth: `${minWidth}px`,
        width: '100%',
        height: '100%',
        display: 'flex',
        flex: '1',
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        alignItems: align,
        justifyContent: crossAlign,
        rowGap: direction === 'vertical' ? `${gap}px` : undefined,
        columnGap: direction === 'horizontal' ? `${gap}px` : undefined,
        transition: '0.3s ease-in-out',
      }}
      {...props}
    >
      {children}
    </section>
  );
});
