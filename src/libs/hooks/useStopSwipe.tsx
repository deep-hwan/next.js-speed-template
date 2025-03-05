import React, { useEffect } from 'react';

export const useStopSwipe = () => {
  useEffect(() => {
    let touchStartX = 0;
    const handleTouchStart = (e: TouchEvent) => (touchStartX = e.touches[0].clientX);

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartX < 30) e.preventDefault();
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
};
