import React, { useEffect, useState } from "react";
import TestimonialCard from "./testimonialCard";
import { LayoutType, WallProps } from "./types";
import TestimonialsWallLayout from "./layout";
import Like from "../../../public/assets/like";
import Typography from "../typography";

const TestimonialsWall: React.FC<WallProps> = ({ spaceId, layoutType }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const response = await fetch(
        `http://127.0.0.1:3000/api/embed/reviews/${spaceId}`,
        {
          method: "GET",
          // headers: {
          //   'Access-Control-Allow-Origin': '*',
          // },
        }
      );
      const { data } = await response.json();
      setReviews(data);
      console.log("Reviews ", data);
    }

    fetchReviews();
  }, []);

  console.log("Reviews ", reviews.length);
  return (
    <TestimonialsWallLayout layoutType={LayoutType.CAROUSEL}>
      {reviews.length > 0 &&
        [...reviews, ...reviews, ...reviews, ...reviews].map((review: any) => (
          <TestimonialCard review={review} />
        ))}
      {/* <div className="flex justify-center items-center">
        <Like width={50} height={50} />
        <Typography type="h3" text={"Reachify"} classes="text-white" />
      </div> */}
    </TestimonialsWallLayout>
  );
};

export default TestimonialsWall;
