/** @jsxImportSource @emotion/react */
import React, { ReactNode, useCallback, useEffect, useRef, HTMLAttributes } from 'react';
import { Column, IconTab, Layer, Padding, Wrap } from '../_index';
import { ViewportTheme } from '@/@_ui_libs/_theme';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  view: boolean;
  onCancel: () => void;
}

// ------------------------------------
// -------------- Dialog --------------
// ------------------------------------
export function Dialog({ children, view, onCancel, ...props }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const clickModalOutside = useCallback(
    (event: MouseEvent) => {
      if (view && ref.current && !ref.current.contains(event.target as Node)) {
        onCancel();
      }
    },
    [view, onCancel],
  );

  useEffect(() => {
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
  }, [view]);

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  }, [clickModalOutside, view]);

  return (
    <>
      <Layer isActive={view} />
      <Padding
        safeArea
        height="100%"
        horizontal={25}
        top={30}
        bottom={60}
        align="center"
        crossAlign="center"
        css={ViewportTheme({
          zIndex: 9999,
          position: { type: 'fixed', top: view ? 0 : ' 150%', bottom: 0, left: 0, right: 0 },
        })}
      >
        <Column
          maxWidth={380}
          minWidth={300}
          padding={{ horizontal: 18, top: 26, bottom: 16 }}
          borderRadius={18}
          backgroundColor="#ffffff"
          boxShadow={{ x: 0, y: 2, blur: 20, color: 'rgba(0,0,0,0.1' }}
          ref={ref}
          {...props}
        >
          {children}

          <Wrap width="auto" position={{ type: 'absolute', top: 4, right: 4 }}>
            <IconTab onClick={onCancel}>
              <CancelIcon />
            </IconTab>
          </Wrap>
        </Column>
      </Padding>
    </>
  );
}

// ----------------------------------
// -------------- Icon --------------
// ----------------------------------
function CancelIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26">
      <path
        id="xIcon"
        d="M26.334,7.95a13,13,0,1,0,0,18.384,13,13,0,0,0,0-18.384M19.761,21.286l-2.619-2.619-2.621,2.621A1.079,1.079,0,0,1,13,19.761l2.621-2.621L13,14.525A1.079,1.079,0,0,1,14.526,13l2.616,2.617L19.758,13a1.076,1.076,0,0,1,1.522,1.522l-2.616,2.616,2.621,2.619-.23.23.23-.23a1.079,1.079,0,0,1-1.526,1.526"
        transform="translate(-4.141 -4.142)"
        fill="#e0e0e0"
      />
    </svg>
  );
}
