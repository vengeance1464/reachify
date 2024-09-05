import React from "react";
import Like from "../../../../public/assets/like";
import {Button} from "../../button";

// interface CollectionPreviewProps {
//   // Define the props for your component here]
//   spaceHeader: string;
//   questions: string[];
//   customMessage: string;
//   spaceImageUrl?: string;
// }

const CollectionPreview = ({
  spaceHeader,
  questions,
  customMessage,
  spaceImageUrl,
  setOpenReview
}) => {
  // Implement your component logic here,
  return (
    // <div className="mx-auto h-3/4 p-6 bg-#fff border-2  rounded-lg shadow-md w-full flex flex-col justify-evenly">
    //   <div className="flex justify-center items-center mb-4">
    //     <div className="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center">
    //       {/* <Like width={75} height={75} /> */}
    //     </div>
    //   </div>
    //   <h3 className="text-xl font-semibold text-center mb-2">{spaceHeader}</h3>
    //   <p className="text-center text-gray-500 mb-4">{customMessage}</p>
    //   <div className="border-t border-gray-200 pt-4">
    //     <h4 className="text-sm font-semibold text-gray-700 mb-2">QUESTIONS</h4>
    //     <ul className="list-disc list-inside text-black-600">
    //       {questions &&
    //         questions.length > 0 &&
    //         questions.map((question, index) => {
    //           return <li className="text-black-600" key={index}>{question}</li>;
    //         })}
    //     </ul>
    //   </div>
    //   <div className="flex flex">
    //     <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
    //       Record a video
    //     </button>
    //     <button onClick={()=>{
    //       setOpenReview(true)
    //     }} className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800">
    //       Send in text
    //     </button>
    //   </div>
    // </div>
    <div className="w-full mx-auto !h-5/6  p-6 bg-#fff border rounded-lg shadow-md flex flex-col justify-evenly">
        <div className="flex justify-center items-center mb-4">
          <div className="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center">
            <Like width={75} height={75} />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-center mb-2">
          {spaceHeader}
          </h3>
          <p className="text-center text-gray-500 mb-4">
          {customMessage}
          </p>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            QUESTIONS
          </h4>
          <ul className="list-disc list-inside text-gray-600">
          {questions &&
            questions.length > 0 &&
            questions.map((question, index) => {
              return <li className="text-black-600" key={index}>{question}</li>;
            })}
          </ul>
        </div>
        {/* <div> */}
        {/* <div className="flex flex-col"> */}
        {/* <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Record a video
            </button> */}
        <Button text="Send In Text" onClick={()=>{
          setOpenReview(true)
        }} className="!h-fit text-white px-4 py-2 rounded-md mx-auto"/>
          {/* Send in text
        </Button> */}
        {/* </div> */}
        {/* </div> */}
      </div>
  );
};

export default CollectionPreview;
