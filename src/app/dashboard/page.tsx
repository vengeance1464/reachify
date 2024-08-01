"use client";
import SpaceItem from "@/components/spaceItem";
import { trpc } from "@/server/client";
import React, { useState } from "react";
import Link from "next/link";

interface Props {
  name: string;
}

const Dashboard: React.FC<Props> = () => {
  //const [spaces, setSpaces] = useState([]);
  const { data: spaces, error, isLoading } = trpc.space.getAllSpaces.useQuery();
  // setSpaces(data);
  console.log("Data", spaces);
  return (
    <div className="p-8">
      <div className=" flex justify-between">
        <h1 className="text-4xl text-white">Spaces</h1>
        <button className="bg-white text-black">
          <Link href="/createSpace">+ Create Space</Link>{" "}
        </button>
      </div>
      {spaces &&
        spaces.length > 0 &&
        spaces.map((space: any) => {
          return (
            <SpaceItem videosCount={0} textCount={0} name={space.spaceName} />
          );
        })}
    </div>
  );
};

export default Dashboard;
