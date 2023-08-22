import type { AppProps } from "next/app";
import { useState } from "react";

//hooks
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "react-query";

//style
import "@/styles/globals.css";

//components
import Layout from "@/lib/screen/Layout";
import { GlobalStyles } from "@/styles/GlobalStyles";

//
export default function MyApp({ Component, pageProps }: AppProps) {
  const [client] = useState(() => new QueryClient());
  const dehydratedState = dehydrate(client);

  return (
    <QueryClientProvider client={client}>
      <Hydrate state={dehydratedState}>
        <SessionProvider session={pageProps.session} basePath="/api/auth">
          <RecoilRoot>
            <GlobalStyles />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RecoilRoot>
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
