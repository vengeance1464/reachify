"use client";
import React, { useEffect, useOptimistic, useRef, useState } from "react";
import InboxCard from "./inboxCard";
import Sidebar from "../sidebar";
import Circle from "../../../public/assets/circle";
import Love from "../../../public/assets/love";
import Code from "../../../public/assets/code";
import SidebarStar from "../../../public/assets/sidebarStar";
import Collecting from "../../../public/assets/collecting";
import Badge from "../modal/badgeModal";
import CollectionTutorial from "../modal/collectionTutorial";
import LayoutModal from "../modal/layoutModal";
import { TestimonialType } from "@prisma/client";
import { revalidateData } from "@/actions/actions";

interface Props {
  // Define your component's props here
  reviews: any;
  spaceId: string;
  spaceName: string;
}

const Inbox: React.FC<Props> = ({ reviews, spaceId, spaceName }) => {
  // Implement your component logic here
  // console.log("Reviews Inbox", reviews);
  const [selectedIndex, setSelectedIndex] = useState(() => {
    return reviews.length > 0 ? 0 : -1;
  });
  const [embedSelectedIndex, setEmbedSelectedIndex] = useState(() => {
    return reviews.length === 0 ? 2 : -1;
  });
  const [badgeDialog, setBadgeDialogOpen] = useState(false);
  const [collectionDialog, setCollectionDialogOpen] = useState(() => {
    return reviews.length === 0 ? true : false;
  });
  const [layoutDialog, setLayoutDialogOpen] = useState(false);

  // Implement your component logic here
  //const router = useRouter();
  //const reviews = await trpcClient.space.getAllReviews();
  //const reviews=await
  // const { spaceId } = router.query;
  // const response = await fetch(
  //   `http://localhost:3000/api/embed/reviews/${params.spaceId}`
  // ).then((res) => res.json());
  // // const { data } = await response.json();
  // console.log("Response Space Productde", response);

  useEffect(() => {
    revalidateData("reviews");
  }, [selectedIndex]);

  const clickHandler = (index: number) => {
    setSelectedIndex(index);
    setEmbedSelectedIndex(-1);
  };

  const embedClickHandler = (index: number) => {
    setEmbedSelectedIndex(index);
    if (index === 0) {
      setLayoutDialogOpen(true);
    }
    if (index === 1) {
      setBadgeDialogOpen(true);
    } else if (index === 2) {
      setCollectionDialogOpen(true);
    }
    setSelectedIndex(-1);
  };

  const inboxList = [
    { text: "All", icon: <Circle color="#927fbf" />, isTrigger: false },
    { text: "Video", icon: <Circle color="#f6ad55" />, isTrigger: false },
    { text: "Text", icon: <Circle color="#1da1f2" />, isTrigger: false },
    { text: "Archived", icon: <Circle color="#4b5563" />, isTrigger: false },
    { text: "Liked", icon: <Circle color="#ec625f" />, isTrigger: false },
  ];

  const embedList = [
    {
      text: "Wall Of Love",
      icon: <Love strokeColor="#fff" />,
      isTrigger: false,
    },
    // { text: "Single testimonial", icon: <Code />, isTrigger: false },
    { text: "Badge", icon: <SidebarStar />, isTrigger: false },
    { text: "Collecting Widget", icon: <Collecting />, isTrigger: false },
  ];

  const menuLists = [
    {
      listTitle: "INBOX",
      menuItems: inboxList,
      clickHandler,
      isActive: (index: number, title: string) =>
        index === selectedIndex && title === "INBOX",
    },
    {
      listTitle: "EMBED",
      menuItems: embedList,
      clickHandler: embedClickHandler,
      isActive: (index: number, title: string) =>
        index === embedSelectedIndex && title === "EMBED",
    },
  ];

  const filteredReviews = reviews.filter((review: any) => {
    if (selectedIndex !== -1) {
      if (selectedIndex === 0) {
        return true;
      } else if (selectedIndex === 1) {
        return review.type === TestimonialType.VIDEO;
      } else if (selectedIndex === 3) {
        console.log("selected", selectedIndex);
        return review.isArchived === true;
      } else if (selectedIndex === 4) {
        return review.isArchived === false;
      } else {
        return (
          review.type.toLowerCase() ===
          inboxList[selectedIndex].text.toLowerCase()
        );
      }
    } else return false;
  });

  return (
    // JSX code for your component's UI goes here
    <>
      <Sidebar menuLists={menuLists} />
      <div className="col-span-2 flex flex-col items-center gap-1">
        <>
          {filteredReviews &&
            filteredReviews.length > 0 &&
            filteredReviews.map((review: any, index: number) => {
              //   <InboxCard review={review} />;
              return <InboxCard key={review} review={review} />;
            })}
        </>
      </div>
      {
        <Badge
          setOpen={setBadgeDialogOpen}
          reviewRatings={reviews}
          open={badgeDialog}
        />
      }
      {
        <CollectionTutorial
          spaceId={spaceId}
          spaceName={spaceName}
          open={collectionDialog}
          setOpen={setCollectionDialogOpen}
        />
      }
      {
        <LayoutModal
          spaceId={spaceId}
          open={layoutDialog}
          setOpen={setLayoutDialogOpen}
        />
      }
    </>
  );
};

export default Inbox;
