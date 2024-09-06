import React from "react";

interface ToastProps {
  message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <div className="toast">
      <span>{message}</span>
    </div>
  );
};

export default Toast;
