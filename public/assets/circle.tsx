import React from "react";

interface CircleProps {
  color: string;
}

const Circle: React.FC<CircleProps> = ({ color }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="circle"
      role="img"
      width={12}
      height={12}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
      ></path>
    </svg>
  );
};

export default Circle;
