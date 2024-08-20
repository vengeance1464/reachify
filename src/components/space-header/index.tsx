import React from "react";
import Image from "next/image";
import Typography from "../typography";
import { Button } from "../ui/button";

type HeaderProps = {
  spaceHeader: string;
  spaceId: string;
};
const SpaceHeader: React.FC<HeaderProps> = ({ spaceHeader, spaceId }) => {
  return (
    <div className="flex p-8  border-6 border-b-indigo-500">
      <Image src={""} alt={""} />
      <div className="flex justify-between w-full">
        <div>
          <Typography classes="text-grayText" type={"h1"} text={spaceHeader} />
        </div>
        <Button className="bg-white text-black">Edit Space</Button>
      </div>
    </div>
  );
};

export default SpaceHeader;
