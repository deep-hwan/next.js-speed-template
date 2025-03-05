import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface RouteChangeEventArgs {
  shallow: boolean;
}

export function useRouteOnload(handleOnLoad: () => void): void {
  const router = useRouter();

  const handleRouteChangeComplete = (url: string, { shallow }: RouteChangeEventArgs) => {
    if (!shallow) handleOnLoad();
  };

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeComplete);
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeComplete);
    };
  }, [router.events]);

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);
}
