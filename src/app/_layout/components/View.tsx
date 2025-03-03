import { MQ } from '@/libs/themes';
import { css, CSSObject, keyframes } from '@emotion/react';
import { ForwardedRef, forwardRef } from 'react';
import Footer from './Footer';

export const View = forwardRef(
  (
    {
      children,
      maxWidth = 890,
      backgroundColor,
    }: { children: React.ReactNode; maxWidth?: number; backgroundColor?: string },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const initalCSS: CSSObject = {
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: 1,
      backgroundColor: backgroundColor,
      overflow: 'hidden',
    };

    return (
      <section className='view' ref={ref} css={[initalCSS, backgroundStyle]}>
        <div className='gradient-circle circle1'></div>
        <div className='gradient-circle circle2'></div>
        <div className='gradient-circle circle3'></div>
        <div className='gradient-circle circle4'></div>
        <div className='gradient-circle circle5'></div>
        <div
          className='view-inner'
          css={{
            ...initalCSS,
            maxWidth: maxWidth,
            padding: '70px 25px 120px',

            [MQ[2]]: { padding: '30px 25px 80px' },
            [MQ[5]]: { padding: '30px 18px 80px' },
          }}
        >
          {children}
        </div>
        <Footer />
      </section>
    );
  }
);

const moveAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  20% {
    transform: translate(-100px, 75px);
  }
  40% {
    transform: translate(150px, -125px);
  }
  60% {
    transform: translate(-200px, -100px);
  }
  80% {
    transform: translate(125px, 150px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const backgroundStyle = css`
  .gradient-circle {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px); /* 블러 효과 */
    animation: ${moveAnimation} 10s ease-in-out infinite; /* 부드러운 이동 */
    mix-blend-mode: multiply; /* 색상 혼합 (흰색 배경에 적합) */
    opacity: 0.8; /* 투명도 */
  }

  .circle1 {
    width: 300px;
    height: 300px;
    top: 20%;
    left: 40%;
    background: radial-gradient(circle, #fac5c5, rgba(255, 204, 204, 0)); /* 연한 핑크 */
    animation-delay: 0s;
  }

  .circle2 {
    width: 400px;
    height: 400px;
    top: 50%;
    left: 20%;
    background: radial-gradient(circle, #b8d7f5, rgba(204, 229, 255, 0)); /* 연한 블루 */
    animation-delay: 3s;
  }

  .circle3 {
    width: 450px;
    height: 450px;
    top: 60%;
    left: 70%;
    background: radial-gradient(circle, #c6f8c6, rgba(204, 255, 204, 0)); /* 연한 민트 */
    animation-delay: 6s;
  }

  .circle4 {
    width: 350px;
    height: 350px;
    top: 30%;
    left: 10%;
    background: radial-gradient(circle, #f7d6b8, rgba(255, 229, 204, 0)); /* 연한 오렌지 */
    animation-delay: 1s;
  }
`;
