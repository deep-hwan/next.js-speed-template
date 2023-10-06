/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'center' | 'stretch' | 'end';
  crossAlign?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  maxWidth?: number;
  minWidth?: number;
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
    gap,
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
      css={{
        transition: '0.3s ease-in-out',
        position: 'relative',
        maxWidth: `${maxWidth}px`,
        minWidth: `${minWidth}px`,
        width: '100%',
        height: '100%',
        display: 'flex',
        flex: '1 auto',
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        alignItems: align,
        justifyContent: crossAlign,
        rowGap: direction === 'vertical' ? `${gap}px` : undefined,
        columnGap: direction === 'horizontal' ? `${gap}px` : undefined,
        backgroundColor: backgroundColor,
        paddingTop:
          (padding?.all
            ? `max(${padding?.all}px, env(safe-area-inset-top))`
            : 'max(0px, env(safe-area-inset-top))') ||
          (padding?.vertical
            ? `max(${padding?.vertical}px, env(safe-area-inset-top))`
            : 'max(0px, env(safe-area-inset-top))') ||
          (padding?.top
            ? `max(${padding?.top}px, env(safe-area-inset-top))`
            : 'max(0px, env(safe-area-inset-top))'),
        paddingBottom:
          (padding?.all
            ? `max(${padding?.all}px, env(safe-area-inset-bottom))`
            : 'max(0px, env(safe-area-inset-bottom))') ||
          (padding?.vertical
            ? `max(${padding?.vertical}px, env(safe-area-inset-bottom))`
            : 'max(0px, env(safe-area-inset-bottom))') ||
          (padding?.bottom
            ? `max(${padding?.bottom}px, env(safe-area-inset-bottom))`
            : 'max(0px, env(safe-area-inset-bottom))'),
        paddingInlineStart:
          (padding?.all
            ? `max(${padding?.all}px, env(safe-area-inset-left))`
            : 'max(0px, env(safe-area-inset-left))') ||
          (padding?.horizontal
            ? `max(${padding?.horizontal}px, env(safe-area-inset-left))`
            : 'max(0px, env(safe-area-inset-left))') ||
          (padding?.left
            ? `max(${padding?.left}px, env(safe-area-inset-left))`
            : 'max(0px, env(safe-area-inset-left))'),
        paddingInlineEnd:
          (padding?.all
            ? `max(${padding?.all}px, env(safe-area-inset-right))`
            : 'max(0px, env(safe-area-inset-right))') ||
          (padding?.horizontal
            ? `max(${padding?.horizontal}px, env(safe-area-inset-right))`
            : 'max(0px, env(safe-area-inset-right))') ||
          (padding?.right
            ? `max(${padding?.right}px, env(safe-area-inset-right))`
            : 'max(0px, env(safe-area-inset-right))'),
      }}
      {...props}
    >
      {children}
    </section>
  );
});
