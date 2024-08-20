import React from "react";

interface SidebarButtonProps {
  // Define the props for your component here
  children: React.ReactNode;
  isActive: boolean;
  clickHandler: (event: any) => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  children,
  isActive,
  clickHandler,
}) => {
  // Implement your component logic here

  return (
    // JSX code for your component's UI goes here
    <button
      onClick={clickHandler}
      className={`w-1/2 rounded hover:bg-gray-600 ${isActive && `bg-gray-800`}`}
    >
      {children}
    </button>
  );
};

export default SidebarButton;
