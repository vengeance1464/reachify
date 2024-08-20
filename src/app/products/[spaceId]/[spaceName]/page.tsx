import React, { Suspense } from "react";
import Sidebar from "@/components/sidebar";
import SpaceHeader from "@/components/space-header";
import { useRouter } from "next/router";
import { trpcClient } from "@/server";
import Inbox from "@/components/inbox";
import { revalidatePath } from "next/cache";
import InboxCard from "@/components/inbox/inboxCard";
import Circle from "../../../../../public/assets/circle";
import Love from "../../../../../public/assets/love";
import Code from "../../../../../public/assets/code";
import Collecting from "../../../../../public/assets/collecting";
import SidebarStar from "../../../../../public/assets/sidebarStar";

interface Props {
  // Define the props for your component here
}

const SpaceProduct: React.FC<Props> = async ({
  params,
}: {
  params: { spaceId: string; spaceName: string };
}) => {
  const getData = async () => {
    "use server";

    // const res = await fetch("url");
    // return await res.json();

    const response = await fetch(
      `http://localhost:3000/api/embed/reviews/${params.spaceId}`,
      {
        cache: "no-store",
      }
    ).then((res) => res.json());

    return response.data;
  };

  const data = await getData();
  //revalidatePath("/");
  console.log("New data", data);

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-3 ">
        <SpaceHeader spaceHeader={params.spaceName} spaceId={params.spaceId} />
      </div>
      <Inbox reviews={data} />
      {/* <Sidebar menuLists={menuLists} />
      <div className="col-span-2 flex flex-col items-center gap-2">
        <>
          {data.map((review: any) => {
            //   <InboxCard review={review} />;
            return <InboxCard review={review} />;
          })}
        </>
      </div> */}
    </div>
  );
};

export default SpaceProduct;
