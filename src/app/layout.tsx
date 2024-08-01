import React, { ReactNode } from "react";
import "./globals.css";
import { TRPCProvider } from "../providers/TrpcProvider";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body className="bg-navy-blue">
        {" "}
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
};

export default Layout;
