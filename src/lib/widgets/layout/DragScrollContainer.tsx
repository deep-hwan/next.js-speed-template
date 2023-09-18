/** @jsxImportSource @emotion/react */
import React, { useRef, useState, MouseEvent, HTMLAttributes, ReactNode } from 'react';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  maxWidth?: number;
}

// -------------------------------------------------
// -------------- DragScrollContainer --------------
// -------------------------------------------------
export const DragScrollContainer = ({ children, maxWidth, ...props }: Props) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const startDrag = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (ref.current?.offsetLeft || 0));
    setScrollLeft(ref.current?.scrollLeft || 0);
  };

  const doDrag = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (ref.current?.offsetLeft || 0);
    const walk = x - startX;
    if (ref.current) {
      ref.current.scrollLeft = scrollLeft - walk;
    }
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={ref}
      onMouseDown={startDrag}
      onMouseLeave={endDrag}
      onMouseUp={endDrag}
      onMouseMove={doDrag}
      css={{
        width: '100%',
        maxWidth: `${maxWidth}px`,
        display: 'flex',
        overflowX: 'auto',
        cursor: isDragging ? 'grabbing' : 'auto',
        padding: '1px 0 ',

        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
      {...props}
    >
      {children}
    </div>
  );
};
