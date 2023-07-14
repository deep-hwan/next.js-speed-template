/// 2023.01.01 타입
export function moment(dataVal: string): string {
  const now = new Date(dataVal);
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();

  return `${year}.${month >= 10 ? month : "0" + month}.${
    date >= 10 ? date : "0" + date
  }`;
}

/// 2023-01-01 타입
export function currentMoment(dateVal: string): string {
  const now = new Date(dateVal);
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  return `${year}-${month >= 10 ? month : "0" + month}-${
    date >= 10 ? date : "0" + date
  }`;
}

// 현재 데이터 연산자
export const detailDate = (dateVal: string): string => {
  const nowDate = new Date(dateVal);
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
};
