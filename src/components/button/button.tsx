//import { useToast } from "@/components/hooks/use-toast"
import React, { ReactNode, useState, useRef, useEffect } from "react";

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
const Button: React.FC<ButtonProps> = ({
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
      className={`btn rounded  text-white   w-40 ${
        icon && "flex items-center justify-center"
      } ${
        disabled ? "bg-[#d3d3d3]" : "bg-blue-500 hover:bg-purple-700"
      } ${className}  `}
      type={type}
      onClick={onClick}
    >
      {
        <div className="flex justify-center items-center">
          {children ? (
            children
          ) : (
            <>
              {icon} {text}
            </>
          )}
        </div>
      }
    </button>
  );
};

export default Button;
