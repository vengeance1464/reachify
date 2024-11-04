import React from "react";

const RightArrowNew = ({ onClick }: { onClick: any }) => {
  return (
    <svg
      fill="#9ba9b4"
      height="24px"
      width="24px"
      version="1.1"
      id="Layer_1"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          id="XMLID_2_"
          d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M225.606,175.605 l-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396 l-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998 c2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z"
        ></path>{" "}
      </g>
    </svg>
  );
};

export default RightArrowNew;
