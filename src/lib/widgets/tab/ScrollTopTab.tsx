/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

// ------------------------------------------
// -------------- ScrollTopTab --------------
// ------------------------------------------
export function ScrollTopTab() {
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
        <button onClick={handleTop} css={tabStyled}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
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
                    fill="#333"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
      )}
    </>
  );
}

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const tabStyled = css`
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 100px;
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-weight: 500;
  cursor: pointer;
  z-index: 7777;
  user-select: none;
  transition: 0.3s ease-in-out;

  svg {
    width: 20px;
  }

  @media (max-width: 600px) {
    width: 42px;
    height: 42px;

    svg {
      width: 18px;
    }
  }
`;
