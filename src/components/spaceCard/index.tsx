"use client";

import React, { useState } from "react";
import InputTextElement from "../inputElements/inputTextBox";
import InputTextArea from "../inputElements/inputTextArea";
import { useCustomForm } from "@/hooks/useFormContext";
import DraggableList from "../draggableList";
import Dropdown from "../dropdown";
import Toggle from "../toggle";
import Like from "../../../public/assets/like";
import { useFieldArray, useWatch } from "react-hook-form";
import { createSpaceAction } from "@/actions/actions";
interface Props {
  // Define your component's props here
}

type ItemType = {
  id: number;
  text: string;
  nameSuffix?: string;
};

const SpaceCard: React.FC<Props> = (props) => {
  // Implement your component's logic here

  //console.log("result", result);

  const onSubmit = (data: any) => {
    console.log(data);
  };
  const formAction = (data: any) => {
    console.log("form data", data);
  };

  const { register, handleSubmit, errors, watch, control, getValues } =
    useCustomForm("space-Card");

  const { fields, append, remove } = useFieldArray<any>({
    control,
    name: "questions",
  });

  const questionsList = watch("questions");
  console.log("get values ", watch("questions"));

  // useEffect(() => {
  //   console.log("Watched fields", fields);
  // }, [fields]);
  //const questionList = watch("question");
  // console.log("questionList", questionList);

  const watchedFields = useWatch({
    control,
    name: ["space-name", "header-title", "custom-message"], // specify the names of the fields you want to watch
    // defaultValue: ["", "", ""], // optional default values
  });

  console.log("fields", watchedFields, fields);

  const [items, setItems] = useState<{
    namePrefix: string;
    items: ItemType[];
  }>({
    namePrefix: "questions",
    items: [
      {
        id: 0,
        text: "Who are you / what are you working on?",
      },
      { id: 1, text: "How has [our product / service] helped you?" },
      { id: 2, text: "What is the best thing about [our product / service]" },
    ],
  });
  return (
    // JSX markup for your component goes here

    <div className="bg-white w-3/4 grid grid-cols-2 gap-1 border rounded- shadow-md">
      <div className="max-w-md mx-auto h-3/4 p-6 bg-white border rounded-lg shadow-md">
        <div className="flex justify-center items-center mb-4">
          <div className="w-4 h-4 bg-indigo-100 rounded-full flex items-center justify-center">
            <Like />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">
          {watchedFields[1] ? watchedFields[1] : "Header goes here"}
        </h3>
        <p className="text-center text-gray-500 mb-4">
          {watchedFields[2]
            ? watchedFields[2]
            : "Your custom message goes here..."}
        </p>
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            QUESTIONS
          </h4>
          <ul className="list-disc list-inside text-gray-600">
            {questionsList &&
            questionsList.filter((question: any) => question.name.length > 0)
              .length > 0
              ? questionsList.map((question: any, index: number) => {
                  return <li key={index}>{question.name}</li>;
                })
              : items.items.map((item: ItemType) => {
                  return <li key={item.id}>{item.text}</li>;
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
      <div>
        <form action={createSpaceAction} className="flex flex-col gap-4">
          <InputTextElement
            label={"Space Name"}
            name={"space-name"}
            required
            register={register}
          />

          {/* <ImageComponent
            imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Farchive.org%2Fdetails%2FChrysanthemum_20160913&psig=AOvVaw0II3xh2LjB6PW3d88rvnTI&ust=1720724443141000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjuoJuUnYcDFQAAAAAdAAAAABAK"
            label={"Space Logo"}
            width={"35px"}
            height={"35px"}
          /> */}

          <InputTextElement
            label={"Header Title"}
            name={"header-title"}
            required
            register={register}
          />

          <InputTextArea
            label={"Your Custom Message"}
            name={"custom-message"}
            required
            register={register}
          />

          <DraggableList
            label={"Questions"}
            required
            items={items}
            register={register}
            setItems={setItems}
            onItemMove={function (dragIndex: number, hoverIndex: number): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Dropdown
            items={[
              { key: 0, text: "Text and video" },
              { key: 1, text: "Text Only" },
              { key: 2, text: "Video only" },
            ]}
            defaultKey={1}
            name={"testimonial-type"}
          />

          <Toggle name="star-ratings" label={"Collect Star Ratings"} />

          <div className="w-full px-3">
            <button
              className="btn text-white bg-[#5D5DFF] hover:bg-purple-700 w-full"
              type="submit"
            >
              Create new space
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SpaceCard;
