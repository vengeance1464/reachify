"use client";
import CardComponent from "@/components/card";
import SpaceCard from "@/components/spaceCard";
//import { trpc } from "@/utils/trpc";
import { trpc } from "@/server/client";

const CreateSpace = () => {
  // const result = trpc.greeting.useQuery({ name: "client" });

  return (
    // <div
    //   style={{
    //     backgroundColor:
    //       "radial-gradient(#d7e0ea 18.75%, transparent 0) 2px 2px / 10px 10px #ecf0f5",
    //   }}
    //   className="w-screen p-40 h-screen  flex  justify-center overflow-scroll"
    // >
    //   <Card />
    //   <SpaceCard />
    // </div>
    <CardComponent classNames="w-full" title={""} content={<SpaceCard />} />
  );
};

export default CreateSpace;
