import React, { ReactNode } from 'react';
import { NextRouter, useRouter } from 'next/router';

//components
import Header from './Header';
import BottomNaviTabBar from './BottomNaviTabBar';

//
type LayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: LayoutProps): JSX.Element {
  const router: NextRouter = useRouter();

  const errPath = router.pathname === '/404';

  return (
    <div id="layout">
      {!errPath && <Header />}
      <main>{children}</main>

      {!errPath && <BottomNaviTabBar />}
    </div>
  );
}
