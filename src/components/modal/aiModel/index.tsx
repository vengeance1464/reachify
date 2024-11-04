import Typography from "@/components/typography";
import BaseModal from "../baseModal";
import { useOpenAI } from "@/hooks/useOpenAI";
import { Button } from "@/components/button";
import { useEffect } from "react";
import { generateEmphasizePropmt } from "@/lib/utils";
import { useFormState } from "react-dom";
import { emphasizeReview } from "@/actions/actions";
//import Form from "next/form";

const HighlightAIModal = ({ reviewId, reviewText, open, setOpen }) => {
  const { response, submitPrompt } = useOpenAI();
  const [updateReviewResponse, updateReviewFormAction] = useFormState(
    emphasizeReview.bind(
      null,
      reviewId,
      response && response !== null && response.hasOwnProperty("review")
        ? (response.review as any)
        : null
    ),
    null
  );

  useEffect(() => {
    if (updateReviewResponse !== null) {
      setOpen(false);
    }
  }, [updateReviewResponse]);

  console.log("updateReviewResponse", updateReviewResponse);

  useEffect(() => {
    submitPrompt([generateEmphasizePropmt(reviewText)]);
  }, []);

  return (
    <BaseModal
      setOpen={setOpen}
      open={open}
      title={<Typography type={"h2"} text={"AI Emphasize Text"} />}
    >
      <div
        dangerouslySetInnerHTML={{
          __html:
            response && response !== null && response.hasOwnProperty("review")
              ? (response.review as any)
              : null,
        }}
      />
      <form action={updateReviewFormAction}>
        <div className="flex justify-center gap-1">
          <Button
            text={"Close"}
            className="w-6/12 !h-9 !bg-[#fff] !text-black border-solid border-2 border-grayText"
            onClick={() => {
              setOpen(false);
            }}
          ></Button>
          {/* <Button
          text={"Copy Code"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        ></Button> */}

          <Button
            showLoader
            className="!w-6/12 !h-9"
            type="submit"
            text="Continue"
          />
        </div>
      </form>
    </BaseModal>
  );
};

export default HighlightAIModal;
