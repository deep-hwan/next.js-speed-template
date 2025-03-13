import { useEffect, useState } from 'react';

export function useViewport() {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewporWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    // Initialize viewport dimensions only on client-side
    if (typeof window !== 'undefined') {
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
    }

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return {
    viewportHeight,
    viewporWidth,
  };
}
