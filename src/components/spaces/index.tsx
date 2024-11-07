//"use client";
import { trpc } from "@/server/client";
import React from "react";
import SpaceItem from "../spaceItem";
import { trpcClient } from "@/server";
import CardComponent from "../card";
import { Link } from "react-transition-progress/next";
//import Link from "next/link";

const Spaces: React.FC = async () => {
  const spaces = await trpcClient.space.getAllSpaces();

  console.log("res received", spaces);

  return (
    <div className="grid grid-cols-3 gap-4">
      {spaces &&
        spaces.length > 0 &&
        spaces.map((space: any, index: number) => {
          return (
            <Link key={space} href={`/products/${space.id}/${space.spaceName}`}>
              <CardComponent
                key={space}
                classNames="bg-[#25282C] border-[#33363A]"
                content={
                  <SpaceItem
                    imageUrl={space.spaceUrl ? space.spaceUrl : ""}
                    videosCount={0}
                    textReviewCount={space.textReviewCount}
                    name={space.spaceName}
                  />
                }
                title={""}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default Spaces;
