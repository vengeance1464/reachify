import React from "react";

type SvgProps = {
  fillColor: string;
};
const Star: React.FC<SvgProps> = ({ fillColor }) => {
  return (
    <svg
      viewBox="0 0 51 48"
      className="fill-zinc-500"
      style={{
        width: "20px",
        height: "20px",
        transition: "transform 0.2s ease-in-out 0s",
      }}
    >
      <path
        className="fill-zinc-500"
        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
        style={{
          fill: fillColor,
          transition: "fill 0.2s ease-in-out 0s;",
        }}
      ></path>
    </svg>
  );
};

export default Star;
