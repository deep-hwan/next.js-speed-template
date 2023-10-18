/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';
import {
  FlexTheme,
  PaddingTheme,
  ScrollTheme,
  StyleTheme,
  TabTheme,
  TypographyTheme,
  ViewportTheme,
} from '../_theme';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface AcodiProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
  children: ReactNode;
  gap?: number;
}

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  view: boolean;
  children: ReactNode;
}

// ---------------------------------------
// -------------- Accordion --------------
// ---------------------------------------
export const Accordion = forwardRef(function Accordion(
  { direction = 'horizontal', gap, children, ...props }: AcodiProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      css={[
        { ':hover': { backgroundColor: '#f8f9fc' }, '& p:hover': { fontWeight: '500' } },
        ViewportTheme({ width: '100%' }),
        TabTheme({ cursor: 'pointer', borderRadius: 14 }),
        PaddingTheme({ padding: { all: 14 } }),
        FlexTheme({
          direction: direction === 'vertical' ? 'vertical' : 'horizontal',
          gap: 6,
          crossGap: 6,
        }),
      ]}
      {...props}
    >
      {children}
    </div>
  );
});

// -----------------------------------
// -------------- Panel --------------
// -----------------------------------
export function AccordionPanel({ view, children, ...props }: PanelProps) {
  return (
    <div
      css={[
        ViewportTheme({ width: '100%', maxHeight: view ? '9999px' : '0px' }),
        TypographyTheme({ whiteSpace: 'pre-line', size: 15 }),
        ScrollTheme({ scroll: { type: 'hidden' } }),
        StyleTheme({ backgroundColor: 'f8f9fc', borderRadius: 14 }),
        PaddingTheme({
          padding: { all: view ? 20 : undefined, horizontal: view ? undefined : 20 },
        }),
      ]}
      {...props}
    >
      {children}
    </div>
  );
}
