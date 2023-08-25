import React, { ReactNode } from "react";
import { NextRouter, useRouter } from "next/router";
import Header from "../components/common/Header";

import { BottomNavBar } from "../components/common/BottomNavBar";

//
type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  const router: NextRouter = useRouter();

  const errPath = router.pathname === "/404";

  return (
    <div id="layout">
      {!errPath && <Header />}
      <main>{children}</main>

      <BottomNavBar />
    </div>
  );
}
