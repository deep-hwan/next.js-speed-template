/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

export const LoadingSpinner = () => {
  const circleStyles = (color: string) =>
    css({
      position: 'absolute',
      width: 20,
      height: 20,
      borderRadius: '50%',
      backgroundColor: color,
    });

  const containerStyles = css({
    position: 'relative',
    width: 70,
    height: 70,
    overflow: 'hidden',
  });

  const colors = ['#FFB7B8', '#a8dbfb', '#AADCC1', '#aaacdc', '#f9d2a3'];

  const animations = [...Array(5)].map((_, index) => {
    const move = keyframes`
      0% { 
        transform: translate(${Math.random() * 50}px, ${Math.random() * 50}px) scale(${Math.random() * 0.3 + 0.7}); 
      }
      25% { 
        transform: translate(${Math.random() * 50}px, ${Math.random() * 50}px) scale(${Math.random() * 0.25 + 0.75}); 
      }
      50% { 
        transform: translate(${Math.random() * 50}px, ${Math.random() * 50}px) scale(${Math.random() * 0.35 + 0.65}); 
      }
      75% { 
        transform: translate(${Math.random() * 50}px, ${Math.random() * 50}px) scale(${Math.random() * 0.2 + 0.8}); 
      }
      100% { 
        transform: translate(${Math.random() * 50}px, ${Math.random() * 50}px) scale(${Math.random() * 0.3 + 0.7}); 
      }
    `;
    return css`
      animation: ${move} ${Math.random() * 2 + 3}s infinite alternate ease-in-out;
    `;
  });

  return (
    <div css={containerStyles}>
      {[...Array(5)].map((_, index) => (
        <div key={index} css={[circleStyles(colors[index]), animations[index]]} />
      ))}
    </div>
  );
};

// Add this CSS to your global styles or a CSS-in-JS solution
const styles = `
  ${[...Array(5)]
    .map(
      (_, index) => `
    @keyframes move-${index} {
      0% {
        transform: translate(${Math.random() * 60}px, ${Math.random() * 60}px);
      }
      100% {
        transform: translate(${Math.random() * 60}px, ${Math.random() * 60}px);
      }
    }
  `
    )
    .join('')}
`;
