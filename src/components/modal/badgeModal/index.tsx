import React from "react";
import BaseModal from "../baseModal";
import { Ratings } from "@/components/reviewStars";
import Typography from "@/components/typography";

interface Props {
  // Define the props for your component here
  reviewRatings: number[];
}

const Badge: React.FC<Props> = ({ reviewRatings }) => {
  // Implement your component logic here
  const avgRating =
    reviewRatings.reduce((accum, curr) => {
      return accum + curr;
    }, 0) / reviewRatings.length;

  const fullStarsRating = reviewRatings.filter((item) => item === 5).length;

  return (
    <BaseModal trigger={"Open"} title={"Embed a Badge"}>
      {
        <Ratings isStatic>
          <Typography
            type={"h4"}
            text={`5/5 from ${fullStarsRating} reviews`}
          />
        </Ratings>
      }
    </BaseModal>
  );
};

export default Badge;
