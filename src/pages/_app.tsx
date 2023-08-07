import type { AppProps } from "next/app";
import Layout from "@/lib/screen/Layout";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "react-query";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [client] = useState(() => new QueryClient());
  const dehydratedState = dehydrate(client);

  return (
    <QueryClientProvider client={client}>
      <Hydrate state={dehydratedState}>
        <SessionProvider session={pageProps.session} basePath="/api/auth">
          <RecoilRoot>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RecoilRoot>
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
