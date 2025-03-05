import { useOpenWebBrowser } from '@/libs/hooks';
import { useScrollRestoration } from '@/libs/hooks/useScrollRestoration';
import AppProvider from '@/libs/provider/AppProvider';
import JengaProvider from '@/libs/provider/JengaProvider';
import GlobalStyles from '@/libs/themes/globalStyles';
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  useScrollRestoration(router);
  useOpenWebBrowser();

  const [client] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover'
        />
      </Head>

      <GlobalStyles />

      <QueryClientProvider client={client}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <SessionProvider session={pageProps.session} basePath='/api/auth'>
            <RecoilRoot>
              <JengaProvider>
                <AppProvider>
                  <Component {...pageProps} />
                </AppProvider>
              </JengaProvider>
            </RecoilRoot>
          </SessionProvider>
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  );
}
