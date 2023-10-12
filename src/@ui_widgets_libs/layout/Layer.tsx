/** @jsxImportSource @emotion/react */
import { ForwardedRef, HTMLAttributes, forwardRef, memo } from 'react';
import { Padding } from './Padding';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

// -----------------------------------
// -------------- Layer --------------
// -----------------------------------
export const Layer = memo(
  forwardRef(function Layer({ isActive, ...props }: Props, ref?: ForwardedRef<HTMLDivElement>) {
    return (
      <Padding
        safeArea
        top={0}
        bottom={0}
        css={{
          zIndex: 9000,
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: isActive ? 'flex' : 'none',
        }}
      >
        <Padding all={0} height="100%" backgroundColor="rgba(0,0,0,0.35)" ref={ref} {...props} />
      </Padding>
    );
  }),
);
