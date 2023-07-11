import React, { ReactNode } from "react";
import Header from "../components/common/Header";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
    </div>
  );
}
