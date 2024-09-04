import React, { ReactNode } from "react";
import "./globals.css";
import { TRPCProvider } from "../providers/TrpcProvider";
import { ProgressBar, ProgressBarProvider } from "react-transition-progress";
import AuthComponent from "@/components/auth";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/components/header";
import Like from "../../public/assets/like";

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
        <ProgressBarProvider>
          {/* I.e. using Tailwind CSS to show the progress bar with custom styling */}
          <ProgressBar className="fixed h-1 shadow-lg shadow-sky-500/20 bg-sky-500 top-0" />
          {/* <Header title="Testimonial">
          <Like width={50} height={50} />
        </Header> */}
          {/* {!unauthenticatedPaths.includes(pathName) ? (
          <TRPCProvider>
            <AuthComponent>{children}</AuthComponent>
          </TRPCProvider>
        ) : ( */}
          <TRPCProvider>{children}</TRPCProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
};

export default Layout;
