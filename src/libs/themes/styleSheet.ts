import { Interpolation, Theme } from '@emotion/react';

export const styleSheet = (className: string, css: Interpolation<Theme> = {}, props?: object) => ({
  className,
  css,
  ...(props || {}),
});
