import React from "react";
import Like from "../../../../public/assets/like";

interface CollectionPreviewProps {
  // Define the props for your component here]
  spaceHeader: string;
  questions: string[];
  customMessage: string;
  spaceImageUrl?: string;
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  spaceHeader,
  questions,
  customMessage,
  spaceImageUrl,
}) => {
  // Implement your component logic here,

  return (
    <div className="max-w-md mx-auto h-3/4 p-6 bg-#fff border rounded-lg shadow-md">
      <div className="flex justify-center items-center mb-4">
        <div className="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center">
          <Like width={75} height={75} />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">{spaceHeader}</h3>
      <p className="text-center text-gray-500 mb-4">{customMessage}</p>
      <div className="border-t border-gray-200 pt-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">QUESTIONS</h4>
        <ul className="list-disc list-inside text-gray-600">
          {questions &&
            questions.length > 0 &&
            questions.map((question: any, index: number) => {
              return <li key={index}>{question.name}</li>;
            })}
        </ul>
      </div>
      <div className="flex flex-col">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Record a video
        </button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Send in text
        </button>
      </div>
    </div>
  );
};

export default CollectionPreview;
