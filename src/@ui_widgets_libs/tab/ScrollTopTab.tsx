/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, memo, useEffect, useState } from 'react';
import { FlexTheme, TabTheme, ViewportTheme } from '@/libs/themes/_theme';
import { MQ } from '@/libs/themes/_index';

// ------------------------------------------
// -------------- ScrollTopTab --------------
// ------------------------------------------
export const ScrollTopTab = memo(
  forwardRef(function ScrollTopTab({ ...props }, ref?: ForwardedRef<HTMLButtonElement>) {
    const [ScrollY, setScrollY] = useState<number>(0);

    // 스크롤 수치 감지
    const handleFollow = () => {
      setScrollY(window.pageYOffset);
    };

    // 탭 위로 핸들러
    const handleTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setScrollY(0); // ScrollY 의 값을 초기화
    };

    useEffect(() => {
      const watch = () => {
        window.addEventListener('scroll', handleFollow);
      };
      watch();
      return () => {
        window.removeEventListener('scroll', handleFollow);
      };
    }, [ScrollY]);

    return (
      <>
        {ScrollY > 100 && (
          <button
            onClick={handleTop}
            css={[
              ViewportTheme({
                zIndex: 9999,
                position: { type: 'fixed', bottom: 100, right: 20 },
                minWidth: 42,
                minHeight: 42,
              }),
              TabTheme({
                backgroundColor: '#ffffff',
                boxShadow: { x: 0, y: 3, blur: 10, color: 'rgba(0, 0, 0, 0.25)' },
                borderRadius: 1000,
              }),
              FlexTheme({ crossAlign: 'center', align: 'center' }),
              { [MQ[3]]: { bottom: 80 } },
            ]}
            ref={ref}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 16 16">
              <g id="scroll" transform="translate(-98 -931)">
                <rect
                  id="사각형_8383"
                  data-name="사각형 8383"
                  width="16"
                  height="16"
                  transform="translate(98 931)"
                  fill="none"
                />
                <g id="그룹_95636" data-name="그룹 95636" transform="translate(99 947) rotate(-90)">
                  <g id="그룹_94352" data-name="그룹 94352" transform="translate(0 0)">
                    <path
                      id="패스_86881"
                      data-name="패스 86881"
                      d="M10.448,13.759a1.055,1.055,0,0,1-1.432-.084A.983.983,0,0,1,9,12.326l3.763-4.32H.994A1,1,0,0,1,0,7a.989.989,0,0,1,.3-.7,1.007,1.007,0,0,1,.7-.284H12.7L9.14,1.692A.986.986,0,0,1,9.162.306,1.063,1.063,0,0,1,9.913,0h.005A1.115,1.115,0,0,1,10.7.36l5.03,6.054a.989.989,0,0,1,.008,1.358Z"
                      transform="translate(0 0.001)"
                      fill="#aaaaaa"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        )}
      </>
    );
  }),
);
