import React, { ForwardedRef, HTMLAttributes, forwardRef, memo } from 'react';
import { ViewportTheme } from '@/@_ui_libs/_theme';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: '100%' | 'auto';
  maxWidth?: number | string;
  minWidth?: number | string;
  height?: '100%' | 'auto';
  maxHeight?: number | string;
  minHeight?: number | string;
  borderRadius?: number | string;
}

// --------------------------------------
// -------------- Skeleton --------------
// --------------------------------------
export const Skeleton = memo(
  forwardRef(function Skeleton(
    {
      width = '100%',
      maxWidth,
      minWidth,
      height,
      minHeight,
      maxHeight,
      borderRadius = 1000,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ) {
    const loadAnimation = `
      @keyframes load {
        100% {
          background-position: -100% 0;
        }
      }
    `;

    return (
      <>
        <style>{loadAnimation}</style>
        <div
          ref={ref}
          css={[
            ViewportTheme({ width, maxWidth, minWidth, height, minHeight, maxHeight }),
            {
              borderRadius: borderRadius,
              background:
                'linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%)',
              backgroundSize: '200% 100%',
              backgroundPosition: '100% 0',
              animation: 'load 1s infinite', // Added animation property
            },
          ]}
          {...props}
        />
      </>
    );
  }),
);
