import { ForwardedRef, forwardRef } from 'react';
import { colors } from '@/libs/themes';

//type
type Type = {
  onClick?: () => void;
  active: boolean;
  width?: number;
  height?: number;
  children: never[];
};

//
const Switch = forwardRef((props: Type, ref: ForwardedRef<HTMLElement | HTMLDivElement | any>) => {
  return (
    <div
      onClick={() => props.onClick && props.onClick()}
      css={{
        position: 'relative',
        minWidth: props?.width ?? 48,
        minHeight: props?.height ?? 30,
        borderRadius: 1000,
        backgroundColor: '#eee',
      }}
    >
      <div
        ref={ref}
        css={{
          ...(absoluteT as any),
          width: '100%',
          height: '100%',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          padding: 3,
        }}
      >
        <div
          css={{
            ...(absoluteT as any),
            left: props?.active ? '48%' : 3,
            minWidth: `calc(${props.height ?? 30}px - 6px)`,
            minHeight: `calc(${props.height ?? 30}px - 6px)`,
            backgroundColor: props?.active ? colors.keyColor : '#aaa',
          }}
        >
          {''}
        </div>
      </div>
    </div>
  );
});

export default Switch;

const absoluteT = {
  position: 'absolute',
  transition: '0.3s ease-in-out',
  borderRadius: 100,
};
