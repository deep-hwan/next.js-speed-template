import 'next-auth';

declare module 'next-auth' {
  interface Session {
    refreshToken?: string;
    accessToken?: string;
  }
}
