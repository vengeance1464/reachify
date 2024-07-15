import React from "react";

interface Props {
  // Define the props for your component here
}

const Delete: React.FC<Props> = (props) => {
  // Implement your component logic here

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        ></path>
      </svg>
    </div>
  );
};

export default Delete;
