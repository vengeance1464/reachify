import React from "react";
import Image from "next/image";

const ImageComponent: React.FC<{
  imageUrl?: string;
  label: string;
  width: string;
  height: string;
}> = ({ label, imageUrl, width, height }) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700">{label}</label>
      <div className={`rounded-full overflow-hidden w-${width} h-${height}`}>
        {imageUrl && (
          <Image src={imageUrl} alt="Image Preview" width={200} height={200} />
        )}
      </div>
    </div>
  );
};

export default ImageComponent;
