import Card from "@/components/card";
import { Ratings } from "@/components/reviewStars";

type TestimonialCardProps = {
  review: {
    name: string;
    email: string;
    testimonialText: string;
    rating: number;
    createdAt: any;
  };
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ review }) => {
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

  return (
    <Card
      title={review.name}
      footerContent={
        <div>{review.createdAt !== null ? review.createdAt : ""}</div>
      }
      content={content()}
    />
  );
};

export default TestimonialCard;
