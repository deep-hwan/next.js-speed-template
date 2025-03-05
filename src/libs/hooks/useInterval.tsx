import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      const tick = () => {
        if (savedCallback.current) {
          savedCallback.current();
        }
      };
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
