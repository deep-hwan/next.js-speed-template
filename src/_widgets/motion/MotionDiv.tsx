import { HTMLMotionProps, motion, useInView } from 'framer-motion';
import { ReactNode, forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from 'react';

interface MotionDivProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  children: ReactNode;
  width?: '100%' | 'auto';
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  activeAnimation?: boolean;
}

const MotionDiv = memo(
  forwardRef<HTMLDivElement, MotionDivProps>(
    (
      { children, delay = 0, width = '100%', y = 20, x = 0, duration = 0.5, activeAnimation = false, ...props },
      ref
    ) => {
      // 내부 참조 객체 생성
      const innerRef = useRef<HTMLDivElement>(null);
      const motionRef = useRef<HTMLDivElement>(null);

      const currentRef = ref || motionRef;

      // `useInView`에서 내부 참조 사용
      const isInViewStep1 = useInView(innerRef, { once: false });

      // `ref`가 `innerRef`를 참조하도록 설정
      useImperativeHandle(ref, () => innerRef.current || document.createElement('div'));

      // 애니메이션 상태를 관리하기 위한 상태 변수
      const [animate, setAnimate] = useState(false);

      // `activeAnimation` 또는 `isInViewStep1`이 변경될 때마다 애니메이션 상태 업데이트
      useEffect(() => {
        if (currentRef) {
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
      }, [activeAnimation, isInViewStep1, currentRef]);

      return (
        <motion.div
          key={activeAnimation ? 'active' : 'inactive'}
          ref={innerRef}
          initial={{ opacity: 0, y, x }}
          animate={{
            opacity: animate || isInViewStep1 ? 1 : 0,
            y: animate || isInViewStep1 ? 0 : y,
            x: animate || isInViewStep1 ? 0 : x,
          }}
          transition={{ duration, delay }}
          css={{
            width,
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          {...props}
        >
          {children}
        </motion.div>
      );
    }
  )
);

export { MotionDiv };
