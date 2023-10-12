import React, { HTMLAttributes, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled, { Interpolation } from '@emotion/styled';
import { Theme } from '@emotion/react';

import { Layer, Wrap } from '../_index';
import { colors } from '@/libs/theme/colors';
import { MQ } from '@/libs/theme/mediaQuery';

interface Props extends HTMLAttributes<HTMLDivElement> {
  view: boolean;
  onCancel: () => void;
  dateFormat?: 'yyyy-mm-dd' | 'yyyy-mm';
  value: Date | string;
  onChange: any;
}

export function CalenderModal({
  view,
  onCancel,
  dateFormat = 'yyyy-mm-dd',
  value,
  onChange,
}: Props) {
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
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  }, [view, clickModalOutside]);

  //
  const [date, setDate] = useState(new Date());

  const handleDateChange = (value: any) => {
    setDate(value as Date);
  };

  return (
    <>
      <Layer isActive={view} />
      <Wrap css={Themes('container', view)}>
        <Wrap
          align="center"
          crossAlign="center"
          gap={12}
          css={{
            [MQ[3]]: {
              height: dateFormat === 'yyyy-mm' ? '50%' : '63%',
            },
          }}
        >
          <div ref={ref} css={[Themes('box')]}>
            <StyledWrap>
              <Calendar
                locale="ko-KR" // Set to Korean
                calendarType="US"
                formatDay={(locale, date) => `${date.getDate()}`.padStart(2, '0')}
                value={value}
                onChange={onChange}
                view={
                  dateFormat === 'yyyy-mm-dd'
                    ? undefined
                    : undefined || dateFormat === 'yyyy-mm'
                    ? 'year'
                    : undefined
                }
                maxDetail={
                  dateFormat === 'yyyy-mm-dd'
                    ? undefined
                    : undefined || dateFormat === 'yyyy-mm'
                    ? 'year'
                    : undefined
                }
              />
            </StyledWrap>
          </div>

          <IconTheme onClick={onCancel}>
            <CancelIcon />
          </IconTheme>
        </Wrap>
      </Wrap>
    </>
  );
}
// ---------------------------------------------
// -------------- Calender Styles --------------
// ---------------------------------------------
const StyledWrap = styled.div`
  width: 100%;

  .react-calendar {
    width: 100%;
    min-width: 100%;
    border: none;
    background-color: transparent;
    padding-bottom: 10px;
  }

  // 달력 > 네비게이션 바
  .react-calendar__navigation {
    margin-bottom: 0;
    padding: 10px 10px;
    height: auto;
  }

  // 달력 > 네비게이션 버튼 : 화살표
  .react-calendar__navigation button {
    min-width: 40px;
    min-height: 40px;
    background: none;
    font-size: 0;
    color: #797979;
  }

  // 달력 > 네비게이션 버튼 : 타이틀
  .react-calendar__navigation__label__labelText {
    font-weight: 500;
    color: #666666;
    font-size: 15px;
  }

  // 달력 > 네비게이션 버튼 : 각 화살표 디테일
  .react-calendar__navigation__prev2-button::before {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10.999" height="12" viewBox="0 0 10.999 12"><g id="prev2" transform="translate(-475 14431)"><path id="패스_87848" data-name="패스 87848" d="M5.817,1.158,1.62,5.927l4.09,4.927a.685.685,0,0,1-.023.941.682.682,0,0,1-.222.15A.7.7,0,0,1,5.2,12a.71.71,0,0,1-.268-.058.7.7,0,0,1-.224-.155L.185,6.377a.68.68,0,0,1,.008-.939L4.836.209A.662.662,0,0,1,5.057.054a.674.674,0,0,1,.531,0,.662.662,0,0,1,.221.155.695.695,0,0,1,.006.949" transform="translate(475 -14431)" fill="current"/><path id="패스_87849" data-name="패스 87849" d="M10.817,1.158,6.62,5.927l4.089,4.927a.685.685,0,0,1-.023.941.681.681,0,0,1-.222.15A.694.694,0,0,1,10.2,12a.709.709,0,0,1-.268-.058.7.7,0,0,1-.224-.155L5.185,6.377a.68.68,0,0,1,.008-.939L9.836.209a.662.662,0,0,1,.221-.155.674.674,0,0,1,.531,0,.663.663,0,0,1,.221.155.7.7,0,0,1,.006.949" transform="translate(475 -14431)" fill="current"/></g></svg>');
  }
  .react-calendar__navigation__prev-button::before {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="5.999" height="12" viewBox="0 0 5.999 12"><path id="prev" d="M5.817,1.158,1.62,5.927l4.09,4.927a.685.685,0,0,1-.023.941.682.682,0,0,1-.222.15A.7.7,0,0,1,5.2,12a.71.71,0,0,1-.268-.058.7.7,0,0,1-.224-.155L.185,6.377a.68.68,0,0,1,.008-.939L4.836.209A.662.662,0,0,1,5.057.054a.674.674,0,0,1,.531,0,.662.662,0,0,1,.221.155.695.695,0,0,1,.006.949" transform="translate(0)" fill="current"/></svg>');
  }

  .react-calendar__navigation__next-button::before {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="5.999" height="12" viewBox="0 0 5.999 12"><path id="next" d="M.183,10.842l4.2-4.769L.291,1.145A.672.672,0,0,1,.114.687.676.676,0,0,1,.313.2.683.683,0,0,1,.535.054.693.693,0,0,1,.8,0a.71.71,0,0,1,.268.058.7.7,0,0,1,.224.155l4.524,5.41a.68.68,0,0,1-.008.939L1.164,11.791a.661.661,0,0,1-.221.155.674.674,0,0,1-.531,0,.661.661,0,0,1-.221-.155.7.7,0,0,1-.006-.949" transform="translate(0)" fill="current"/></svg>');
  }
  .react-calendar__navigation__next2-button::before {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10.999" height="12" viewBox="0 0 10.999 12"><g id="next2" transform="translate(-438 14431)"><path id="패스_87845" data-name="패스 87845" d="M5.183,10.842l4.2-4.769L5.291,1.145A.672.672,0,0,1,5.114.687.689.689,0,0,1,5.535.054.693.693,0,0,1,5.8,0a.71.71,0,0,1,.268.058.7.7,0,0,1,.224.155l4.524,5.41a.68.68,0,0,1-.008.939L6.164,11.791a.661.661,0,0,1-.221.155.674.674,0,0,1-.531,0,.661.661,0,0,1-.221-.155.7.7,0,0,1-.006-.949" transform="translate(438 -14431)" fill="current"/><path id="패스_87846" data-name="패스 87846" d="M.183,10.842l4.2-4.769L.291,1.145A.672.672,0,0,1,.114.687.676.676,0,0,1,.313.2.683.683,0,0,1,.535.054.693.693,0,0,1,.8,0a.71.71,0,0,1,.268.058.7.7,0,0,1,.224.155l4.524,5.41a.68.68,0,0,1-.008.939L1.164,11.791a.661.661,0,0,1-.221.155.674.674,0,0,1-.531,0,.661.661,0,0,1-.221-.155.7.7,0,0,1-.006-.949" transform="translate(438 -14431)" fill="current"/></g></svg>');
  }

  // 달력 > 네비게이션 버튼 : hover
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
    border-radius: 10px;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  abbr[title] {
    text-decoration: none;
  }

  // 달력 > 날짜 > 전체 박스
  .react-calendar__viewContainer {
    padding: 0 6px;
  }

  // 날짜 > 요일
  .react-calendar__month-view__weekdays__weekday {
    padding: 10px 5px;
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    font-size: 12px;
    font-weight: 400;
    color: #999;
  }

  // 달력 세부 > 날짜
  .react-calendar__tile {
    font-size: 15px !important;
    padding: 16px 5px;
    color: #555;
  }

  // mm 박스 > 달력 > mm날짜
  .react-calendar__year-view__months {
    padding: 0 10px;
  }

  // yy > 날짜 > 일말
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #aaaaaa !important;
  }

  // yy > 날짜 > 토/일
  .react-calendar__month-view__days__day--weekend {
    color: #6789a9;
  }

  // yy >  날짜 : hover
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f8f8f8;
    color: ${colors.keyColor};
    border-radius: 12px;
    transition: 0.2s ease-in-out;
  }

  // yy > 오늘 날짜 픽스
  .react-calendar__tile--now {
    background: #f8f8f8;
    border-radius: 12px !important;
    font-weight: 500;
    color: ${colors.keyColor};
    transition: 0.2s ease-in-out;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #f8f8f8 !important;
    border-radius: 12px;
    font-weight: 500;
    color: ${colors.keyColor};
  }

  // yy > 각 날짜
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #f8f8fa;
  }

  // yy > 각 날짜 : 선택했을 때
  .react-calendar__tile--active {
    background: ${colors.white};
    /* color: white; */
    border-radius: 12px;
    font-weight: 500;
    transition: 0.2s ease-in-out;
  }
  .react-calendar__tile--active abbr {
    padding: 8px 10px;
    background: ${colors.keyColor};
    color: white;
    border-radius: 12px;
    font-weight: 500;
    transition: 0.2s ease-in-out;
  }

  /* .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${colors.keyColor};
    color: white;
  } */

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #f8f8fa;
  }

  // yy > 선택 했을때
  /* .react-calendar__tile--range {
    background: ${colors.keyColor};
    color: white;
    border-radius: 12px;
  } */

  // 달력 날짜 > 시작 & 끝 처리
  /* .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    background: ${colors.keyColor};
    color: white;
  }
  .react-calendar__tile--rangeEnd {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    background: ${colors.keyColor};
    color: white;
  } */
`;

//

// ------------------------------------------
// -------------- Theme Styles --------------
// -------------------------------------------
function Themes(theme: string, isActive?: boolean): Interpolation<Theme> {
  if (theme === 'container') {
    return {
      top: isActive ? '0' : '120%',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: '9999',
      left: '0',
      right: '0',
      bottom: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: '0.25s ease-in-out',

      '@supports(padding: max(0px))': {
        paddingTop: 'max(30px, env(safe-area-inset-top))',
        paddingBottom: 'max(60px, env(safe-area-inset-bottom))',
        paddingInlineStart: 'max(30px, env(safe-area-inset-left))',
        paddingInlineEnd: 'max(30px, env(safe-area-inset-right))',
      },

      [MQ[3]]: {
        justifyContent: 'flex-end',
        '@supports(padding: max(0px))': {
          paddingTop: 'max(30px, env(safe-area-inset-top))',
          paddingBottom: 'max(0px, env(safe-area-inset-bottom))',
          paddingInlineStart: 'max(0px, env(safe-area-inset-left))',
          paddingInlineEnd: 'max(0px, env(safe-area-inset-right))',
        },
      },
    };
  }

  if (theme === 'box') {
    return {
      width: '100%',
      minWidth: '300px',
      maxWidth: '380px',
      borderRadius: '18px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
      position: 'relative',
      transition: '0.5s ease-in-out',

      '@supports(padding: max(0px))': {
        paddingTop: 'max(10px, env(safe-area-inset-top))',
        paddingBottom: 'max(10px, env(safe-area-inset-bottom))',
        paddingInlineStart: 'max(0px, env(safe-area-inset-left))',
        paddingInlineEnd: 'max(0px, env(safe-area-inset-right))',
      },

      [MQ[3]]: {
        maxWidth: '100%',
        borderRadius: '18px 18px 0 0',
        height: '100%',
        overflow: 'auto',
        order: '2',
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
      },
    };
  }
}

function IconTheme({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      css={{
        minWidth: '44px',
        minHeight: '44px',
        maxWidth: '44px',
        maxHeight: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: '6px',
        borderRadius: '1000px',
        transition: '0.3s ease-in-out',

        '&:hover': {
          backgroundColor: '#f5f5f5',
        },

        [MQ[3]]: {
          order: '1',
        },
      }}
    >
      {children}
    </button>
  );
}

// ----------------------------------
// -------------- Icon --------------
// ----------------------------------
function CancelIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16.333"
      height="16.293"
      viewBox="0 0 16.333 16.293"
    >
      <path
        id="cancel-icon"
        d="M15.711,14.2h0L9.482,7.984l.078-.078,6.1-6.1a1.085,1.085,0,0,0,0-1.51,1.094,1.094,0,0,0-1.513.007L7.979,6.483,1.814.305A1.091,1.091,0,0,0,.3.316a1.073,1.073,0,0,0,.017,1.5L6.486,7.982.309,14.166a1.072,1.072,0,0,0,0,1.505,1.1,1.1,0,0,0,1.511-.013L7.988,9.5l6.173,6.163a1.065,1.065,0,0,0,.753.336.91.91,0,0,0,.756-.29,1.072,1.072,0,0,0,.042-1.507"
        transform="translate(0.164 0.164)"
        fill="#c2c2c2"
        stroke="#c2c2c2"
        stroke-width="0.2"
      />
    </svg>
  );
}
