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
import Loader from "@/components/loader";
import AuthComponent from "@/components/auth";

interface Props {
  // Define the props for your component here
}

const SpaceProduct: React.FC<Props> = async ({
  params,
}: {
  params: { spaceId: string; spaceName: string };
}) => {
  // const spaceWithReviews = await trpcClient.space.getSpaceWithReviews(
  //   params.spaceId
  // );
  // console.log("spaceWithReviews", spaceWithReviews);

  const getData = async () => {
    "use server";

    // const res = await fetch("url");
    // return await res.json();

    const response = await fetch(
      `http://${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews/${params.spaceId}`,
      {
        cache: "no-store",
        next: { tags: ["reviews"] },
      }
    ).then((res) => res.json());

    return response.data;
  };

  const spaceWithReviews = await getData();
  //revalidatePath("/");
  console.log("New data", spaceWithReviews);

  return (
    <AuthComponent>
      <div className="grid grid-cols-3">
        <div className="col-span-3   !border-y-[1px] !border-[#25282C] mb-4">
          <SpaceHeader
            spaceUrl={spaceWithReviews.spaceUrl}
            spaceHeader={params.spaceName}
            spaceId={params.spaceId}
          />
        </div>
        <Suspense fallback={<Loader />}>
          <Inbox
            spaceName={params.spaceName}
            spaceId={params.spaceId}
            reviews={spaceWithReviews.reviews}
          />
        </Suspense>
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
    </AuthComponent>
  );
};

export default SpaceProduct;
