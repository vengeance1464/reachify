import React, { useState } from "react";
import Link from "next/link";
import AuthComponent from "@/components/auth";
import Spaces from "@/components/spaces";
import ProgressLink from "@/components/progressLink";

interface Props {
  name: string;
}

const Dashboard: React.FC<Props> = () => {
  //const [spaces, setSpaces] = useState([]);

  // setSpaces(data);
  return (
    <AuthComponent>
      <div className="p-20">
        <div className=" flex justify-between">
          <h1 className="text-4xl text-white">Spaces</h1>
          <button className="bg-white text-black">
            <Link href="/createSpace">+ Create Space</Link>{" "}
          </button>
        </div>

        {/* <ProgressLink href="/createSpace" /> */}
        <Spaces />
        {/* {spaces &&
          spaces.length > 0 &&
          spaces.map((space: any) => {
            return (
              <SpaceItem videosCount={0} textCount={0} name={space.spaceName} />
            );
          })} */}
      </div>
    </AuthComponent>
  );
};

export default Dashboard;
