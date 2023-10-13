// ----------------------------
// -------- MediaQuery --------
// ----------------------------
const breakpoints = [1200, 1120, 808, 640];
export const MQ = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

// -----------------------------
// -------- Screen Size --------
// -----------------------------
export const screenSize = {
  size100: '1160px',
  size200: '1080px',
  size300: '768px',
  size400: '600px',
} as const;

// ---------------------------------
// -------- Screen Padding ---------
// ---------------------------------
export const screenPadding = {
  paddingTop: 'calc(env(safe-area-inset-top) + 60px)',
  paddingBottom: 'calc(env(safe-area-inset-bottom) + 80px)',

  [MQ[1]]: {
    paddingTop: 'calc(env(safe-area-inset-top) + 40px)',
    paddingBottom: 'calc(env(safe-area-inset-bottom) + 60px)',
  },

  [MQ[3]]: {
    paddingTop: 'calc(env(safe-area-inset-top) + 30px)',
    paddingBottom: 'calc(env(safe-area-inset-bottom) + 50px)',
  },
};
