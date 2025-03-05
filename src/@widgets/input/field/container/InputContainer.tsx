/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';

function InputContainer({
  id,
  children,
  label,
  labelSize,
  labelColor,
  minWidth,
  maxWidth,
  error,
  tolTip,
  important,
  ...props
}: InputTypes & { children: ReactNode; id: string | number; error: ErrorType; tolTip: TolTipType }) {
  const LabelColor = () => {
    if (error?.error) return error?.messageColor ?? '#FF6767';
    return labelColor ?? '#888';
  };

  return (
    <div
      css={{
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        minWidth: minWidth,
        maxWidth: maxWidth,
      }}
      {...props}
    >
      {label && (
        <label
          htmlFor={id}
          css={{
            color: LabelColor(),
            display: 'flex',
            alignItems: 'center',
            gap: 3,
            fontSize: labelSize ?? '0.813rem',
            marginBottom: '5px',

            '&:focus-within': { fontWeight: 500 },
          }}
        >
          {label}

          {!!important && <span css={{ fontSize: 11, color: '#fa7979', fontWeight: 500 }}>{important ?? '*'}</span>}
        </label>
      )}

      {children}

      {error?.error && (
        <p css={{ color: error?.messageColor ?? '#FF6767', fontSize: (error?.messageSize as any) ?? 13, marginTop: 5 }}>
          {error?.message}
        </p>
      )}

      {!!tolTip?.description && !error?.error && (
        <p css={{ color: tolTip?.color ?? '#939EAB', fontSize: (tolTip?.size as any) ?? 13, marginTop: 5 }}>
          {tolTip?.description}
        </p>
      )}
    </div>
  );
}

export default InputContainer;
