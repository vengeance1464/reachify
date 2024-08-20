"use client";
import React, { useOptimistic, useState } from "react";
import InboxCard from "./inboxCard";
import Sidebar from "../sidebar";
import Circle from "../../../public/assets/circle";
import Love from "../../../public/assets/love";
import Code from "../../../public/assets/code";
import SidebarStar from "../../../public/assets/sidebarStar";
import Collecting from "../../../public/assets/collecting";

interface Props {
  // Define your component's props here
  reviews: any;
}

const Inbox: React.FC<Props> = ({ reviews }) => {
  // Implement your component logic here
  // console.log("Reviews Inbox", reviews);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [embedSelectedIndex, setEmbedSelectedIndex] = useState(-1);

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

  const clickHandler = (index: number) => {
    setSelectedIndex(index);
    setEmbedSelectedIndex(-1);
  };

  const embedClickHandler = (index: number) => {
    setEmbedSelectedIndex(index);
    setSelectedIndex(-1);
  };

  const inboxList = [
    { text: "All", icon: <Circle color="#927fbf" /> },
    { text: "Video", icon: <Circle color="#f6ad55" /> },
    { text: "Text", icon: <Circle color="#1da1f2" /> },
    { text: "Archived", icon: <Circle color="#4b5563" /> },
    { text: "Liked", icon: <Circle color="#ec625f" /> },
  ];

  const embedList = [
    { text: "Wall Of Love", icon: <Love /> },
    { text: "Single testimonial", icon: <Code /> },
    { text: "Badge", icon: <SidebarStar /> },
    { text: "Collecting Widget", icon: <Collecting /> },
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
      if (selectedIndex === 3) {
        return review.isArchived;
      } else if (selectedIndex === 4) {
        return !review.isArchived;
      } else {
        return (
          review.type.toLowerCase() ===
          inboxList[selectedIndex].text.toLowerCase()
        );
      }
    } else return true;
  });
  return (
    // JSX code for your component's UI goes here
    <>
      <Sidebar menuLists={menuLists} />
      <div className="col-span-2 flex flex-col items-center gap-2">
        <>
          {filteredReviews.map((review: any) => {
            //   <InboxCard review={review} />;
            return <InboxCard review={review} />;
          })}
        </>
      </div>
    </>
  );
};

export default Inbox;
