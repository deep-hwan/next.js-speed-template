/** @jsxImportSource @emotion/react */
import Calendar from '@/@widgets/calendar/Calendar';
import { MQ } from '@/libs/themes';
import { Interpolation, Theme } from '@emotion/react';
import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import { useModalStatic } from '../modal/pice/useModalStatic';

//
type Props = {
  zIndex?: number;
  format?: 'yyyy-mm-dd' | 'yyyy-mm' | 'yyyy';
  open: boolean;
  onClose: () => void;
  clickOutSideClose?: boolean;
  windowScreenScroll?: boolean;
  date: Date;
  minDate?: Date;
  maxDate?: Date;
  onClick: (date: Date | null | any) => void;
  colors?: { backgroundColor?: string; cancelTabColor?: string };
} & Omit<HTMLAttributes<HTMLElement>, 'color'>;

//
const CalendarModal = ({
  open,
  onClose,
  format = 'yyyy-mm-dd',
  date,
  onClick,
  windowScreenScroll = false,
  clickOutSideClose = true,
  zIndex,
  ...props
}: Props) => {
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
    clickOutSideClose,
    windowScreenScroll,
  });

  if (!open) return null;
  return (
    <>
      {open && (
        <div
          css={{
            zIndex: zIndex ? zIndex - 1 : 9900,
            display: 'flex',
            flex: 1,
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            backgroundColor: 'rgba(0,0,0,0.35)',
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            overscrollBehavior: 'contain',
            paddingTop: `max(0px, env(safe-area-inset-top))`,
            paddingBottom: `max(0px, env(safe-area-inset-bottom))`,
            paddingLeft: `max(0px, env(safe-area-inset-left))`,
            paddingRight: `max(0px, env(safe-area-inset-right))`,
          }}
        />
      )}

      <Fixed open={delayedOpen} zIndex={zIndex}>
        <div
          css={{
            ...(flexT as []),
            justifyContent: 'center',
            overscrollBehavior: 'contain',
            rowGap: 12,
            [MQ[3]]: {
              flexDirection: 'column-reverse',
              justifyContent: 'end',
              paddingTop: 50,
            },
          }}
        >
          <div
            ref={ref}
            css={{
              ...(flexT as []),
              height: 'auto',
              minWidth: 300,
              maxWidth: 400,
              borderRadius: 24,
              padding: '20px 15px',
              backgroundColor: props?.colors?.backgroundColor ?? '#fff',
              [MQ[3]]: {
                height: '100%',
                maxHeight: 400,
                maxWidth: '100%',
                borderRadius: '24px 24px 0 0',
              },
            }}
          >
            <Calendar
              format={format ?? 'yyyy-mm-dd'}
              date={date}
              onClick={date => {
                onClick(date);
                handleCancel();
              }}
              maxDate={props.maxDate}
              minDate={props.minDate}
              {...props}
            />
          </div>

          <button
            type='button'
            onClick={handleCancel}
            css={{
              minWidth: '44px',
              minHeight: '44px',
              maxWidth: '44px',
              maxHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: props?.colors?.backgroundColor ?? '#fff',
              padding: '6px',
              borderRadius: '1000px',
              cursor: 'pointer',
              outline: 'none',
              border: 'none',
              transition: '0.3s ease-in-out',

              '&:hover': { opacity: 0.8 },

              '&:active': { scale: 0.8 },

              [MQ[3]]: { order: '2' },
            }}
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='16.333' height='16.293' viewBox='0 0 16.333 16.293'>
              <path
                id='cancel-icon'
                d='M15.711,14.2h0L9.482,7.984l.078-.078,6.1-6.1a1.085,1.085,0,0,0,0-1.51,1.094,1.094,0,0,0-1.513.007L7.979,6.483,1.814.305A1.091,1.091,0,0,0,.3.316a1.073,1.073,0,0,0,.017,1.5L6.486,7.982.309,14.166a1.072,1.072,0,0,0,0,1.505,1.1,1.1,0,0,0,1.511-.013L7.988,9.5l6.173,6.163a1.065,1.065,0,0,0,.753.336.91.91,0,0,0,.756-.29,1.072,1.072,0,0,0,.042-1.507'
                transform='translate(0.164 0.164)'
                fill={props.colors?.cancelTabColor ?? '#c2c2c2'}
                stroke={props.colors?.cancelTabColor ?? '#c2c2c2'}
                stroke-width='0.2'
              />
            </svg>
          </button>
        </div>
      </Fixed>
    </>
  );
};

export default CalendarModal;

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
      position: 'fixed',
      top: open ? 0 : '200%',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: zIndex ?? 9999,
    }}
  >
    {children}
  </div>
);
