import { useEffect, useState } from 'react';

// 미디어 쿼리 문자열을 인자로 받는 함수
function mediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // 미디어 쿼리 평가 함수
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    // 이벤트 리스너 추가
    media.addListener(listener);
    // 초기 상태 설정
    setMatches(media.matches);

    return () => media.removeListener(listener);
  }, [query]); // query가 변경될 때마다 훅을 다시 실행

  return matches;
}

export function useMediaQuery() {
  return {
    w1440: mediaQuery('(max-width: 1440px)'),
    w1080: mediaQuery('(max-width: 1080px)'),
    w780: mediaQuery('(max-width: 700px)'),
    w600: mediaQuery('(max-width: 600px)'),
    w438: mediaQuery('(max-width: 438px)'),
  };
}
