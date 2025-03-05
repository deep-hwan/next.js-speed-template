import { useRouter } from 'next/router';
import { useEffect } from 'react';

// ex : useRouteResetQuery('queryName',["1","2","3"])

export function useRouteResetQuery({ queryName, queryValues }: { queryName: string; queryValues: string[] }) {
  const { query, replace } = useRouter();

  useEffect(() => {
    const currentValue = query[queryName] as string; // query[queryName]를 string으로 캐스팅

    if (currentValue && !queryValues.includes(currentValue)) {
      const updatedQuery = { ...query, [queryName]: '' };
      replace({ query: updatedQuery }, undefined, { scroll: false, shallow: false });
    }
  }, [query, queryName, queryValues, replace]); // 의존성 배열
}
