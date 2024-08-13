"use client";
import { ReactNode, useState } from "react";
import Star from "../../../public/assets/star";

interface StarProps {
  totalStars?: number;
  isStatic?: boolean;
  setRating?: (rating: number) => void;
}
export const Ratings: React.FC<StarProps> = ({
  totalStars = 5,
  setRating,
  isStatic = false,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [isHoverState, setIsHoverState] = useState(false);

  const getRatingsComponent = () => {
    const elements: ReactNode[] = [];
    let indexToCheck = -1;

    if (clickedIndex !== -1) {
      indexToCheck = clickedIndex;
      console.log("indexToCheck clicked", indexToCheck);
    } else if (hoveredIndex !== -1) {
      indexToCheck = hoveredIndex;
      console.log("indexToCheck", indexToCheck);
    }

    for (let i = 0; i < totalStars; i++) {
      //   if (i > indexToCheck) {
      elements.push(
        <div
          onClick={(event: any) => {
            event.stopPropagation();
            if (setRating) setRating(i + 1);
            setClickedIndex(i);
          }}
          //className={`${indexToCheck <= i ? "text-gray" : "text-gold"}`}
          onMouseEnter={(event: any) => {
            event.stopPropagation();
            console.log("hovered index", i);
            setHoveredIndex(i);
            setIsHoverState(true);
          }}
          onMouseLeave={(event: any) => {
            event.stopPropagation();
            setHoveredIndex(-1);
            setIsHoverState(false);
          }}
        >
          <Star
            fillColor={`${
              hoveredIndex === -1 || hoveredIndex >= i
                ? clickedIndex !== -1 && i > clickedIndex && !isHoverState
                  ? "#8492a6"
                  : "rgb(255, 182, 33)"
                : "#8492a6"
            }`}
          />
        </div>
      );
    }

    return elements;
  };

  const getStaticRatings = () => {
    const elements: ReactNode[] = [];
    for (let i = 0; i < totalStars; i++) {
      //   if (i > indexToCheck) {
      elements.push(<Star fillColor="rgb(255, 182, 33)" />);
    }

    return elements;
  };
  return (
    <div className="flex ">
      {!isStatic ? getRatingsComponent() : getStaticRatings()}
    </div>
  );
};
