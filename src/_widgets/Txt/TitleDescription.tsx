import { fontSize, MQ } from '@/libs/themes';
import React from 'react';

export const TitleDescription = ({
  children,
  align = 'center',
  whiteSpace,
}: {
  children: React.ReactNode;
  align?: 'center' | 'left';
  whiteSpace?: 'pre-line' | 'normal';
}) => {
  return (
    <p
      className='titleDescription'
      css={{
        color: '#6c6c73',
        fontSize: fontSize.s19,
        lineHeight: 1.6,
        whiteSpace: whiteSpace,
        textAlign: align,
        padding: '0 10px',
        [MQ[1]]: { fontSize: fontSize.s18 },
        [MQ[2]]: { fontSize: fontSize.s17, lineHeight: 1.55 },
      }}
    >
      {children}
    </p>
  );
};
