import { Ratings } from "@/components/reviewStars";
import Typography from "@/components/typography";

const Badge = ({ fullStarsRating }) => {
  return (
    <>
      <Ratings isStatic>
        <Typography type={"h4"} text={`5/5 from ${fullStarsRating} reviews`} />
      </Ratings>
    </>
  );
};

export default Badge;
