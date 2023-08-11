const breakpoints = [1200, 1120, 808, 640];

export const MQ = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const screen = {
  size100: "1160px",
  size200: "1080px",
  size300: "768px",
  size400: "600px",
} as const;
