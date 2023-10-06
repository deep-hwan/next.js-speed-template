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
import { colors } from '@/libs/theme/colors';

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
    <div css={styles.checkInput as Interpolation<Theme>}>
      {cloneElement(child, {
        id,
        ...child.props,
      })}

      <div css={styles.labelWrap}>
        <label htmlFor={id} css={styles.label} {...props}>
          {label}
        </label>
      </div>
    </div>
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
    <label css={styles.checkBox as Interpolation<Theme>} htmlFor={id}>
      <input type={type} css={styles.input as Interpolation<Theme>} ref={ref} id={id} {...props} />
    </label>
  );
});

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const styles = {
  checkInput: {
    display: 'flex',
    columnGap: '2px',
    cursor: 'pointer',
    userSelect: 'none',
  },

  labelWrap: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '2px',
    justifyContent: 'center',
  },

  label: { fontSize: '0.938rem', color: '#555555', cursor: 'pointer' },

  checkBox: {
    display: 'flex',
    maxWidth: '28px',
    maxHeight: '28px',
    justifyContent: 'center',
    padding: '6px',
    borderRadius: '100px',
    transition: '0.1s ease-in-out',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: colors.ground200,
    },
  },

  input: {
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
  },
};