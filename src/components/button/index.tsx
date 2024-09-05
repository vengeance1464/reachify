import React, { ReactNode, useState, useRef } from "react";
import { useFormStatus } from "react-dom";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  formAction?: (formData: FormData) => void;
  showLoader?: boolean;
  disabled?: boolean;
};
export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  icon,
  type = "button",
  formAction,
  disabled = false,
  showLoader = false,
}) => {
  const buttonRef = useRef(null);
  const { pending } = useFormStatus();
  console.log("Pending", pending);
  //const [loading, setLoading] = useState(false);

  const animationClassname =
    showLoader && !disabled
      ? `relative px-6 py-3 text-white text-base font-medium bg-blue-500 rounded-md focus:outline-none flex justify-center items-center ${
          pending ? "cursor-not-allowed opacity-75" : ""
        }`
      : "";

  // const handleClick = () => {
  //   console.log("Button ref", buttonRef);
  //   setLoading(true);

  //   // Simulate an API request or async action
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // Simulate a 3-second delay
  // };
  return (
    <button
      ref={buttonRef}
      disabled={disabled}
      formAction={formAction ?? formAction}
      className={`btn rounded  text-white   w-40 ${
        icon && "flex items-center justify-center"
      } ${
        disabled ? "bg-[#d3d3d3]" : "bg-blue-500 hover:bg-purple-700"
      } ${className} ${animationClassname} `}
      type={type}
      onClick={onClick}
    >
      {pending && !disabled ? (
        <div className="flex justify-center items-center space-x-2">
          <span className="bubble bg-white rounded-full w-2.5 h-2.5 animate-bubble1"></span>
          <span className="bubble bg-white rounded-full w-2.5 h-2.5 animate-bubble2"></span>
          <span className="bubble bg-white rounded-full w-2.5 h-2.5 animate-bubble3"></span>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          {icon}
          {text}
        </div>
      )}
    </button>
  );
};
