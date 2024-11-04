import React, { useEffect, useRef } from "react";
import BaseModal from "../modal/baseModal";
import { useOpenAI } from "@/hooks/useOpenAI";

interface Props {
  children?: any;
  position: {
    x: number;
    y: number;
  } | null;

  onClose: any;
}

const Popup: React.FC<Props> = ({ children, position, onClose }) => {
  const popupRef = useRef<any>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div
      ref={popupRef}
      className="bg-white z-1"
      style={{
        transform: `translate(${position !== null ? position?.x - 100 : 0}px, ${
          position?.y
        }px)`,
      }}
    >
      {children}
    </div>
  );
};

export default Popup;
