/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

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
      css={{
        width: '100%',
        padding: '14px',
        cursor: 'pointer',
        borderRadius: '14px',
        transition: '0.3s ease-in-out',
        display: 'flex',
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        rowGap: direction == 'vertical' ? `${gap}px` : `6px`,
        columnGap: direction == 'horizontal' ? `${gap}px` : `6px`,

        ':hover': {
          backgroundColor: '#f8f9fc',
        },

        '& p:hover': {
          fontWeight: '500',
        },
      }}
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
      css={{
        width: '100%',
        height: view ? 'auto' : '0px',
        maxHeight: view ? '9999px' : '0px',
        padding: view ? '20px' : '0 20px',
        backgroundColor: '#f8f9fc',
        borderRadius: '14px',
        transition: '0.2s ease-in-out',
        fontSize: '0.938rem',
        overflow: 'hidden',
        whiteSpace: 'pre-line',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
