/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { colors } from 'src/libs/themes';
import BlurLayer from './pice/BlurLayer';
import { useModalStatic } from './pice/useModalStatic';

interface DialogProps {
  open: boolean;
  title: string;
  description: string;
  tabName: string;
  onResult: () => void;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ open, title, description, tabName, onResult, onClose }) => {
  const tabs: {
    name: string;
    buttonColor?: string;
    txtColor?: string;
    onClick?: () => void;
    disabled?: boolean;
  }[] = [
    { name: '취소', txtColor: '#888', buttonColor: '#e2e2e2', onClick: onClose },
    {
      name: tabName,
      txtColor: '#fff',
      buttonColor: colors.keyColor,
      onClick: onResult,
    },
  ];

  const ref = useRef<HTMLDivElement>(null);

  const [delayedOpen, setDelayedOpen] = useState(false);

  const handleCancel = () => {
    setDelayedOpen(false);
    const timeout = setTimeout(() => onClose(), 100);
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

  useModalStatic({
    ref,
    open: delayedOpen,
    onCancel: handleCancel,
    clickOutSideClose: true,
    windowScreenScroll: false,
  });

  return (
    <>
      {open && (
        <>
          <BlurLayer zIndex={9998} />

          <div
            css={{
              ...(flexT as any),
              overscrollBehavior: 'contain',
              justifyContent: 'center',
              position: 'fixed',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              opacity: delayedOpen ? 1 : 0,
              zIndex: 10000,
              padding: '10px 20px 20px 20px',
            }}
          >
            <div
              ref={ref}
              css={{
                ...(flexT as []),
                height: 'auto',
                maxWidth: 340,
                minWidth: 320,
                padding: '30px 0 0',
                alignItems: 'start',
                borderRadius: 24,
                overscrollBehavior: 'contain',
                backgroundColor: '#fff',
              }}
            >
              <div css={{ ...(flexT as []), alignItems: 'start', rowGap: 10 }}>
                <div css={{ display: 'flex', flexDirection: 'column', padding: '0 25px', gap: 12 }}>
                  <b
                    css={{
                      fontSize: '1.25rem',
                      color: '#555',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {title}
                  </b>

                  <p
                    css={{
                      fontSize: '0.938rem',
                      color: '#888',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {description}
                  </p>
                </div>

                {tabs?.length !== 0 && !!tabs && (
                  <div
                    css={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'stretch',

                      paddingTop: 28,
                    }}
                  >
                    {tabs?.map((item: any, i: number) => (
                      <button
                        onClick={() => {
                          handleCancel();
                          item.onClick();
                        }}
                        disabled={item?.disabled}
                        css={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          minHeight: 52,
                          backgroundColor: item?.buttonColor ?? colors.keyColor,
                          color: item?.txtColor ?? '#fff',
                          cursor: 'pointer',
                          outline: 'none',
                          border: 'none',
                          fontSize: '1rem',
                          transition: '0.3s ease-in-out',
                          userSelect: 'none',
                          borderRadius: i === 0 ? '0 0 0 24px' : i === tabs.length - 1 ? '0 0 24px 0' : '0',
                          '&:hover': { opacity: 0.9 },
                          '&:active': { opacity: 8 },
                        }}
                      >
                        {item?.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dialog;

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
