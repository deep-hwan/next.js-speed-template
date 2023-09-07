/** @jsxImportSource @emotion/react */
import { ForwardedRef, HTMLAttributes, forwardRef, memo } from 'react';

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
  forwardRef(function Layer({ isActive, ...props }: Props, ref: ForwardedRef<HTMLDivElement>) {
    return (
      <div
        css={{
          zIndex: 9000,
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: isActive ? 'flex' : 'none',
          backgroundColor: 'rgba(0,0,0,0.35)',

          '@supports(padding: max(0px))': {
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: 'env(safe-area-inset-bottom)',
          },
        }}
      >
        <div
          ref={ref}
          css={{
            width: '100%',
            height: '100%',
            display: 'flex',
            '@supports(padding: max(0px))': {
              paddingTop: 'env(safe-area-inset-top)',
              paddingBottom: 'env(safe-area-inset-bottom)',
              paddingRight: 'env(safe-area-inset-right)',
              paddingLeft: 'env(safe-area-inset-left)',
            },
          }}
          {...props}
        />
      </div>
    );
  }),
);
