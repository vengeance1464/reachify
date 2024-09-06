"use client";
import Card from "@/components/card";
import { Ratings } from "@/components/reviewStars";
import React, {
  startTransition,
  useEffect,
  useOptimistic,
  useState,
} from "react";
import InboxAccordian from "../inboxAccordian";
import Love from "../../../../public/assets/love";
import { archiveOrUnarchiveReview, revalidateData } from "@/actions/actions";
import { revalidateTag } from "next/cache";
import { format } from "date-fns";
import { useRouter } from "next/router";

interface InboxCardProps {
  // Define props here
  review: any;
}

const InboxCard: React.FC<InboxCardProps> = ({ review }) => {
  // const [optimisticState, applyOptimisticUpdate] = useOptimistic(
  //  //  !review.isArchived, initial base state
  //   (currentState, value) => value // optimistic update function
  // );

  // const [archived, setArchived] = useState<boolean>();

  // useEffect(() => {
  //   console.log("isarchived", review.isArchived);
  //   setArchived(review.isArchived);
  // }, []);
  // const router = useRouter();
  // const currentPath = router.asPath;
  // console.log("current ", currentPath);

  // useEffect(() => {
  //   setArchived(review.isArchived);
  // }, []);

  //console.log("archived", archived, review);
  // Implement component logic here

  const archiveOrUnarchive = () => {
    //console.log("Archive or Unarchive ", );
    // Apply optimistic update immediately
    // startTransition(() => {
    //   applyOptimisticUpdate(!optimisticState);
    // });

    //setArchived((archived) => !archived);

    //revalidateData("reviews");

    archiveOrUnarchiveReview(review.id, !review.isArchived)
      .then((res) => {
        console.log("Res promis", res);
        revalidateData("reviews");
        //revalidateTag("reviews");
      })
      .catch((err) => {
        //applyOptimisticUpdate(!optimisticState);
        //setArchived((archived) => !archived);
      });

    //return true;

    // Perform actual side effect (e.g., API call)
    // fetch("/api/add-item", {
    //   method: "POST",
    //   body: JSON.stringify({ item }),
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (!data.success) {
    //       // Handle error: Rollback or handle accordingly
    //     }
    //     // If success, no need to do anything, optimistic state already applied
    //   })
    //   .catch(() => {
    //     // Handle error: Rollback or handle accordingly
    //   });
  };

  // useEffect(() => {
  //   console.log("Optimistic State:", optimisticState);
  // }, [optimisticState]);

  const content = () => {
    return (
      <div className="flex-col !font-sans ">
        <div>
          <Ratings isStatic totalStars={review.rating} />
        </div>
        <div className="text-[#D9E3EA]">{review.testimonialText}</div>
      </div>
    );
  };

  const footerContent = () => {
    return (
      <div className="flex flex-col w-full !font-sans">
        <div className="flex justify-between ">
          <div className="text-[#D9E3EA] ">
            Name:
            <div>{review.name}</div>
          </div>
          <div className="text-[#D9E3EA]">
            Email:
            <div>{review.email}</div>
          </div>
          <div className="text-[#D9E3EA]">
            Submitted At:
            <div>{format(review.createdAt, "MMM d, yyyy, h:mm:ss a")}</div>
          </div>
        </div>
        <div className="self-end">
          <InboxAccordian reviewId={review.id} />
        </div>
      </div>
    );
  };

  const headerContent = () => {
    // console.log("archived header", archived);
    return (
      <div className="flex justify-between !font-sans">
        <div className="text-[#D9E3EA]">{review.type}</div>

        {/* <div onClick={() => archiveOrUnarchive()}> */}
        <Love
          onClick={(e: any) => {
            e.stopPropagation();
            archiveOrUnarchive();
          }}
          width={24}
          height={24}
          strokeColor="rgb(248 113 113/1)"
          fillColor={!review.isArchived ? "rgb(248 113 113/1)" : "none"}
        />
        {/* </div> */}
      </div>
    );
  };

  return (
    <Card
      classNames="w-3/4 bg-[#25282C] border-none"
      title={""}
      headerContent={headerContent()}
      footerContent={footerContent()}
      content={content()}
    />
  );
};

export default InboxCard;
