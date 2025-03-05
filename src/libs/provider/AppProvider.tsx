import { Appbar } from '@/@widgets/navigator/Appbar';
import { useRouter } from 'next/router';

//
export default function AppProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { pathname } = useRouter();

  const errPath = pathname === '/404';

  return (
    <Layout>
      {!errPath && <Appbar />}

      <Main>{children}</Main>
    </Layout>
  );
}

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div id='layout' css={{ ...styleSheet, minHeight: '100vh' }}>
    {children}
  </div>
);

const Main = ({ children }: { children: React.ReactNode }) => (
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
