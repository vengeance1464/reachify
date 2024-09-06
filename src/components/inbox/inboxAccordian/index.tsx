"use client";
import AccordionComponent from "@/components/accordians";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
//import AccordianContent from "./content";
import AIIcon from "../../../../public/assets/ai";
import Delete from "../../../../public/assets/delete";
import { Button } from "@/components/button";
import { deleteSpaceReview, revalidateData } from "../../../actions/actions";
import { useToast } from "@/hooks/use-toast";

interface InboxAccordionProps {
  // Add any props you need here
  reviewId: string;
}

const InboxAccordion: React.FC<InboxAccordionProps> = ({
  /* destructure props here */
  reviewId,
}) => {
  const [deleteResponse, deleteFormAction] = useFormState(
    deleteSpaceReview.bind(null, reviewId),
    false
  );

  console.log("Delete Response", deleteResponse);
  const menuTiles = [
    {
      text: "AI",
      icon: <AIIcon />,
    },
    {
      text: "Delete",
      icon: <Delete />,
      action: deleteFormAction,
    },
  ];

  const { toast } = useToast();
  // Add your component logic here

  const showToast = () => {
    toast({
      title: "Review Deleted !",
      description: "Review has been deleted successfully",
    });
  };

  useEffect(() => {
    if (deleteResponse) {
      setTimeout(() => {
        showToast();
      }, 1000);
      revalidateData("reviews");
    }
  }, [deleteResponse]);

  return (
    <AccordionComponent
      triggerStyles="text-[#D9E3EA]"
      trigger={""}
      content={
        <div className="flex items-center gap-2">
          {menuTiles.map((tile, index) => (
            <form>
              <Button
                formAction={tile.action}
                className="!bg-transparent !w-fit"
                type="submit"
                // showToastOnComplete
                // toastTitle="Review Deleted !"
                // toastDescription="Review has been deleted successfully"
                //formAction={tile.action?.bind(null, reviewId)}
              >
                <div className="flex text-[#D9E3EA]">
                  {tile.icon}
                  {tile.text}
                </div>
              </Button>
            </form>
          ))}
        </div>
      }
    />
  );
};

export default InboxAccordion;
