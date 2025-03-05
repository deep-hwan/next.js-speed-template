// ----------------------------
// -------- MediaQuery --------
// ----------------------------
export const screenSize = [1440, 1080, 780, 600, 438];
export const MQ = screenSize.map(bp => `@media (max-width: ${bp}px)`);
