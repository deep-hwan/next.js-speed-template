/** @jsxImportSource @emotion/react */
import React, { Children, ForwardedRef, HTMLAttributes, ReactElement, forwardRef } from 'react';
import { Interpolation, Theme, css } from '@emotion/react';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface IconProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement;
  onClick: () => void;
  size?: number;
  iconSize?: number;
}

// -------------------------------------
// -------------- IconTab --------------
// -------------------------------------
export const IconTab = forwardRef(function IconTab(
  { children, size, iconSize = 24, onClick, ...props }: IconProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const child = Children.only(children);

  const svgChild = React.cloneElement(child, {
    css: {
      width: `100%`,
      height: `100%`,
    },
  });

  return (
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      css={
        {
          width: `${size}px`,
          height: `${size}px`,
          ...styles.button,
        } as Interpolation<Theme>
      }
    >
      <div
        onClick={onClick}
        css={css`
          width: ${`${iconSize}px`};
          height: ${`${iconSize}px`};
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.3s ease-in-out;
          white-space: nowrap;
          cursor: pointer;

          svg {
            width: '100%';
            height: '100%';
          }

          img {
            width: '100%';
            height: '100%';
          }
        `}
        {...props}
      >
        {svgChild}
      </div>
    </button>
  );
});

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const styles = {
  button: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6px',
    borderRadius: '8px',
    whiteSpace: 'nowrap',
    transition: '0.3s ease-in-out',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',

    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.03)',
    },
  },

  iconBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.3s ease-in-out',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
  },
};
