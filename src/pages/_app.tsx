import type { AppProps } from 'next/app';
import { useState } from 'react';

//hooks
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';
import { dehydrate, Hydrate, QueryClient, QueryClientProvider } from 'react-query';

//style
import '@/styles/globals.css';

//components
import AppLayout from '@/libs/core/App';

//
export default function MyApp({ Component, pageProps }: AppProps) {
  const [client] = useState(() => new QueryClient());
  const dehydratedState = dehydrate(client);

  return (
    <QueryClientProvider client={client}>
      <Hydrate state={dehydratedState}>
        <SessionProvider session={pageProps.session} basePath="/api/auth">
          <RecoilRoot>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </RecoilRoot>
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
