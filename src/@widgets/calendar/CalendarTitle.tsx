/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';

type Props = {
  prev: () => void;
  next: () => void;
  onClickTitle?: () => void;
  title: string;
};

const CalendarTitle = ({ prev, next, onClickTitle, title }: Props) => {
  return (
    <div css={themes.wrapper}>
      <button type='button' css={themes.tab} onClick={prev}>
        이전
      </button>

      <div onClick={onClickTitle} css={themes.title}>
        {title}
      </div>

      <button type='button' css={themes.tab} onClick={next}>
        다음
      </button>
    </div>
  );
};

export default CalendarTitle;

//
//
const themes = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 300,
    padding: '0 12px',
    userSelect: 'none',
  } as Interpolation<Theme>,

  tab: {
    color: '#797979',
    padding: 5,
    fontSize: '0.875rem',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    whiteSpace: 'nowrap',
    transition: '0.15s ease-in-out',
    '&:active': { opacity: 0.7 },
  } as Interpolation<Theme>,

  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    fontWeight: 500,
    color: '#66666a',
    padding: '5px 5px 7px',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    transition: '0.15s ease-in-out',
    '&:active': { opacity: 0.7 },
  } as Interpolation<Theme>,
};
