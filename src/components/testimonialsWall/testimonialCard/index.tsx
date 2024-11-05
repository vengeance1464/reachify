import Card from "@/components/card";
import { Ratings } from "@/components/reviewStars";
import { format } from "date-fns";

type TestimonialCardProps = {
  review: {
    name: string;
    email: string;
    testimonialText: string;
    rating: number;
    createdAt: any;
  };
  className: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  review,
  className,
}) => {
  const content = () => {
    return (
      <div className="flex-col">
        <div>
          <Ratings isStatic totalStars={review.rating} />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: review.testimonialText,
          }}
        />
      </div>
    );
  };

  return (
    <Card
      title={review.name}
      classNames={className}
      footerContent={
        <div>
          {review.createdAt !== null
            ? format(review.createdAt, "MMM d, yyyy, h:mm:ss a")
            : ""}
        </div>
      }
      content={content()}
    />
  );
};

export default TestimonialCard;
