import { RefObject, useEffect } from 'react';

interface ClickOutsideProps {
  ref: RefObject<HTMLDivElement>;
  state: boolean;
  handler: () => void;
}

export const useClickOutside = ({ ref, state, handler }: ClickOutsideProps) => {
  const clickModalOutside = (event: MouseEvent) => {
    if (state && ref.current && !ref.current.contains(event.target as Node)) {
      handler();
    }
  };

  useEffect(() => {
    ref.current?.scrollTo(0, 0);

    if (state) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  });
};
