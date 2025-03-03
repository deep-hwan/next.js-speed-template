import { NextRouter, useRouter } from 'next/router';
import { ReactNode } from 'react';

// Components
import { Appbar } from '@/_widgets/navigator/Appbar';

//
export default function App({ children }: { children: ReactNode }): JSX.Element {
  const router: NextRouter = useRouter();

  const errPath = router.pathname === '/404';
  const noneView = router.pathname === '/form-fields';

  return (
    <Layout>
      {!errPath && <Appbar />}

      <Main>{children}</Main>
    </Layout>
  );
}

const Layout = ({ children }: { children: ReactNode }) => (
  <div id='layout' css={{ ...styleSheet, minHeight: '100vh' }}>
    {children}
  </div>
);

const Main = ({ children }: { children: ReactNode }) => (
  <main id='main_layer' css={styleSheet}>
    {children}
  </main>
);

const styleSheet = {
  width: '100%',
  height: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
} as any;
