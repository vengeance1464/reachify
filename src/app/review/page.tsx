import React, { useState } from "react";
import AuthComponent from "@/components/auth";
import CollectionTutorial from "@/components/modal/collectionTutorial";
import Badge from "@/components/modal/badgeModal";

interface Props {
  name: string;
}

const ReviewPage: React.FC<Props> = () => {
  //const [spaces, setSpaces] = useState([]);

  // setSpaces(data);
  return (
    // <AuthComponent>
    <Badge reviewRatings={[5, 4, 3]} />
    /* <ReviewForm /> */
    // </AuthComponent>
  );
};

export default ReviewPage;
