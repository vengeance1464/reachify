import React from "react";
import Image from "next/image";
import Typography from "../typography";
import { Button } from "../ui/button";

type HeaderProps = {
  spaceHeader: string;
  spaceId: string;
  spaceUrl?: string;
};
const SpaceHeader: React.FC<HeaderProps> = ({
  spaceHeader,
  spaceId,
  spaceUrl,
}) => {
  return (
    <div className="flex gap-3 p-8 border-red-500 ">
      {spaceUrl && <Image width={50} height={50} src={spaceUrl} alt={""} />}
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <Typography classes="text-grayText" type={"h1"} text={spaceHeader} />
          {/* <Typography
            classes="text-grayText"
            type={"p"}
            text={`Space ID: ${spaceId}`}
          /> */}
        </div>
        {/* <Button className="bg-white text-black">Edit Space</Button> */}
      </div>
    </div>
  );
};

export default SpaceHeader;
