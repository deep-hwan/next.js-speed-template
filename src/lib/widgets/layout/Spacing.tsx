/** @jsxImportSource @emotion/react */
import { ForwardedRef, HTMLAttributes, forwardRef, memo } from 'react';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: never[];
  direction?: 'horizontal' | 'vertical';
  size?: number;
}

// -------------------------------------
// -------------- Spacing --------------
// -------------------------------------
export const Spacing = memo(
  forwardRef(function Spacing(
    { direction = 'vertical', size, ...props }: Props,
    ref?: ForwardedRef<HTMLDivElement>,
  ) {
    return (
      <div
        ref={ref}
        css={{
          flex: 'none',
          width: direction === 'horizontal' ? `${size}px` : '100%',
          height: direction === 'vertical' ? `${size}px` : '100%',
          transition: '0.3s ease-in-out',
        }}
        {...props}
      />
    );
  }),
);
