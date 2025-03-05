type Type = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

const useSafeArea = ({ top: T, bottom: B, left: L, right: R }: Type) => {
  const top = `max(${T}px, env(safe-area-inset-top))`;
  const bottom = `max(${B}px, env(safe-area-inset-bottom))`;
  const left = `max(${L}px, env(safe-area-inset-left))`;
  const right = `max(${R}px, env(safe-area-inset-right))`;

  return { top, bottom, left, right };
};

export { useSafeArea };
