import { HTMLMotionProps, motion, useInView } from 'framer-motion';
import { ReactNode, forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from 'react';

interface MotionItemProps extends Omit<HTMLMotionProps<'li'>, 'ref'> {
  children: ReactNode;
  width?: '100%' | 'auto';
  delay?: number;
  duration?: number;
  y?: number;
  activeAnimation?: boolean;
}

export const MotionItem = memo(
  forwardRef<HTMLLIElement, MotionItemProps>(
    ({ children, delay = 0, width = '100%', y = 20, duration = 0.5, activeAnimation = true, ...props }, ref) => {
      // 내부 참조 객체 생성
      const innerRef = useRef<HTMLLIElement>(null);

      // `useInView`에서 내부 참조 사용
      const isInViewStep1 = useInView(innerRef, { once: false });

      // `ref`가 `innerRef`를 참조하도록 설정
      useImperativeHandle(ref, () => innerRef.current || document.createElement('li'));

      // 애니메이션 상태를 관리하기 위한 상태 변수
      const [animate, setAnimate] = useState(false);

      // `activeAnimation` 또는 `isInViewStep1`이 변경될 때마다 애니메이션 상태 업데이트
      useEffect(() => {
        if (ref) {
          // ref가 제공된 경우, activeAnimation과 isInViewStep1에 따라 애니메이션 상태 설정
          if (activeAnimation && isInViewStep1) {
            setAnimate(true);
          } else {
            setAnimate(false);
          }
        } else {
          // ref가 제공되지 않은 경우, 항상 애니메이션 활성화
          setAnimate(true);
        }
      }, [activeAnimation, isInViewStep1, ref]);

      return (
        <motion.li
          key={activeAnimation ? 'active' : 'inactive'}
          ref={innerRef}
          initial={{ opacity: 0, y }}
          animate={{
            opacity: animate ? 1 : 0,
            y: animate ? 0 : y,
          }}
          transition={{ duration, delay }}
          css={{
            width,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          {...props}
        >
          {children}
        </motion.li>
      );
    }
  )
);
