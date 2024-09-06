import React from "react";
export default function Loader({ className }: { className?: string }) {
  return (
    <div className={`flex justify-center h-screen mt-5 ${className}`}>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-200"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-400"></div>
    </div>
  );
}
