export const THIS_STATE: { [key: string]: string } = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
} as const;

export const TOKEN: { [key: string]: string } = {
  ACCESS: "name_access",
  REFRESH: "name_refresh",
} as const;

export const Media: { [key: string]: string } = {
  1160: "1160px",
  1080: "1080px",
  768: "768px",
  600: "600px",
} as const;
