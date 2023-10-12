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
  safeArea = false,
}: {
  safeArea?: boolean;
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
    paddingTop: safeArea
      ? (padding?.all && `max(${padding?.all}px, env(safe-area-inset-top))`) ||
        (padding?.vertical && `max(${padding?.vertical}px, env(safe-area-inset-top))`) ||
        (padding?.top && `max(${padding?.top}px, env(safe-area-inset-top))`)
      : (padding?.all && `${padding?.all}px`) ||
        (padding?.vertical && `${padding?.vertical}px`) ||
        (padding?.top && `${padding?.top}px`),

    paddingBottom: safeArea
      ? (padding?.all && `max(${padding?.all}px, env(safe-area-inset-bottom))`) ||
        (padding?.vertical && `max(${padding?.vertical}px, env(safe-area-inset-bottom))`) ||
        (padding?.bottom && `max(${padding?.bottom}px, env(safe-area-inset-bottom))`)
      : (padding?.all && `${padding?.all}px`) ||
        (padding?.vertical && `${padding?.vertical}px`) ||
        (padding?.bottom && `${padding?.bottom}px`),
    paddingLeft: safeArea
      ? (padding?.all && `max(${padding?.all}px, env(safe-area-inset-left))`) ||
        (padding?.horizontal && `max(${padding?.horizontal}px, env(safe-area-inset-left))`) ||
        (padding?.left && `max(${padding?.left}px, env(safe-area-inset-left))`)
      : (padding?.all && `${padding?.all}px`) ||
        (padding?.horizontal && `${padding?.horizontal}px`) ||
        (padding?.left && `${padding?.left}px`),
    paddingRight: safeArea
      ? (padding?.all && `max(${padding?.all}px, env(safe-area-inset-right))`) ||
        (padding?.horizontal && `max(${padding?.horizontal}px, env(safe-area-inset-right))`) ||
        (padding?.right && `max(${padding?.right}px, env(safe-area-inset-right))`)
      : (padding?.all && `${padding?.all}px`) ||
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
    position: 'relative',
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
  crossGap,
}: {
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'stretch';
  crossAlign?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  crossGap?: number;
}): Interpolation<Theme> {
  return {
    display: 'flex',
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    alignItems: align ? align : direction === 'horizontal' ? 'stretch' : 'flex-start',
    justifyContent: crossAlign && crossAlign,
    rowGap:
      direction === 'vertical'
        ? `${gap}px`
        : undefined || direction === 'horizontal'
        ? `${crossGap}px`
        : undefined,
    columnGap:
      direction === 'horizontal'
        ? `${gap}px`
        : undefined || direction === 'vertical'
        ? `${crossGap}px`
        : undefined,
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
  borderRadius?: number | string;
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
    borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
    boxShadow: boxShadow
      ? `${boxShadow?.x}px ${boxShadow?.y}px ${boxShadow?.blur}px ${boxShadow?.color}`
      : undefined,
  };
}

// -------------------------
// -------- Scroll ---------
// -------------------------
export function ScrollTheme({
  scroll = { type: 'visible', bar: true },
}: {
  scroll?: {
    type?: 'visible' | 'auto' | 'scroll' | 'hidden';
    bar?: boolean;
  };
}): Interpolation<Theme> {
  return {
    overflow: scroll.type,

    // '@supports (-webkit-touch-callout: none)': {
    //   height: '-webkit-fill-available',
    // },

    '::-webkit-scrollbar': {
      display: scroll.bar ? 'flex' : 'none',
      width: '5px',
      height: '6px',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#cccccc',
      borderRadius: '100px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#e2e2e2',
    },
    '::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment': {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
    },
  };
}
