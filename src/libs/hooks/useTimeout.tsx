import { useEffect, useRef } from 'react';

export function useTimeout(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout.
  useEffect(() => {
    if (delay !== null) {
      const tick = () => {
        if (savedCallback.current) {
          savedCallback.current();
        }
      };
      const id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}
