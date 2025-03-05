import { ForwardedRef, useCallback, useEffect, useRef } from 'react';

type RefType = ForwardedRef<HTMLDivElement>;

export function useModalStatic({
  ref,
  open,
  onCancel,
  clickOutSideClose,
  windowScreenScroll,
}: {
  ref: RefType;
  open: boolean;
  onCancel: () => void;
  clickOutSideClose?: boolean;
  windowScreenScroll?: boolean;
}) {
  const initialOverflowY = useRef<string | null>(null);
  const initialScrollY = useRef<number>(0);

  const clickModalOutside = useCallback(
    (event: MouseEvent) => {
      if (
        clickOutSideClose &&
        open &&
        ref &&
        'current' in ref &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        onCancel();
      }
    },
    [open, onCancel]
  );

  useEffect(() => {
    if (!windowScreenScroll) {
      if (open) {
        initialOverflowY.current = document.body.style.overflowY;
        initialScrollY.current = window.scrollY;

        if (initialOverflowY.current !== 'hidden') {
          document.body.style.top = `-${initialScrollY.current}px`;
          document.body.style.overflowY = 'hidden';
        }
      } else {
        if (initialOverflowY.current !== 'hidden') {
          document.body.style.top = '';
          document.body.style.overflowY = 'auto';
          window.scrollTo(0, initialScrollY.current);
        }
      }
    }
  }, [open, windowScreenScroll]);

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  }, [clickModalOutside]);

  return null;
}
