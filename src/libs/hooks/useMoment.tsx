export function useMoment(dateParam: string | Date) {
  const constructDateString = (dateStr: string) => {
    const parts = dateStr.split('-');
    const year = parts[0];
    const month = parts[1] ? parts[1].padStart(2, '0') : '01';
    const day = parts[2] ? parts[2].padStart(2, '0') : '01';
    return `${year}-${month}-${day}`;
  };

  // Check if dateParam is a string and needs processing
  const dateString = typeof dateParam === 'string' ? constructDateString(dateParam) : dateParam;
  const date = new Date(dateString);

  return {
    format: (
      typeParam:
        | 'yyyy'
        | 'yyyy.mm'
        | 'yyyy.mm.dd'
        | 'yyyy.mm.dd hh:mm'
        | 'yyyy-mm'
        | 'yyyy-mm-dd'
        | 'yyyy-mm-dd hh:mm'
        | 'yyyy년'
        | 'yyyy년mm월'
        | 'yyyy년mm월dd일'
        | 'yyyy년mm월dd일 hh:mm'
        | 'yy년mm월'
        | 'yy년mm월dd일'
        | 'yy년mm월dd일 hh:mm'
    ) => {
      const type = typeParam ?? 'yyyy.mm.dd';

      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      const formattedMonth = month >= 10 ? month : `0${month}`;
      const formattedDay = day >= 10 ? day : `0${day}`;
      const formattedHours = hours >= 10 ? hours : `0${hours}`;
      const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;
      const period = hours < 12 ? '오전' : '오후';
      const adjustedHours = hours % 12 || 12; // Convert to 12-hour format

      if (type === 'yyyy') {
        return `${year}`;
      }

      if (type === 'yyyy.mm') {
        return `${year}.${formattedMonth}`;
      }

      if (type === 'yyyy.mm.dd') {
        return `${year}.${formattedMonth}.${formattedDay}`;
      }

      if (type === 'yyyy.mm.dd hh:mm') {
        return `${year}.${formattedMonth}.${formattedDay} ${period} ${adjustedHours}:${formattedMinutes}`;
      }

      if (type === 'yyyy-mm') {
        return `${year}-${formattedMonth}`;
      }

      if (type === 'yyyy-mm-dd') {
        return `${year}-${formattedMonth}-${formattedDay}`;
      }

      if (type === 'yyyy-mm-dd hh:mm') {
        return `${year}-${formattedMonth}-${formattedDay} ${period} ${adjustedHours}:${formattedMinutes}`;
      }

      if (type === 'yyyy년') {
        return `${year}년`;
      }

      if (type === 'yyyy년mm월') {
        return `${year}년 ${formattedMonth}월`;
      }

      if (type === 'yyyy년mm월dd일') {
        return `${year}년 ${formattedMonth}월 ${formattedDay}일`;
      }

      if (type === 'yyyy년mm월dd일 hh:mm') {
        return `${year}년 ${formattedMonth}월 ${formattedDay}일 ${period} ${adjustedHours}:${formattedMinutes}`;
      }

      if (type === 'yy년mm월') {
        return `${year.toString().slice(-2)}년 ${formattedMonth}월`;
      }

      if (type === 'yy년mm월dd일') {
        return `${year.toString().slice(-2)}년 ${formattedMonth}월 ${formattedDay}일`;
      }

      if (type === 'yy년mm월dd일 hh:mm') {
        return `${year.toString().slice(-2)}년 ${formattedMonth}월 ${formattedDay}일 ${period} ${adjustedHours}:${formattedMinutes}`;
      }
    },

    fromNow: () => {
      const nowDate = new Date(dateParam);
      const milliSeconds = new Date().getTime() - nowDate.getTime();

      const seconds = milliSeconds / 1000;
      if (seconds < 60) return `방금 전`;
      const minutes = seconds / 60;
      if (minutes < 60) return `${Math.floor(minutes)}분 전`;
      const hours = minutes / 60;
      if (hours < 24) return `${Math.floor(hours)}시간 전`;
      const days = hours / 24;
      if (days < 7) return `${Math.floor(days)}일 전`;
      const weeks = days / 7;
      if (weeks < 5) return `${Math.floor(weeks)}주 전`;
      const months = days / 30;
      if (months < 12) return `${Math.floor(months)}개월 전`;
      const years = days / 365;
      return `${Math.floor(years)}년 전`;
    },

    detailMoment: () => {
      const now = new Date(dateParam);
      const year = now.getFullYear();
      const month = now.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1
      const date = now.getDate();
      const hours = now.getHours(); // 시간
      const minutes = now.getMinutes(); // 분

      // 연, 월, 일을 'yyyy.mm.dd' 형식으로 포맷팅
      const formattedDate = `${year}.${month >= 10 ? month : '0' + month}.${date >= 10 ? date : '0' + date}`;
      // 시간과 분을 'hh:mm' 형식으로 포맷팅
      const formattedTime = `${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}`;

      // 최종 문자열 반환: 'yyyy.mm.dd hh:mm'
      return `${formattedDate} ${formattedTime}`;
    },

    date,
  };
}
