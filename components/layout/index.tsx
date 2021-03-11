import React, { ReactNode } from 'react';
import Header from './main-header';

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
