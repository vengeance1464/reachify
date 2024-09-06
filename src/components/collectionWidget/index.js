import React, { useEffect, useState } from "react";
import CollectionPreview from "./collectionPreview";
import ReviewForm from "./reviewForm"
import Loader from "../loader";

const CollectionWidget = ({ spaceId,spaceName}) => {
  const [spaceData, setSpaceData] = useState();
  const [openReview, setOpenReview] = useState(false);

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


  const getCollectionPreview=()=>{

    if(spaceData)
    {
      return <CollectionPreview
          setOpenReview={setOpenReview}
          spaceHeader={spaceData?.headerTitle}
          questions={spaceData?.questions}
          customMessage={spaceData?.customMessage}
        />
    }

    return (
      <div className="w-full mx-auto !h-5/6  p-6 bg-#fff border rounded-lg shadow-md flex justify-center items-center">
       <Loader className="!h-fit mt-5 mb-5"/>
    </div>
    )
  }

  return (
    <>
      {/* {spaceData && (
        <CollectionPreview
          setOpenReview={setOpenReview}
          spaceHeader={spaceData?.headerTitle}
          questions={spaceData?.questions}
          customMessage={spaceData?.customMessage}
        />
      )} */}

       {openReview ? (
        <ReviewForm spaceName={spaceName} setOpenReview={setOpenReview} spaceId={spaceId}/>
      ) : (
        getCollectionPreview()
      )}
    </>
  );
};

export default CollectionWidget;
