import React, { ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { colors, borderRadius, fontSize } from '../../theme/_index';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  weight?: 'lighter' | 'normal' | 'medium' | 'bold';
  size?: number;
  color?: string;
}

// ---------------------------------
// -------------- Tab --------------
// ---------------------------------
export const Tab = forwardRef(function Tab(
  { children, size, ...props }: TabProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      type="button"
      ref={ref}
      css={
        {
          ...styles.tab,
          fontSize: size ? `${size / 16}rem` : '0.875rem',
        } as Interpolation<Theme>
      }
      {...props}
    >
      {children}
    </button>
  );
});

// ------------------------------------
// -------------- TxtTab --------------
// ------------------------------------
export const TxtTab = forwardRef(function TxtTab(
  { children, size, weight, color, ...props }: TabProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      type="button"
      ref={ref}
      css={
        {
          ...styles.txtTab,
          ...TYPOGRAPH_WEIGHT[weight ? weight : 'normal'],
          fontSize: size ? `${size / 16}rem` : '0.875rem',
          color: color ? color : colors.keyColor,
        } as Interpolation<Theme>
      }
      {...props}
    >
      {children}
    </button>
  );
});

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const styles = {
  tab: {
    position: 'relative',
    padding: '12px 20px',
    borderRadius: borderRadius.s500,
    color: colors.grey700,
    backgroundColor: colors.ground200,
    whiteSpace: 'nowrap',
    transition: '0.3s ease-in-out',
    outline: 'none',
    border: 'none',

    '&:hover': {
      opacity: 0.9,
    },

    '&:disabled': {
      opacity: 0.4,
    },
  },

  txtTab: {
    position: 'relative',
    whiteSpace: 'nowrap',
    transition: '0.3s ease-in-out',
    outline: 'none',
    border: 'none',

    '&:hover': {
      fontWeight: '500',
    },
    '&:disabled': {
      opacity: 0.4,
    },
  },
};

const TYPOGRAPH_WEIGHT = {
  lighter: { fontWeight: '300' },
  normal: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  bold: { fontWeight: '600' },
};
