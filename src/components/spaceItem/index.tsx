import React from "react";
import Image from "next/image";

interface SpaceItemProps {
  name: string;
  videosCount: number;
  textCount: number;
  imageUrl: string;
  onClick?: () => void;
}

const SpaceItem: React.FC<SpaceItemProps> = ({
  name,
  videosCount,
  textCount,
  imageUrl,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="flex  items-center gap-5">
      {imageUrl && imageUrl != "" && (
        <Image
          className="w-[40px]! h-[40px]!"
          width={40}
          height={40}
          src={imageUrl}
          alt={name}
        />
      )}
      <div className="flex-col">
        <div className="text-2xl text-white">{name}</div>
        <div className="flex gap-1">
          <div className="text-white">Video : {videosCount}</div>
          <div className="text-white">Text : {textCount}</div>
        </div>
      </div>
    </div>
  );
};

export default SpaceItem;
