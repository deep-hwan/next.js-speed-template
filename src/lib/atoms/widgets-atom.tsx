import { atom } from "recoil";

// 메뉴 드로어
export const drawerAtom = atom<boolean>({
  key: "drawer",
  default: false,
});
