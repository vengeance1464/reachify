//"use client";
import { trpc } from "@/server/client";
import React from "react";
import SpaceItem from "../spaceItem";
import { trpcClient } from "@/server";

const Spaces: React.FC = async () => {
  const spaces = await trpcClient.space.getAllSpaces();
  console.log("res received", spaces);

  return (
    <>
      {spaces &&
        spaces.length > 0 &&
        spaces.map((space: any) => {
          return (
            <SpaceItem videosCount={0} textCount={0} name={space.spaceName} />
          );
        })}
    </>
  );
};

export default Spaces;
