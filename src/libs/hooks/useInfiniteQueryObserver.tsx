import { MutableRefObject, useEffect } from 'react';

export function useInfiniteQueryObserver({ data, fetchNextPage, ref }: { data: any; fetchNextPage: any; ref: any }) {
  const onIntersect: IntersectionObserverCallback = ([entry], observer) => {
    if (data && data.pages && data.pages.length > 0) {
      const lastPage = data.pages[data.pages.length - 1];
      if (lastPage.nextPageToken !== -1) {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          fetchNextPage();
        }
      }
    }
  };

  // 옵저버 > 동작
  return useObserver({ target: ref, onIntersect });
}

interface useObserverProps {
  target: MutableRefObject<Element | null>;
  onIntersect: IntersectionObserverCallback;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useObserver = ({
  target, // 감지할 대상, ref를 넘길 예정
  onIntersect, // 감지 시 실행할 callback 함수
  root = null, // 교차할 부모 요소, 아무것도 넘기지 않으면 document가 기본이다.
  rootMargin = '0px', // root와 target이 감지하는 여백의 거리
  threshold = 0.0, // 임계점. 1.0이면 root내에서 target이 100% 보여질 때 callback이 실행된다.
}: useObserverProps) => {
  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    // 넘어오는 element가 있어야 observer를 생성할 수 있도록 한다.
    if (target && target.current) {
      // callback의 인자로 들어오는 entry는 기본적으로 순환자이기 때문에
      // 복잡한 로직을 필요로 할때가 많다.
      // callback을 선언하는 곳에서 로직을 짜서 통째로 넘기도록 하겠다.

      observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold,
      });
      // 실제 Element가 들어있는 current 관측을 시작한다.
      observer.observe(target.current);
    }

    // observer를 사용하는 컴포넌트가 해제되면 observer 역시 꺼 주자.
    return () => observer && observer.disconnect();
  }, [target, rootMargin, threshold, onIntersect]);
};
