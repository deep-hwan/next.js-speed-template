import React, { ReactNode } from "react";
import Header from "../components/common/Header";
import { NextRouter, useRouter } from "next/router";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  const router: NextRouter = useRouter();

  const errPath = router.pathname === "/404";

  return (
    <div className="layout">
      {!errPath && <Header />}
      <main>{children}</main>
    </div>
  );
}
