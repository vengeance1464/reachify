import React, { Suspense, useState } from "react";
import AuthComponent from "@/components/auth";
import Spaces from "@/components/spaces";
import ProgressLink from "@/components/progressLink";
import SkeletonLoader from "@/components/skeleton";
import { Button } from "@/components/button";
import { Link } from "react-transition-progress/next";

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
          <h1 className="text-4xl text-white mb-8">Spaces</h1>
          <Link href="/createSpace">
            <Button className="p-2" text={"  + Create Space"} />
          </Link>
        </div>

        {/* <ProgressLink href="/createSpace" /> */}
        {/* <Suspense
          fallback={
            <div className="grid grid-cols-3 gap-4">
              <SkeletonLoader />
            </div>
          }
        > */}
        <Spaces />
        {/* </Suspense> */}
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
