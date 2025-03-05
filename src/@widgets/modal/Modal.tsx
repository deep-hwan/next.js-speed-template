/** @jsxImportSource @emotion/react */

import { useSafeArea } from '@/libs/hooks';
import { Interpolation, Theme } from '@emotion/react';
import dynamic from 'next/dynamic';
import React, { ForwardedRef, HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import BlurLayer from './pice/BlurLayer';
import { ModalCancelTab } from './pice/ModalCancelTab';
import { useModalStatic } from './pice/useModalStatic';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  zIndex?: number;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  clickOutSideClose?: boolean;
  windowScreenScroll?: boolean;
  showCancelTab?: boolean;
  modalWidth?: number;
  modalContentMinHeight?: number;
  modalContentMaxHeight?: number;
  modalBackgroundColor?: string;
  headerExtanedComponent?: ReactNode;
  footerExtanedComponent?: ReactNode;
  isMobileBottomSheetMode?: boolean;
}

const screenSize = [1440, 1080, 780, 600, 438];
const MQ = screenSize.map(bp => `@media (max-width: ${bp}px)`);

const ModalComponent = React.forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    open,
    onClose,
    windowScreenScroll = false,
    clickOutSideClose = true,
    showCancelTab = true,
    zIndex = 9999,
    modalWidth = 600,
    modalContentMinHeight = 100,
    modalContentMaxHeight = 450,
    modalBackgroundColor = '#fff',
    headerExtanedComponent,
    footerExtanedComponent,
    isMobileBottomSheetMode = false,
    ...rest
  } = props;

  const modalRef = useRef<HTMLDivElement>(null);
  const { bottom, left, right } = useSafeArea({ bottom: 0, left: 0, right: 0 });

  const [delayedOpen, setDelayedOpen] = useState(false);

  const handleCancel = () => {
    setDelayedOpen(false);
    const timeout = setTimeout(() => onClose(), 100);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => setDelayedOpen(true), 100);
      return () => clearTimeout(timeout);
    } else {
      setDelayedOpen(false);
    }
  }, [open]);

  useModalStatic({
    ref: modalRef,
    open: delayedOpen,
    onCancel: handleCancel,
    clickOutSideClose,
    windowScreenScroll,
  });

  if (!open) return null;
  return (
    <>
      {open && delayedOpen && <BlurLayer zIndex={zIndex} />}

      <div
        css={{
          ...(flexT as any),
          overscrollBehavior: 'contain',
          justifyContent: 'center',
          position: 'fixed',
          top: delayedOpen ? 0 : '200%',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: zIndex ?? 9999,
          padding: '10px 20px 20px 20px',
          ...(isMobileBottomSheetMode && {
            [MQ[3]]: { padding: '30px 0 0' },
          }),
        }}
      >
        <div
          css={{
            ...(flexT as []),
            maxWidth: modalWidth,
            justifyContent: 'center',
            gap: 10,
          }}
        >
          <div
            className='modal-container'
            ref={modalRef}
            css={{
              position: 'relative',
              width: '100%',
              maxHeight: '100vh',
              borderRadius: 26,
              overflow: 'hidden',
              backgroundColor: modalBackgroundColor,
              paddingRight: right,
              paddingBottom: bottom,
              paddingLeft: left,
              display: 'flex',
              flexDirection: 'column',
              ...(isMobileBottomSheetMode && {
                [MQ[3]]: { height: '100%', maxHeight: '100%', borderRadius: '26px 26px 0 0' },
              }),
            }}
            {...rest}
          >
            {showCancelTab && (
              <div
                css={{
                  zIndex: 100,
                  position: 'absolute',
                  right: 15,
                  top: 15,
                }}
              >
                <ModalCancelTab onClick={handleCancel} />
              </div>
            )}

            {headerExtanedComponent}

            <SimpleBar
              className='modal-container-content'
              forceVisible='y'
              autoHide={true}
              css={{
                position: 'relative',
                width: '100%',
                height: '100%',
                minHeight: modalContentMinHeight,
                maxHeight: modalContentMaxHeight,
                display: 'flex',
                flexDirection: 'column',
                ...(isMobileBottomSheetMode && {
                  [MQ[3]]: { maxHeight: '100%' },
                }),
              }}
            >
              {props.children}
            </SimpleBar>

            {footerExtanedComponent}
          </div>
        </div>
      </div>
    </>
  );
});

const Modal = dynamic(() => Promise.resolve(ModalComponent), {
  ssr: false,
  loading: () => <></>,
});

export { Modal };

//
//
const flexT: Interpolation<Theme> = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  transition: '0.2s ease-in-out',
};
