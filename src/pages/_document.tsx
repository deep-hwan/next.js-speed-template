import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1, viewport-fit=cover, shrink-to-fit=no"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="robots" content="index, follow" />

      <link rel="apple-touch-icon" href="/public/images/logo-192.png" />
      <link rel="apple-touch-startup-image" href="public/images/logo-192.png" />
      <link rel="icon preload" href="/favicon.ico" type="image/x-icon" />
      <link rel="manifest" href="/manifest.json" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
