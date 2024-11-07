import React, { useEffect, useState } from "react";
import Badge from "./badge"

const BadgeWidget = ({ totalFullReviews}) => {
//   const [spaceData, setSpaceData] = useState();

//   useEffect(() => {
//     const fetchSpaceData = async (spaceId) => {
//       const response = await fetch(
//         `http://127.0.0.1:3000/api/embed/${spaceId}`,
//         {
//           method: "GET",
//           // headers: {
//           //   'Access-Control-Allow-Origin': '*',
//           // },
//         }
//       );
//       const { data } = await response.json();
//       console.log("Data", data);
//       setSpaceData(data);
//     };

//     fetchSpaceData(spaceId);
//   }, []);

  return (
    <div>
     <Badge totalFullReviews={totalFullReviews} />
    </div>
  );
};

export default BadgeWidget;
