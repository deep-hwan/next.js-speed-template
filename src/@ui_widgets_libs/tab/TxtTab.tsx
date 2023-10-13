/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef } from 'react';
import { MarignTheme, PaddingTheme, TabTheme, TypographyTheme } from '@/libs/themes/_theme';
import { colors } from '@/libs/themes/_index';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: 'button' | 'submit';
  weight?: 'lighter' | 'normal' | 'medium' | 'bold';
  size?: number | string;
  color?: string;
  padding?: {
    all?: number;
    horizontal?: number;
    vertical?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  margin?: {
    all?: number;
    horizontal?: number;
    vertical?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}

// ------------------------------------
// -------------- TxtTab --------------
// ------------------------------------
export const TxtTab = forwardRef(function TxtTab(
  { children, type = 'button', size, weight, color, padding, margin, ...props }: TabProps,
  ref?: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      type={type}
      ref={ref}
      css={[
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        TypographyTheme({
          size: size ? size : 14,
          color: color ? color : colors.keyColor,
          weight,
          whiteSpace: 'nowrap',
        }),
        TabTheme({ opacityDisabled: 0.4 }),
        { '&:hover': { fontWeight: '500' } },
      ]}
      {...props}
    >
      {children}
    </button>
  );
});
