import React, { useState } from "react";

import Badge from "@/components/modal/badgeModal";

const ReviewPage: React.FC = () => {
  //const [spaces, setSpaces] = useState([]);

  // setSpaces(data);
  return (
    // <AuthComponent>
    <Badge
      reviewRatings={[5, 4, 3]}
      open={false}
      setOpen={function (open: boolean): void {
        throw new Error("Function not implemented.");
      }}
    />
    /* <ReviewForm /> */
    // </AuthComponent>
  );
};

export default ReviewPage;
