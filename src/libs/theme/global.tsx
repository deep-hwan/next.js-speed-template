import { Interpolation, Theme } from '@emotion/react';
import { colors } from './colors';

// -------------------------------------
// -------- Global_Input_Styles --------
// -------------------------------------
export function GlobalInputStyles(): Interpolation<Theme> {
  return {
    '::placeholder': { color: colors.grey300 },

    "&[type='number']::-webkit-outer-spin-button, &[type='number']::-webkit-inner-spin-button": {
      WebkitAppearance: 'none',
      margin: 0,
    },

    '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active':
      {
        WebkitTextFillColor: colors.grey800,
        WebkitBoxShadow: '0 0 0px 1000px transparent inset',
        boxShadow: '0 0 0px 1000px transparent inset',
        transition: 'background-color 5000s ease-in-out 0s',
        transitionDelay: '9999s',
      },

    '&:autofill, &:autofill:hover, &:autofill:focus, &:autofill:active': {
      WebkitTextFillColor: colors.grey800,
      WebkitBoxShadow: '0 0 0px 1000px transparent inset',
      boxShadow: '0 0 0px 1000px transparent inset',
      transition: 'background-color 5000s ease-in-out 0s',
    },

    '::-webkit-scrollbar': {
      display: 'none',
    },
  };
}

// -------------------------
// -------- Padding --------
// -------------------------
export function PaddingTheme({
  padding,
}: {
  padding?: {
    all?: number;
    horizontal?: number;
    vertical?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}): Interpolation<Theme> {
  return {
    paddingTop:
      (padding?.all && `${padding?.all}px`) ||
      (padding?.vertical && `${padding?.vertical}px`) ||
      (padding?.top && `${padding?.top}px`),
    paddingBottom:
      (padding?.all && `${padding?.all}px`) ||
      (padding?.vertical && `${padding?.vertical}px`) ||
      (padding?.bottom && `${padding?.bottom}px`),
    paddingLeft:
      (padding?.all && `${padding?.all}px`) ||
      (padding?.horizontal && `${padding?.horizontal}px`) ||
      (padding?.left && `${padding?.left}px`),
    paddingRight:
      (padding?.all && `${padding?.all}px`) ||
      (padding?.horizontal && `${padding?.horizontal}px`) ||
      (padding?.right && `${padding?.right}px`),
  };
}

// ------------------------
// -------- Margin --------
// ------------------------
export function MarignTheme({
  margin,
}: {
  margin?: {
    all?: number;
    horizontal?: number;
    vertical?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
}): Interpolation<Theme> {
  return {
    marginTop:
      (margin?.all && `${margin?.all}px`) ||
      (margin?.vertical && `${margin?.vertical}px`) ||
      (margin?.top && `${margin?.top}px`),
    marginBottom:
      (margin?.all && `${margin?.all}px`) ||
      (margin?.vertical && `${margin?.vertical}px`) ||
      (margin?.bottom && `${margin?.bottom}px`),
    marginLeft:
      (margin?.all && `${margin?.all}px`) ||
      (margin?.horizontal && `${margin?.horizontal}px`) ||
      (margin?.left && `${margin?.left}px`),
    marginRight:
      (margin?.all && `${margin?.all}px`) ||
      (margin?.horizontal && `${margin?.horizontal}px`) ||
      (margin?.right && `${margin?.right}px`),
  };
}

// ---------------------------
// -------- Viewport ---------
// ---------------------------
export function ViewportTheme({
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
}: {
  width?: 'auto' | '100%';
  minWidth?: number;
  maxWidth?: number;
  height?: 'auto' | '100%';
  minHeight?: number;
  maxHeight?: number;
}): Interpolation<Theme> {
  return {
    width: width,
    minWidth: `${minWidth}px`,
    maxWidth: `${maxWidth}px`,
    height: height ? height : maxHeight ? '100%' : 'auto',
    minHeight: `${minHeight}px`,
    maxHeight: `${maxHeight}px`,
    transition: '0.3s ease-in-out',
  };
}

// -----------------------
// -------- Flex ---------
// -----------------------
export function FlexTheme({
  direction,
  align,
  crossAlign,
  wrap,
  gap,
}: {
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'center' | 'stretch' | 'end';
  crossAlign?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
}): Interpolation<Theme> {
  return {
    position: 'relative',
    display: 'flex',
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    alignItems: align ? align : direction === 'horizontal' ? 'stretch' : 'flex-start',
    justifyContent: crossAlign && crossAlign,
    rowGap: direction === 'vertical' ? `${gap}px` : undefined,
    columnGap: direction === 'horizontal' ? `${gap}px` : undefined,
    flexWrap: wrap,
  };
}

// ------------------------
// -------- Stlye ---------
// ------------------------
export function StyleTheme({
  backgroundColor,
  border,
  borderRadius,
  boxShadow,
}: {
  backgroundColor?: string;
  borderRadius?: number;
  boxShadow?: {
    x?: number;
    y?: number;
    blur?: number;
    color?: string;
  };
  border?: {
    solid: number;
    position?: 'left' | 'right' | 'top' | 'bottom';
    color?: string;
  };
}): Interpolation<Theme> {
  return {
    backgroundColor: backgroundColor,
    border:
      border?.position !== 'bottom' && 'top' && 'right' && 'left'
        ? `${border?.solid}px solid ${border?.color}`
        : undefined,
    borderBottom:
      border?.position === 'bottom' ? `${border?.solid}px solid ${border?.color}` : undefined,
    borderTop: border?.position === 'top' ? `${border?.solid}px solid ${border?.color}` : undefined,
    borderRight:
      border?.position === 'right' ? `${border?.solid}px solid ${border?.color}` : undefined,
    borderLeft:
      border?.position === 'left' ? `${border?.solid}px solid ${border?.color}` : undefined,
    borderRadius: `${borderRadius}px`,
    boxShadow: boxShadow
      ? `${boxShadow?.x}px ${boxShadow?.y}px ${boxShadow?.blur}px ${boxShadow?.color}`
      : undefined,
  };
}
