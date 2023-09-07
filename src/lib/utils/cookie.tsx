import { type } from 'os';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

/**
 *
 * @param {*} name 쿠키의 키
 * @param {*} value 쿠키의 값
 * @param {*} options
 */

type SETCOOKIE = (name: string, value: string, option: any) => void;

export const setCookie: SETCOOKIE = (name, value, option) => {
  return cookies.set(name, value, {
    path: '/',
    // domain: process.env.COOKIE_DOMAIN,
  });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  cookies.remove(name, { path: '/' });
};

// export const removeCookie = name => {
//   cookies.remove(name, { path: '/', domain: process.env.COOKIE_DOMAIN })
// }
