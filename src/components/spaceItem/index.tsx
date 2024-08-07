import React from "react";
import Image from "next/image";

interface SpaceItemProps {
  name: string;
  videosCount: number;
  textCount: number;
  imageUrl: string;
}

const SpaceItem: React.FC<SpaceItemProps> = ({
  name,
  videosCount,
  textCount,
  imageUrl,
}) => {
  return (
    <div className="flex border-gray-border">
      <Image className="w-5rem h-5rem" src={imageUrl} alt={name} />
      <div className="flex-col">
        <div className="text-2xl text-white">{name}</div>
        <div className="flex">
          <div>Video : {videosCount}</div>
          <div>Text : {textCount}</div>
        </div>
      </div>
    </div>
  );
};

export default SpaceItem;
