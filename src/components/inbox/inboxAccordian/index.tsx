"use client";
import AccordionComponent from "@/components/accordians";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
//import AccordianContent from "./content";
import AIIcon from "../../../../public/assets/ai";
import Delete from "../../../../public/assets/delete";
import { Button } from "@/components/button";
import { deleteSpaceReview, revalidateData } from "../../../actions/actions";
import { useToast } from "@/hooks/use-toast";
import Popup from "@/components/popup";
import { useOpenAI } from "@/hooks/useOpenAI";
import { generateEmphasizePropmt } from "@/lib/utils";
import HighlightAIModal from "@/components/modal/aiModel";

interface InboxAccordionProps {
  // Add any props you need here
  reviewId: string;
  reviewText: string;
}

const InboxAccordion: React.FC<InboxAccordionProps> = ({
  /* destructure props here */
  reviewId,
  reviewText,
}) => {
  const [deleteResponse, deleteFormAction] = useFormState(
    deleteSpaceReview.bind(null, reviewId),
    false
  );
  const aiIconRef = useRef<any>(null);

  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const [openHighlightModal, setOpenHighlightModel] = useState(false);

  useEffect(() => {
    if (aiIconRef.current) {
      const rect = aiIconRef.current.getBoundingClientRect();
      setPopupPosition({ x: rect.x, y: rect.y });
    }
  }, []);

  console.log("Delete Response", deleteResponse);
  const menuTiles = [
    {
      text: "AI",
      icon: (
        <div
          onClick={() => {
            setShowPopup(true);
          }}
        >
          <AIIcon />
        </div>
      ),
      ref: aiIconRef,
      action: null,
    },
    {
      text: "Delete",
      icon: <Delete />,
      action: deleteFormAction,
      ref: null,
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
    <div>
      <AccordionComponent
        triggerStyles="text-[#D9E3EA]"
        trigger={""}
        content={
          <div className="flex items-center gap-2">
            {menuTiles.map((tile, index) => {
              return (
                <>
                  {tile.action !== null ? (
                    <form>
                      <Button
                        formAction={
                          tile.action !== null ? tile.action : undefined
                        }
                        className="!bg-transparent !w-fit"
                        type="submit"
                        onClick={() => {
                          console.log("ref", aiIconRef.current);
                        }}

                        // showToastOnComplete
                        // toastTitle="Review Deleted !"
                        // toastDescription="Review has been deleted successfully"
                        //formAction={tile.action?.bind(null, reviewId)}
                      >
                        <div ref={tile.ref} className="flex text-[#D9E3EA]">
                          {tile.icon}
                          {tile.text}
                        </div>
                      </Button>
                    </form>
                  ) : (
                    <div
                      onClick={() => {
                        console.log("ref", aiIconRef.current);
                      }}
                      ref={tile.ref}
                    >
                      <Button
                        formAction={undefined}
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
                    </div>
                  )}
                  ;
                </>
              );
            })}
          </div>
        }
      />
      {showPopup && (
        <Popup
          onClose={() => {
            setShowPopup(false);
          }}
          position={popupPosition}
        >
          <div className="flex flex-col">
            <div
              onClick={() => {
                setOpenHighlightModel(true);
              }}
            >
              HightlightText
            </div>
            <div>Generate Case Study</div>
          </div>
        </Popup>
      )}
      {openHighlightModal && (
        <HighlightAIModal
          reviewId={reviewId}
          reviewText={reviewText}
          open={openHighlightModal}
          setOpen={setOpenHighlightModel}
        />
      )}
    </div>
  );
};

export default InboxAccordion;
