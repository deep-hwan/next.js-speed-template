import { Cookies } from 'react-cookie';

const cookies = new Cookies();

interface CookieOptions {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | 'none' | 'lax' | 'strict';
}

interface UseCookie {
  set: (name: string, value: string, options?: CookieOptions) => void;
  get: (name: string) => string | undefined;
  remove: (name: string, options?: CookieOptions) => void;
}

export const useCookie: UseCookie = {
  set: (name, value, options = {}) => {
    cookies.set(name, value, {
      path: '/',
      ...options,
    });
  },
  get: name => {
    return cookies.get(name);
  },
  remove: (name, options = {}) => {
    cookies.remove(name, {
      path: '/',
      ...options,
    });
  },
};
