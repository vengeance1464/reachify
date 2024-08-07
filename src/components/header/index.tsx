import React, { ReactNode } from "react";

interface HeaderProps {
  title: string;
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <div className="flex items-center bg-navy-blue w-screen fixed top-0">
      {children}
      <h1 className="text-white">{title}</h1>
    </div>
  );
};

export default Header;
