import React, { ReactNode } from "react";
import "./globals.css";
import { TRPCProvider } from "../providers/TrpcProvider";
import AuthComponent from "@/components/auth";
import { usePathname, useRouter } from "next/navigation";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  //const pathName = usePathname();
  //console.log("Pathname", pathName);
  const unauthenticatedPaths = ["/login"];
  return (
    <html>
      <body className="bg-navy-blue">
        {/* {!unauthenticatedPaths.includes(pathName) ? (
          <TRPCProvider>
            <AuthComponent>{children}</AuthComponent>
          </TRPCProvider>
        ) : ( */}
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
};

export default Layout;
