import React from "react";
const RightArrow = ({ onClick }: { onClick: any }) => {
  return (
    <svg
      onClick={onClick}
      width={24}
      height={24}
      className="cursor-pointer w-full hover:contrast-75"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ fill: "rgb(155, 169, 180)" }}
    >
      <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"></path>
    </svg>
  );
};

export default RightArrow;
