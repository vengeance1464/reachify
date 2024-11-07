import { Ratings } from "@/components/reviewStars";
import Typography from "@/components/typography";

const Badge = ({ fullStarsReviews, totalFullReviews }) => {
  return (
    <>
      <Ratings isStatic>
        <Typography type={"h4"} text={`5/5 from ${totalFullReviews} reviews`} />
      </Ratings>
    </>
  );
};

export default Badge;
