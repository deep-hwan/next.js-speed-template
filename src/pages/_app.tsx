import "@/styles/globals.css";
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
} from "@tanstack/react-query";

//
export default function App({ Component, pageProps }: AppProps) {
  const [client] = useState(() => new QueryClient());
  const queryClient = new QueryClient();
  const dehydratedState = dehydrate(queryClient);

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
