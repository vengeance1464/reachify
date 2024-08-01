import React from "react";

interface SpaceItemProps {
  name: string;
  videosCount: number;
  textCount: number;
}

const SpaceItem: React.FC<SpaceItemProps> = ({
  name,
  videosCount,
  textCount,
}) => {
  return (
    <div className="flex border-gray-border">
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
