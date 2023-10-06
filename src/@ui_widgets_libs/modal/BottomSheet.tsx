/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { Interpolation, Theme } from '@emotion/react';

import { Layer, Wrap } from '../_index';
import { MQ } from '@/libs/theme/mediaQuery';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface BottomSheetProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  view: boolean;
  onCancel: () => void;
  theme?: string;
}

// -----------------------------------------
// -------------- BottomSheet --------------
// -----------------------------------------
export function BottomSheet({
  children,
  view,
  onCancel,
  theme = 'light',
  ...props
}: BottomSheetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    setStartY(touch.clientY);
    setCurrentY(touch.clientY);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    setCurrentY(touch.clientY);
  };

  const handleTouchEnd = () => {
    const distance = currentY - startY;

    if (distance > 80) {
      onCancel();
    }

    setCurrentY(0);
    setStartY(0);
  };

  //
  // 외부클릭
  const clickModalOutside = useCallback(
    (event: MouseEvent) => {
      if (view && ref.current && !ref.current.contains(event.target as Node)) {
        onCancel();
      }
    },
    [view, onCancel],
  );

  useEffect(() => {
    viewRef.current?.scrollTo(0, 0);

    if (view) {
      const scrollY = window.scrollY;

      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.overflowY = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflowY = 'auto';

      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [view, viewRef]);

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  }, [clickModalOutside, view]);

  return (
    <>
      <Layer isActive={view} />
      <Wrap css={[ContainerTheme(view)]}>
        <Wrap css={[BoxTheme('wrap')]}>
          <div ref={ref} css={[BoxTheme('wrap-child', view, theme as 'light' | 'dark')]} {...props}>
            <div
              css={[TabTheme('box')]}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <button
                type="button"
                onClick={onCancel}
                css={[TabTheme('tab', theme as 'light' | 'dark')]}
              />
            </div>

            <div ref={viewRef} css={[ViewTheme()]}>
              {children}
            </div>
          </div>
        </Wrap>
      </Wrap>
    </>
  );
}

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
function ContainerTheme(isActive: boolean): Interpolation<Theme> {
  return {
    top: isActive ? '0' : '120%',
    zIndex: '9999',
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    height: '100%',
    transition: '0.25s ease-in-out',
  };
}

function BoxTheme(
  name: 'wrap' | 'wrap-child',
  isActive?: boolean,
  theme?: 'light' | 'dark',
): Interpolation<Theme> {
  if (name === 'wrap') {
    return {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 'calc(env(safe-area-inset-top) + 70px)',

      [MQ[1]]: {
        paddingTop: 'calc(env(safe-area-inset-top) + 10px)',
      },
    };
  }

  if (name === 'wrap-child') {
    return {
      backgroundColor: theme === 'dark' ? '#222222' : '#ffffff',
      opacity: isActive ? '1' : '0',
      width: '100%',
      maxWidth: '560px',
      height: '100%',

      display: 'flex',
      flexDirection: 'column',

      borderRadius: '22px 22px 0 0',
      boxShadow: '0 3px 30px rgba(0,0,0,0.1)',
      transition: '0.25s ease-in-out',

      paddingTop: 'env(safe-area-inset-top)',
      paddingBottom: 'env(safe-area-inset-bottom)',

      '&:webkit-scrollbar': {
        display: 'none',
      },

      [MQ[1]]: {
        maxWidth: '100%',
      },
    };
  }
}

function TabTheme(name: string, theme?: 'light' | 'dark'): Interpolation<Theme> {
  if (name === 'box') {
    return {
      width: '100%',
      padding: '11px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  }

  if (name === 'tab') {
    return {
      width: '50px',
      height: '6px',
      border: 'none',
      outline: 'none',
      borderRadius: '1000px',
      cursor: 'pointer',
      backgroundColor: theme === 'dark' ? '#444444' : '#e0e0e0',
    };
  }
}

function ViewTheme(): Interpolation<Theme> {
  return {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    '@supports (-webkit-touch-callout: none)': {
      height: '-webkit-fill-available',
    },
    '&::-webkit-scrollbar': {
      width: '4px',
      height: '6px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#e9e9e9',
      borderRadius: '100px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#e2e2e2',
    },
    '&::-webkit-scrollbar-button:start:decrement': {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar-button:end:increment': {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
    },
  };
}