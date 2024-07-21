import React, { ReactNode } from "react";
import "./styles/globals.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
