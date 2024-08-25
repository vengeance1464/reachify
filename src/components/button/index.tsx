import React, { ReactNode } from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  className: string;
  icon?: ReactNode;
};
export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  icon,
}) => {
  return (
    <button
      className={`btn rounded text-white bg-[#5D5DFF] hover:bg-purple-700 w-40 h-8 ${
        icon && "flex items-center justify-center"
      } ${className}`}
      type="submit"
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};
