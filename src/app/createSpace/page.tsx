"use client";
import SpaceCard from "@/components/spaceCard";
//import { trpc } from "@/utils/trpc";
import { trpc } from "@/server/client";

const CreateSpace = () => {
  // const result = trpc.greeting.useQuery({ name: "client" });
  let { data, isLoading, isFetching } = trpc.space.getUser.useQuery();

  return (
    <div
      style={{
        backgroundColor:
          "radial-gradient(#d7e0ea 18.75%, transparent 0) 2px 2px / 10px 10px #ecf0f5",
      }}
      className="w-screen  h-screen  flex  justify-center overflow-scroll"
    >
      <SpaceCard />
    </div>
  );
};

export default CreateSpace;
