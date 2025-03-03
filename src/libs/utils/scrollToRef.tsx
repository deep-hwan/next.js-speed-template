import { MutableRefObject } from 'react';

const scrollToNextRef = (ref: MutableRefObject<HTMLElement | null>) => {
  const scrollHandler = () => {
    if (ref.current instanceof HTMLElement) {
      // Check if ref.current is an HTML element
      const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementTop - 90,
        behavior: 'smooth',
      });
    } else {
      console.error('The ref is not attached to a valid HTML element.');
    }
  };

  const timeoutId = setTimeout(() => scrollHandler(), 100);
  return () => clearTimeout(timeoutId);
};

export { scrollToNextRef };
