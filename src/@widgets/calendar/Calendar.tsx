/** @jsxImportSource @emotion/react */
import { colors } from '@/libs/themes';
import { Interpolation, Theme } from '@emotion/react';
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import CalendarTitle from './CalendarTitle';

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

interface CalendarProps {
  minDate?: Date | number | unknown;
  maxDate?: Date | number | unknown;
  date: Date | null;
  onClick?: (date: Date) => void;
  format?: 'yyyy-mm-dd' | 'yyyy-mm' | 'yyyy';
}

const Calendar = ({ minDate, maxDate, date, onClick, format = 'yyyy-mm-dd' }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(() => date || new Date());

  useEffect(() => {
    if (date instanceof Date || date === null) setSelectedDate(date || new Date());
  }, [date]);

  const [currentMonth, setCurrentMonth] = useState(selectedDate?.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate?.getFullYear());
  const [isFormat, setIsFormat] = useState(format);

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const calendarDays = [];
  for (let i = 1; i <= daysInMonth + firstDayOfMonth; i++) {
    calendarDays.push(i > firstDayOfMonth ? i - firstDayOfMonth : null);
  }

  const prevMonth = () => {
    setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) setCurrentYear(prev => prev - 1);
  };

  const nextMonth = () => {
    setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) setCurrentYear(prev => prev + 1);
  };

  const prevYear = () => setCurrentYear(currentYear - 1);

  const nextYear = () => setCurrentYear(currentYear + 1);

  const isSelectedDate = (day: number | null) => {
    return (
      selectedDate &&
      day === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear()
    );
  };

  const [yearRange, setYearRange] = useState({
    startYear: currentYear - (currentYear % 10),
    endYear: currentYear - (currentYear % 10) + 9,
  });

  const nextDecade = () =>
    setYearRange(prev => ({
      startYear: prev.startYear + 10,
      endYear: prev.endYear + 10,
    }));

  const prevDecade = () =>
    setYearRange(prev => ({
      startYear: prev.startYear - 10,
      endYear: prev.endYear - 10,
    }));

  //
  // yyyy-mm-dd > 클릭핸들러
  const selectDay = (day: any) => {
    const newDate = new Date(currentYear, currentMonth, day);
    if ((minDate && newDate < minDate) || (maxDate && newDate > maxDate)) return;
    onClick && onClick(newDate);
  };

  //
  // yyyy > 클릭 핸들러
  const selectYear = (year: number) => {
    const newDate = new Date(year, 0, 1);

    // yyyy 포맷일 때만 minDate/maxDate 체크
    if (format === 'yyyy' && ((minDate && newDate < minDate) || (maxDate && newDate > maxDate))) return;

    setCurrentYear(year);

    format !== 'yyyy' && setIsFormat('yyyy-mm');
    format === 'yyyy' && onClick && onClick(newDate);
  };

  return (
    <Wrapper>
      {isFormat === 'yyyy' && (
        <>
          <CalendarTitle
            prev={prevDecade}
            next={nextDecade}
            title={`${yearRange.startYear}년 ~ ${yearRange.endYear}년`}
          />

          <CalendarGrid ea={3}>
            {Array.from({ length: 9 }, (_, i) => yearRange.startYear + i).map(year => {
              const date = new Date(year, 0, 1);
              // yyyy 포맷일 때만 selectable 체크, 그 외에는 항상 true
              const selectable =
                format === 'yyyy' ? (!minDate || date >= minDate) && (!maxDate || date <= maxDate) : true;
              const isToday = todayYear === year;
              const isSelected = selectedDate.getFullYear() === year;

              return (
                <Wrapper key={year} onClick={() => selectYear(year)}>
                  <YYBox year={year} isToday={isToday} selectable={selectable} isSelected={isSelected} />
                </Wrapper>
              );
            })}
          </CalendarGrid>
        </>
      )}

      {isFormat === 'yyyy-mm' && (
        <>
          <CalendarTitle
            prev={prevYear}
            next={nextYear}
            onClickTitle={() => setIsFormat('yyyy')}
            title={`${currentYear}년`}
          />

          <CalendarGrid ea={4}>
            {Array.from({ length: 12 }, (_, i) => i).map(month => {
              const date = new Date(currentYear, month, 1);
              const lastDayOfMonth = new Date(currentYear, month + 1, 0);

              // Check if any day in month is selectable for yyyy-mm-dd format
              let monthSelectable = false;
              if (format === 'yyyy-mm-dd') {
                for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
                  const dayDate = new Date(currentYear, month, day);
                  if ((!minDate || dayDate >= minDate) && (!maxDate || dayDate <= maxDate)) {
                    monthSelectable = true;
                    break;
                  }
                }
              } else {
                monthSelectable = (!minDate || date >= minDate) && (!maxDate || date <= maxDate);
              }

              const isToday = todayYear === currentYear && todayMonth === month;
              const isSelectedMonth = selectedDate.getMonth() === month && selectedDate.getFullYear() === currentYear;

              return (
                <Wrapper
                  key={month}
                  onClick={() => {
                    if (!monthSelectable) return;

                    const newDate = new Date(currentYear, month, 1);
                    setCurrentMonth(month);
                    setCurrentYear(currentYear);
                    format === 'yyyy-mm-dd' && setIsFormat('yyyy-mm-dd');
                    format === 'yyyy-mm' && onClick && onClick(newDate);
                  }}
                >
                  <MMBox
                    month={month}
                    isToday={isToday}
                    selectable={monthSelectable}
                    isSelectedMonth={isSelectedMonth}
                  />
                </Wrapper>
              );
            })}
          </CalendarGrid>
        </>
      )}

      {isFormat === 'yyyy-mm-dd' && (
        <>
          <CalendarTitle
            prev={prevMonth}
            next={nextMonth}
            onClickTitle={() => setIsFormat('yyyy-mm')}
            title={`${currentYear}년 ${currentMonth + 1}월`}
          />

          <CalendarGrid ea={7}>
            {daysOfWeek.map(day => (
              <DayOfWeek key={day}>{day}</DayOfWeek>
            ))}

            {calendarDays.map((day, index) => {
              const date = new Date(currentYear, currentMonth, day ?? 0);
              const dayOfWeek = date.getDay();
              const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
              const selectable = day && (!minDate || date >= minDate) && (!maxDate || date <= maxDate);
              const isToday = day === todayDate && currentMonth === todayMonth && currentYear === todayYear;

              return (
                <Wrapper key={index} onClick={() => selectable && day && selectDay(day)}>
                  <DDBox
                    day={day}
                    isToday={isToday}
                    isWeekend={isWeekend}
                    selectable={selectable}
                    selectWrap={isSelectedDate(day) && selectable}
                  />
                </Wrapper>
              );
            })}
          </CalendarGrid>
        </>
      )}
    </Wrapper>
  );
};

export default Calendar;

// themes
const flexT: Interpolation<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  userSelect: 'none',
  textAlign: 'center',
  fontSize: '0.938rem',
  transition: 'background-color 0.3s ease',
};

//
const CalendarGrid = ({ ea, children }: { ea: number; children: ReactNode }) => {
  return (
    <div css={{ width: '100%', gridTemplateColumns: `repeat(${ea}, 1fr)`, display: 'grid', gap: 5 }}>{children}</div>
  );
};

//
const Wrapper = ({ children, onClick }: { children: ReactNode; onClick?: () => void }) => (
  <div onClick={onClick} css={{ ...flexT, width: '100%', rowGap: 26 }}>
    {children}
  </div>
);

//
const DayOfWeek = ({ children }: { children: ReactNode } & HTMLAttributes<HTMLElement>) => (
  <span
    css={{
      ...flexT,
      fontSize: '0.875rem',
      color: '#999',
    }}
  >
    {children}
  </span>
);

//
const YYBox = ({
  year,
  isToday,
  isSelected,
  selectable,
}: {
  year: number;
  isToday?: boolean;
  selectable?: boolean;
  isSelected?: boolean;
}) => {
  const colorTheme = () => {
    if (isSelected) return '#fff';
    if (!selectable) return '#bbb';
    if (isToday) return '#4788f4';
    return '#66666a';
  };

  const bgTheme = () => {
    if (isSelected) return colors.keyColor;
    if (isToday && !selectable) return '#E5EDF8';
    if (isToday) return '#E5EDF8';

    return '';
  };

  return (
    <div
      key={year}
      css={{
        ...flexT,
        minHeight: 50,
        maxHeight: 50,
        minWidth: 70,
        maxWidth: 70,
        borderRadius: 18,
        padding: 5,
        backgroundColor: bgTheme(),
        color: colorTheme(),
        cursor: selectable ? 'pointer' : 'default',
        '&:hover': { opacity: selectable ? 0.85 : 1 },
      }}
    >
      {year}년
    </div>
  );
};

//
const MMBox = ({
  month,
  isToday,
  selectable,
  isSelectedMonth,
}: {
  month: number;
  isToday: boolean;
  selectable: boolean;
  isSelectedMonth: boolean;
}) => {
  const colorTheme = () => {
    if (isSelectedMonth) return '#fff';
    if (!selectable) return '#bbb';
    if (isToday) return '#4788f4';

    return '#66666a';
  };

  const bgTheme = () => {
    if (isSelectedMonth) return colors.keyColor;
    if (isToday && !selectable) return '#E5EDF8';
    if (isToday) return '#E5EDF8';

    return '';
  };

  return (
    <div
      key={month}
      css={{
        ...(flexT as any),
        minHeight: 50,
        maxHeight: 50,
        minWidth: 50,
        maxWidth: 50,
        borderRadius: 18,
        padding: 5,
        backgroundColor: bgTheme(),
        color: colorTheme(),
        cursor: selectable ? 'pointer' : 'default',
        '&:hover': { opacity: selectable && 0.85 },
      }}
    >
      {month + 1}월
    </div>
  );
};

const DDBox = ({
  day,
  isToday,
  isWeekend,
  selectable,
  selectWrap,
  size = 32,
}: {
  day: number | null;
  isToday?: any;
  isWeekend?: any;
  selectable?: any;
  selectWrap?: any;
  size?: number;
}) => {
  const colorTheme = () => {
    if (!!isToday && !!selectWrap) return '#fff';
    if (!!isWeekend && !!selectWrap) return '#fff';
    if (!!isWeekend && !selectable) return '#bbb';
    if (isToday) return '#3F87FF';
    if (isWeekend) return '#997F8F';
    if (!selectable) return '#bbb';
    if (selectWrap) return '#fff';

    return '#66666a';
  };

  const bgTheme = () => {
    if (selectWrap) return colors.keyColor;
    if (isToday) return '#E5EDF8';

    return '';
  };

  return (
    <div
      key={day}
      css={{
        minHeight: size,
        maxHeight: size,
        minWidth: size,
        maxWidth: size,
        borderRadius: 11,
        padding: 5,
        color: colorTheme() as any,
        backgroundColor: bgTheme(),
        cursor: selectable ? 'pointer' : 'default',
        '&:hover': { opacity: selectable && 0.85 },
      }}
    >
      {day}
    </div>
  );
};
