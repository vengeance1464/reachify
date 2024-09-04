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

interface InboxCardProps {
  // Define props here
  review: any;
}

const InboxCard: React.FC<InboxCardProps> = ({ review }) => {
  // const [optimisticState, applyOptimisticUpdate] = useOptimistic(
  //  //  !review.isArchived, initial base state
  //   (currentState, value) => value // optimistic update function
  // );

  const [archived, setArchived] = useState<boolean>(review.isArchived);

  // useEffect(() => {
  //   setArchived(review.isArchived);
  // }, []);

  console.log("archived", archived, review);
  // Implement component logic here

  const archiveOrUnarchive = () => {
    //console.log("Archive or Unarchive ", );
    // Apply optimistic update immediately
    // startTransition(() => {
    //   applyOptimisticUpdate(!optimisticState);
    // });

    setArchived((archived) => !archived);

    archiveOrUnarchiveReview(review.id, !archived)
      .then((res) => {
        console.log("Res promis", res);
        revalidateData("reviews");
        //revalidateTag("reviews");
      })
      .catch((err) => {
        //applyOptimisticUpdate(!optimisticState);
        setArchived((archived) => !archived);
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
      <div className="flex-col">
        <div>
          <Ratings isStatic totalStars={review.rating} />
        </div>
        <div>{review.testimonialText}</div>
      </div>
    );
  };

  const footerContent = () => {
    return (
      <div className="flex flex-col w-full">
        <div className="flex justify-between ">
          <div>
            Name:
            <div>{review.name}</div>
          </div>
          <div>
            Email:
            <div>{review.email}</div>
          </div>
          <div>
            Submitted At:
            <div>{review.createdAt}</div>
          </div>
        </div>
        <div className="self-end">
          <InboxAccordian />
        </div>
      </div>
    );
  };

  const headerContent = () => {
    return (
      <div className="flex justify-between">
        {review.type}
        {/* <div onClick={() => archiveOrUnarchive()}> */}
        <Love
          onClick={(e: any) => {
            e.stopPropagation();
            archiveOrUnarchive();
          }}
          width={24}
          height={24}
          strokeColor="rgb(248 113 113/1)"
          fillColor={!archived ? "rgb(248 113 113/1)" : undefined}
        />
        {/* </div> */}
      </div>
    );
  };

  return (
    <Card
      classNames="w-3/4"
      title={""}
      headerContent={headerContent()}
      footerContent={footerContent()}
      content={content()}
    />
  );
};

export default InboxCard;
