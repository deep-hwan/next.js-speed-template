// ----------------------------
// -------- MediaQuery --------
// ----------------------------
const breakpoints = [1200, 1080, 768, 600];
export const MQ = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

// -----------------------------
// -------- Screen Size --------
// -----------------------------
export const MediaSize = {
  s100: '1280px',
  s200: '1080px',
  s300: '768px',
  s400: '600px',
} as const;

// -------------------------------------------
// -------- Image Loading Placeholder --------
// -------------------------------------------
export const skeletonURL: string =
  'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==';
