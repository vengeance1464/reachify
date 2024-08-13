import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
};
export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="btn text-white bg-[#5D5DFF] hover:bg-purple-700 w-40 h-8"
      type="submit"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
