/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, ReactNode, forwardRef, useCallback, useEffect, useRef } from 'react';
import { IconTab, Layer, Padding } from '../_index';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props {
  view: boolean;
  onCancel: () => void;
  children: ReactNode;
}

// ---------------------------------------
// -------------- AppDrawer --------------
// ---------------------------------------
export const AppDrawer = forwardRef(function AppDrawer(
  { view, onCancel, children, ...props }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  const drawerRef = useRef<HTMLDivElement>(null);

  const clickModalOutside = useCallback(
    (event: MouseEvent) => {
      if (view && drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onCancel();
      }
    },
    [view, onCancel, drawerRef],
  );

  useEffect(() => {
    drawerRef.current?.scrollTo(0, 0);

    if (view) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  });

  return (
    <>
      <Layer isActive={view} />

      <Padding
        safeArea
        maxWidth={390}
        top={0}
        bottom={0}
        backgroundColor="#fff"
        scroll={{ type: 'auto', bar: false }}
        ref={drawerRef}
        css={{
          zIndex: '9999',
          position: 'fixed',
          top: '0',
          bottom: '0',
          right: view ? '0' : '-100%',
        }}
      >
        <Padding
          safeArea
          direction="horizontal"
          crossAlign="end"
          top={8}
          left={0}
          right={10}
          ref={ref}
          css={{ zIndex: '11', position: 'sticky', top: '0', left: '0' }}
          {...props}
        >
          <IconTab onClick={onCancel}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26">
              <path
                id="xIcon"
                d="M26.334,7.95a13,13,0,1,0,0,18.384,13,13,0,0,0,0-18.384M19.761,21.286l-2.619-2.619-2.621,2.621A1.079,1.079,0,0,1,13,19.761l2.621-2.621L13,14.525A1.079,1.079,0,0,1,14.526,13l2.616,2.617L19.758,13a1.076,1.076,0,0,1,1.522,1.522l-2.616,2.616,2.621,2.619-.23.23.23-.23a1.079,1.079,0,0,1-1.526,1.526"
                transform="translate(-4.141 -4.142)"
                fill="#e0e0e0"
              />
            </svg>
          </IconTab>
        </Padding>

        <Padding
          safeArea
          height="100%"
          all={0}
          scroll={{ type: 'auto', bar: false }}
          css={{ zIndex: '10' }}
        >
          {children}
        </Padding>
      </Padding>
    </>
  );
});
