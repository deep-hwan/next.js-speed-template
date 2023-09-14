/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import { ForwardedRef, HTMLAttributes, forwardRef, memo } from 'react';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: never[];
  size?: number;
}

// --------------------------------------------
// -------------- LoadingSpinner --------------
// --------------------------------------------
const LoadingSpinnerUi = forwardRef(function LoadingSpinnerUi(
  { size = 40, ...props }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

  return (
    <div
      ref={ref}
      css={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
      {...props}
    >
      <div
        css={{
          width: `${size}px`,
          minWidth: `${size}px`,
          height: `${size}px`,
          minHeight: `${size}px`,
          border: '4px solid #ccc',
          borderBottomColor: 'transparent',
          borderRadius: '50%',
          display: 'inline-block',
          boxSizing: 'border-box',
          animation: `${rotation} 1s linear infinite`,
        }}
      />
    </div>
  );
});
export const LoadingSpinner = memo(LoadingSpinnerUi);
