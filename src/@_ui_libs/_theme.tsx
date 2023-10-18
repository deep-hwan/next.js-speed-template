/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import { colors } from '../libs/themes/colors';

// ---------------------------
// -------- Viewport ---------
// ---------------------------
export function ViewportTheme({
  zIndex,
  backgroundColor,
  width,
  height = 'auto',
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  position = { type: 'relative' },
}: {
  zIndex?: number;
  backgroundColor?: string;
  width?: 'auto' | '100%';
  minWidth?: number | string;
  maxWidth?: number | string;
  height?: 'auto' | '100%';
  minHeight?: number | string;
  maxHeight?: number | string;
  position?: {
    type?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
}): Interpolation<Theme> {
  return {
    width: width,
    minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth,
    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
    height: height ? height : maxHeight ? '100%' : 'auto',
    minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight,
    maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
    position: position?.type,
    top: typeof position.top === 'number' ? `${position.top}px` : position.top,
    bottom: typeof position.bottom === 'number' ? `${position.bottom}px` : position.bottom,
    right: typeof position.right === 'number' ? `${position.right}px` : position.right,
    left: typeof position.right === 'number' ? `${position.left}px` : position.left,
    zIndex: zIndex,
    backgroundColor,
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

// -----------------------------
// -------- Typography ---------
// -----------------------------
export function TypographyTheme({
  size,
  color,
  weight,
  txtAlign,
  whiteSpace,
  lineHeight,
}: {
  size?: number | string;
  color?: string;
  weight?: 'lighter' | 'normal' | 'medium' | 'bold';
  txtAlign?: 'start' | 'end' | 'center';
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
  lineHeight?: number | string;
}): Interpolation<Theme> {
  const TYPOGRAPH_WEIGHT = {
    lighter: { fontWeight: '300' },
    normal: { fontWeight: '400' },
    medium: { fontWeight: '500' },
    bold: { fontWeight: '600' },
  } as const;

  return {
    fontSize:
      typeof size === 'number' ? (size ? `${size / 16}rem` : '0.938rem') : size ? size : '0.938rem',
    color: color,
    textAlign: txtAlign,
    whiteSpace: whiteSpace,
    lineHeight: lineHeight,
    position: 'relative',
    transition: '0.3s ease-in-out',
    ...TYPOGRAPH_WEIGHT[weight ? weight : 'normal'],
  };
}

// ----------------------
// -------- Tab ---------
// ----------------------
export function TabTheme({
  backgroundColor,
  backgroundColorHover,
  opacityHover,
  opacityDisabled,
  border,
  borderRadius,
  boxShadow,
  cursor,
}: {
  backgroundColor?: string;
  backgroundColorHover?: string;
  opacityHover?: string | number;
  opacityDisabled?: string | number;
  borderRadius?: number | string;
  cursor?: 'default' | 'grab' | 'pointer' | 'zoom';
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
    outline: 'none',
    border: 'none',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    transition: '0.3s ease-in-out',

    '&:hover': {
      opacity: opacityHover,
      backgroundColor: backgroundColorHover,
      border: backgroundColorHover && 'transparent',
    },

    '&:disabled': { opacity: opacityDisabled },

    ...(StyleTheme({
      backgroundColor,
      borderRadius,
      cursor,
      boxShadow,
      border,
    }) as string[]),
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
  cursor,
}: {
  backgroundColor?: string;
  backgroundColorHover?: string;
  borderRadius?: number | string;
  cursor?: 'default' | 'grab' | 'pointer' | 'zoom';
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
    cursor: cursor,
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
