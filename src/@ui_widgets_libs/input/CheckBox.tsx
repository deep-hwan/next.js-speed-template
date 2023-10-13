/** @jsxImportSource @emotion/react */
import React, {
  Children,
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
} from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { colors } from '@/libs/themes/colors';
import { Row } from '../_index';
import {
  FlexTheme,
  PaddingTheme,
  StyleTheme,
  TypographyTheme,
  ViewportTheme,
} from '@/libs/themes/_theme';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------

interface CheckProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: number;
  type?: 'checkbox' | 'radio';
}
interface InputProps extends HTMLAttributes<HTMLLabelElement> {
  label?: ReactNode;
  children: ReactElement;
}

// ------------------------------------------
// -------------- Checkt Input --------------
// ------------------------------------------
export function CheckInput({ label, children, ...props }: InputProps) {
  const child = Children.only(children);
  const id = child.props.id ?? 'check';

  return (
    <Row gap={2} width="auto" css={{ cursor: 'pointer', userSelect: 'none' }}>
      {cloneElement(child, {
        id,
        ...child.props,
      })}

      <Row width="auto" align="center" crossAlign="center" padding={{ bottom: 2 }}>
        <label
          htmlFor={id}
          css={[TypographyTheme({ size: 15, color: '#555555' }), { cursor: 'pointer' }]}
          {...props}
        >
          {label}
        </label>
      </Row>
    </Row>
  );
}

// --------------------------------------
// -------------- CheckBox --------------
// --------------------------------------
CheckInput.CheckBox = forwardRef(function CheckBox(
  { type = 'checkbox', id, ...props }: CheckProps,
  ref?: ForwardedRef<HTMLInputElement>,
) {
  return (
    <label
      css={[
        FlexTheme({ crossAlign: 'center' }),
        ViewportTheme({ maxWidth: 28, maxHeight: 28 }),
        PaddingTheme({ padding: { all: 6 } }),
        StyleTheme({
          borderRadius: 100,
          backgroundColorHover: colors.ground200,
          cursor: 'pointer',
        }),
      ]}
      htmlFor={id}
    >
      <input type={type} css={Themes()} ref={ref} id={id} {...props} />
    </label>
  );
});

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
function Themes(): Interpolation<Theme> {
  return {
    width: '16px',
    minWidth: '16px',
    height: '16px',
    minHeight: '16px',
    border: '0px solid gainsboro',
    borderRadius: '5px !important',
    appearance: 'none',
    backgroundColor: '#e2e2e2',
    userSelect: 'none',
    transition: '0.2s ease-in-out',
    backgroundImage:
      "url('data:image/svg+xml,%3csvg viewBox=%220 0 16 16%22 fill=%22white%22 xmlns=%22http://www.w3.org/2000/svg%22%3e%3cpath d=%27M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z%27/%3e%3c/svg%3e')",

    '&:checked': {
      borderColor: 'transparent',
      backgroundSize: '100% 100%',
      backgroundPosition: '50%',
      backgroundRepeat: 'no-repeat',
      backgroundColor: colors.keyColor,
      borderRadius: '5px',
    },

    '&:disabled': {
      borderColor: 'transparent',
      backgroundSize: '100% 100%',
      backgroundPosition: '50%',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#c9c9c9',
      border: '1px solid #cccccc',
      borderRadius: '5px',
    },
  };
}
