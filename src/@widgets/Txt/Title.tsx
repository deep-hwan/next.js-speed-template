import { fontSize, MQ } from '@/libs/themes';
import React from 'react';

type asT = 'bannerTitle' | 'pageTitle' | 'sectionTitle';

export const Title = ({
  children,
  element = 'h1',
  as = 'sectionTitle',
  align = 'center',
  whiteSpace,
}: {
  children: React.ReactNode;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  as?: asT;
  align?: 'center' | 'left';
  whiteSpace?: 'pre-line' | 'pre-wrap' | 'pre-wrap';
}) => {
  const extandedFontSize = () => {
    if (as === 'bannerTitle')
      return {
        lineHeight: 1.38,
        fontSize: fontSize.s48,
        [MQ[0]]: { fontSize: fontSize.s46 },
        [MQ[1]]: { fontSize: fontSize.s38 },
        [MQ[2]]: { fontSize: fontSize.s34, whiteSpace: 'pre-line' },
      };

    if (as === 'sectionTitle')
      return {
        lineHeight: 1.45,
        fontSize: fontSize.s40,
        [MQ[0]]: { fontSize: fontSize.s36 },
        [MQ[1]]: { fontSize: fontSize.s32 },
        [MQ[2]]: { fontSize: fontSize.s26 },
      };

    if (as === 'pageTitle')
      return {
        fontSize: fontSize.s42,
        [MQ[0]]: { fontSize: fontSize.s38 },
        [MQ[1]]: { fontSize: fontSize.s32 },
        [MQ[2]]: { fontSize: fontSize.s28, whiteSpace: 'pre-line' },
      };
  };

  const extendedCSS = {
    ...extandedFontSize(),
    whiteSpace: whiteSpace,
    fontWeight: 'bold',

    transition: 'all 0.2s ease-in-out',
    color: '#414247',
    textAlign: align,
  };

  if (element === 'h1')
    return (
      <h1 className='title' css={extendedCSS}>
        {children}
      </h1>
    );

  if (element === 'h2')
    return (
      <h2 className='title' css={extendedCSS}>
        {children}
      </h2>
    );

  if (element === 'h3')
    return (
      <h3 className='title' css={extendedCSS}>
        {children}
      </h3>
    );

  if (element === 'h4')
    return (
      <h4 className='title' css={extendedCSS}>
        {children}
      </h4>
    );
};
