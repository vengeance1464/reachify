import React, { useState } from "react";
import AuthComponent from "@/components/auth";
import CollectionTutorial from "@/components/modal/collectionTutorial";

interface Props {
  name: string;
}

const ReviewPage: React.FC<Props> = () => {
  //const [spaces, setSpaces] = useState([]);

  // setSpaces(data);
  return (
    <AuthComponent>
      <CollectionTutorial />
      {/* <ReviewForm /> */}
    </AuthComponent>
  );
};

export default ReviewPage;
