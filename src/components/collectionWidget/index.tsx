import React, { useEffect, useState } from "react";
import CollectionPreview from "./collectionPreview";

const CollectionWidget = ({ spaceId }) => {
  const [spaceData, setSpaceData] = useState<any>();

  useEffect(() => {
    const fetchSpaceData = async (spaceId) => {
      const response = await fetch(
        `http://127.0.0.1:3000/api/embed/${spaceId}`,
        {
          method: "GET",
          // headers: {
          //   'Access-Control-Allow-Origin': '*',
          // },
        }
      );
      const { data } = await response.json();
      console.log("Data", data);
      setSpaceData(data);
    };

    fetchSpaceData(spaceId);
  }, []);

  return (
    <div>
      {spaceData && (
        <CollectionPreview
          spaceHeader={spaceData?.headerTitle}
          questions={spaceData?.questions}
          customMessage={spaceData?.customMessage}
        />
      )}
    </div>
  );
};

export default CollectionWidget;
