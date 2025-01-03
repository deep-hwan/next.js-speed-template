/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import React, { ForwardedRef, HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';

//
import { BlurLayer } from '@/_ui';
import dynamic from 'next/dynamic';
import useModalView from './handler/useModalView';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  zIndex?: number;
  children: ReactNode;
  open: boolean;
  onCancel: () => void;
  clickOutSideClose?: boolean;
  windowScreenScroll?: boolean;
  title?: string;
  subTitle?: string;
  showCancelTab?: boolean;
  modalSize?: number;
  modalContentMinHeight?: number;
  modalContentMaxHeight?: number;
  colors?: { background?: string; title?: string; subTitle?: string; cancelTab?: string };
}

const screenSize = [1440, 1080, 780, 600, 438];
const MQ = screenSize.map(bp => `@media (max-width: ${bp}px)`);

const ModalComponent = React.forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    colors,
    open,
    onCancel,
    windowScreenScroll = false,
    clickOutSideClose = true,
    title,
    subTitle,
    showCancelTab = true,
    zIndex,
    modalSize = 600,
    modalContentMinHeight = 100,
    modalContentMaxHeight = 450,
    ...rest
  } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  const [delayedOpen, setDelayedOpen] = useState(false);

  const handleCancel = () => {
    setDelayedOpen(false);
    const timeout = setTimeout(() => onCancel(), 100);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => setDelayedOpen(true), 50);
      return () => clearTimeout(timeout);
    } else {
      setDelayedOpen(false);
    }
  }, [open]);

  useModalView({
    ref: modalRef,
    open: delayedOpen,
    onCancel: handleCancel,
    clickOutSideClose,
    windowScreenScroll,
  });

  if (!open) return null;
  return (
    <>
      {open && delayedOpen && <BlurLayer zIndex={zIndex ? zIndex - 1 : 9998} />}

      <Fixed open={delayedOpen} zIndex={zIndex}>
        <div
          ref={modalRef}
          css={{
            ...(flexT as []),
            maxWidth: modalSize,
            justifyContent: 'center',
            gap: 10,
          }}
        >
          {showCancelTab && (
            <button
              onClick={handleCancel}
              css={{
                display: 'flex',
                order: 2,
                backgroundColor: colors?.background ?? '#fff',
                padding: 13,
                borderRadius: 100,
                cursor: 'pointer',
                outline: 'none',
                border: 'none',
                fontSize: '1rem',
                transition: '0.3s ease-in-out',
                [MQ[3]]: { order: 0 },
              }}
            >
              <CancelIcon fill={colors?.cancelTab ?? '#ccc'} />
            </button>
          )}

          <div
            className='modal-container'
            ref={ref}
            css={{
              position: 'relative',
              width: '100%',
              maxHeight: '100vh',
              borderRadius: 26,
              overflow: 'hidden',
              backgroundColor: colors?.background ?? '#fff',
              display: 'flex',
              flexDirection: 'column',
              [MQ[3]]: {
                height: '100%',
                maxHeight: '100%',
                borderRadius: '26px 26px 0 0',
              },
            }}
            {...rest}
          >
            {!!title && (
              <div
                className='modal-container-titleBox'
                css={{
                  minHeight: (title && subTitle && 90) || (title && 70) || 45,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 20px',
                  borderRadius: '26px 26px 0 0',
                  backgroundColor: title ? (colors?.background ?? '#fff') : 'transparent',
                }}
              >
                {(title || subTitle) && (
                  <div
                    css={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'start',
                      gap: 6,
                    }}
                  >
                    <b
                      css={{
                        fontSize: '1.25rem',
                        color: colors?.title ?? '#555',
                        [MQ[3]]: { fontSize: '1.125rem' },
                      }}
                    >
                      {title}
                    </b>
                    {!!subTitle && (
                      <p
                        css={{
                          fontSize: '0.938rem',
                          color: colors?.subTitle ?? '#797979',
                          [MQ[3]]: { fontSize: '0.813rem' },
                        }}
                      >
                        {subTitle}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            <div
              className='modal-container-content'
              css={{
                position: 'relative',
                width: '100%',
                height: '100%',
                minHeight: modalContentMinHeight,
                maxHeight: modalContentMaxHeight,
                display: 'flex',
                flexDirection: 'column',
                overscrollBehavior: 'contain',
                overflowY: 'auto',

                [MQ[3]]: { maxHeight: '100%' },
              }}
            >
              {props.children}
            </div>
          </div>
        </div>
      </Fixed>
    </>
  );
});

// ----------------------------------
// -------------- Icon --------------
function CancelIcon({ fill = '#ccc' }: { fill?: string }) {
  return (
    <svg width='18' height='18' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_852_3)'>
        <path
          d='M19.0816 17.1019L12.5963 10.6166L19.1079 4.10502C19.3615 3.83954 19.5029 3.48643 19.5027 3.11912C19.5082 2.92501 19.4729 2.73187 19.3993 2.55212C19.3256 2.37237 19.2151 2.20998 19.075 2.07541C18.8077 1.81303 18.4483 1.66567 18.0739 1.66488C17.6995 1.6641 17.3399 1.80995 17.072 2.07121L10.5678 8.57537L4.06343 2.071C3.79597 1.8075 3.43629 1.65875 3.06103 1.65644C2.68577 1.65413 2.32458 1.79843 2.05442 2.05862C1.78425 2.3188 1.62647 2.67429 1.61468 3.04936C1.60288 3.42443 1.73801 3.78943 1.99128 4.0666L8.53393 10.6093L2.02446 17.1187C1.78144 17.3932 1.6528 17.7503 1.66496 18.1169C1.67712 18.4835 1.82915 18.8316 2.08983 19.0898C2.35052 19.3481 2.70007 19.4968 3.06673 19.5055C3.43339 19.5142 3.78933 19.3822 4.06145 19.1366L10.555 12.6431L17.0583 19.1464C17.3341 19.3897 17.6924 19.5184 18.0598 19.5058C18.4271 19.4933 18.7756 19.3406 19.0336 19.079C19.2917 18.8175 19.4396 18.4669 19.4472 18.0994C19.4547 17.7319 19.3212 17.3753 19.0741 17.1029'
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id='clip0_852_3'>
          <rect width='22' height='22' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

const Modal = dynamic(() => Promise.resolve(ModalComponent), {
  ssr: false,
  loading: () => <p>...loading</p>,
});

export default Modal;

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

//
const Fixed = ({ children, open, zIndex }: { children: ReactNode; open: boolean; zIndex?: number }) => (
  <div
    css={{
      ...flexT,
      overscrollBehavior: 'contain',
      justifyContent: 'center',
      position: 'fixed',
      top: open ? 0 : '200%',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: zIndex ?? 9999,
      padding: '20px 25px 50px',
      [MQ[3]]: { padding: '20px 0 0' },
    }}
  >
    {children}
  </div>
);
