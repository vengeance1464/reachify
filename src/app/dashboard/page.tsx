import React, { Suspense, useState } from "react";
import AuthComponent from "@/components/auth";
import Spaces from "@/components/spaces";
import { Button } from "@/components/button";
import { Link } from "react-transition-progress/next";

const Dashboard: React.FC = () => {
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
