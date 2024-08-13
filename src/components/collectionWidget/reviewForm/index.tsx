import { Button } from "@/components/button";
import { InputCheckbox } from "@/components/checkbox";
import InputTextArea from "@/components/inputElements/inputTextArea";
import InputTextElement from "@/components/inputElements/inputTextBox";
import { Ratings } from "@/components/reviewStars";
import { useCustomForm } from "@/hooks/useFormContext";
import { TestimonialType } from "@prisma/client";
import React, { useEffect, useState } from "react";

interface Props {
  // Define your component's props here
  setOpenReview: (review: boolean) => void;
}

const ReviewForm: React.FC<Props> = ({ setOpenReview }) => {
  // Implement your component's logic here
  const totalStarCount = 5;

  const { register, handleSubmit, errors, watch, control, getValues } =
    useCustomForm("review-form");

  const [checked, setIsChecked] = useState(false);
  const [review, setReview] = useState<any>(null);
  const [rating, setRating] = useState(5);

  const onSubmit = (data: any) => {
    console.log("Data", data);

    setReview({ ...data, rating, type: TestimonialType.TEXT, videoLink: "" });
  };

  useEffect(() => {
    async function addReview() {
      await fetch("/api/embed/66acbb8d01328df97a7be18a", {
        method: "POST", // Specifies the HTTP method as POST
        headers: {
          "Content-Type": "application/json", // Sets the content type to JSON
        },
        body: JSON.stringify({
          ...review,
        }), // Convert your data to JSON
      });
    }
    if (review) {
      addReview();
      setReview(null);
    }
  }, [review]);

  return (
    // JSX code goes here
    // <form className="bg-#fff flex flex-col gap-4  h-100">
    <div className="bg-#fff flex flex-col gap-4  h-100">
      <div className="flex">
        <Ratings setRating={setRating} />
      </div>
      <InputTextArea register={register} name={"testimonialText"} label={""} />

      <InputTextElement
        required
        register={register}
        name={"name"}
        label={"Your Name"}
      />

      <InputTextElement
        register={register}
        required
        name={"email"}
        label={"Your Email"}
      />

      <InputCheckbox
        checked={checked}
        onChange={() => setIsChecked(!checked)}
        text={
          "I give permission to use this testimonial across social channels and other marketing efforts"
        }
      />

      <div className="flex gap-2 absolute right-0 bottom-0">
        <Button
          text={"Send"}
          onClick={() => {
            handleSubmit(onSubmit)();
            // setSendReview(true);
          }}
        />

        <Button text={"Cancel"} onClick={() => setOpenReview(false)} />
      </div>

      {/* <InputTextElement
        label={"Space Name"}
        name={"space-name"}
        required
        register={register}
      />
      <ImageElement
        src=""
        alt=""
        required
        onChange={handleImageUpload}
        classes="w-10 h-10 bg-white rounded-full"
        label="Space Logo"
      /> */}

      {/* <ImageComponent
      imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Farchive.org%2Fdetails%2FChrysanthemum_20160913&psig=AOvVaw0II3xh2LjB6PW3d88rvnTI&ust=1720724443141000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjuoJuUnYcDFQAAAAAdAAAAABAK"
      label={"Space Logo"}
      width={"35px"}
      height={"35px"}
    /> */}

      {/* <InputTextElement
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
        <form
          action={createSpaceAction}
          className="bg-#fff flex flex-col gap-4"
        >
          <button
            className="btn text-white bg-[#5D5DFF] hover:bg-purple-700 w-full"
            type="submit"
            onClick={() => setCreateSpace(true)}
          >
            Create new space
          </button>
        </form>
      </div> */}
      {/* </form> */}
    </div>
  );
};

export default ReviewForm;
