import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface ImageElementProps {
  src?: string;
  alt: string;
  label: string;
  required: boolean;
  classes?: string;
  onChange?: (event: any) => void;
}

const ImageElement: React.FC<ImageElementProps> = ({
  src,
  alt,
  label,
  required,
  classes,
  onChange,
}) => {
  const uploadRef = useRef<any>(null);
  useEffect(() => {
    console.log("upload ref", uploadRef);
  }, []);
  return (
    <div className="flex flex-col">
      {label && (
        <div className="flex">
          <label className="text-gray-700">{label}</label>
          {required && <span className="text-red-600">*</span>}
        </div>
      )}
      <div className="flex">
        {src && src.length > 0 ? (
          <Image className={classes} src={src} alt={alt} />
        ) : (
          <div className={classes}></div>
        )}
        <button
          onClick={(event) => {
            event.stopPropagation();

            if (uploadRef.current) {
              uploadRef.current.click();
            }
          }}
        >
          Change
        </button>
        <input
          ref={uploadRef}
          className="hidden"
          type="file"
          id="imageUpload"
          onChange={onChange}
          accept="image/*"
          //onChange={handleImageUpload}
        />
      </div>
    </div>
  );
};

export default ImageElement;
