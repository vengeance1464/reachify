"use client";
import { useToast } from "@/hooks/use-toast";
//import { useToast } from "@/components/hooks/use-toast"
import React, { ReactNode, useState, useRef, useEffect } from "react";
import { useFormStatus } from "react-dom";

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  formAction?: (formData: FormData) => void;
  showLoader?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  showToastOnComplete?: boolean;
  toastTitle?: string;
  toastDescription?: string;
};
export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  icon,
  type = "button",
  formAction,
  children,
  disabled = false,
  showLoader = false,
  showToastOnComplete = false,
  toastTitle,
  toastDescription,
}) => {
  const buttonRef = useRef(null);
  const { pending } = useFormStatus();
  console.log("Pending", pending);
  const { toast } = useToast();
  const [processStarted, setProcessStarted] = useState(false);
  //const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (showToastOnComplete) {
  //     if (pending) {
  //       setProcessStarted(true);
  //     } else if (processStarted && !pending) {
  //       setProcessStarted(false);
  //       console.log("toast shown");
  //       toast({
  //         title: toastTitle,
  //         description: toastDescription,
  //       });
  //     }
  //   }
  // }, [pending]);
  const animationClassname =
    showLoader && !disabled
      ? `relative px-6 py-3 text-white text-base font-medium bg-blue-500 rounded-md focus:outline-none flex justify-center items-center ${
          pending ? "cursor-not-allowed opacity-75" : ""
        }`
      : "";

  // useEffect(()=>{

  // },[])
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
          {children ? (
            children
          ) : (
            <>
              {icon} {text}
            </>
          )}
        </div>
      )}
    </button>
  );
};
