import React, { useEffect, useState } from "react";
import TestimonialCard from "./testimonialCard";
import { LayoutType, WallProps } from "./types";
import TestimonialsWallLayout from "./layout";

const TestimonialsWall: React.FC<WallProps> = ({ spaceId, layoutType }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const response = await fetch(
        `http://127.0.0.1:3000/api/reviews/${spaceId}`,
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

  return (
    <TestimonialsWallLayout layoutType={LayoutType.CAROUSEL}>
      {reviews.length > 0 &&
        reviews.map((review: any) => <TestimonialCard review={review} />)}
    </TestimonialsWallLayout>
  );
};

export default TestimonialsWall;
