"use client";
import ReviewForm from "@/components/collectionWidget/reviewForm";
import BaseModal from "../baseModal";
import { useState } from "react";
import CollectionWidget from "@/components/collectionWidget";

const CollectionTutorial = () => {
  const [openReview, setOpenReview] = useState(false);
  return (
    <BaseModal
      trigger={"Open"}
      title={"Add collecting widget to your own website"}
    >
      {openReview ? (
        <ReviewForm setOpenReview={setOpenReview} />
      ) : (
        <CollectionWidget
          setOpenReview={setOpenReview}
          spaceId={"66b8b4c89db23b2d1a47a691"}
        />
      )}
    </BaseModal>
    // <Dialog>
    //   <DialogTrigger>Open</DialogTrigger>
    //   <DialogContent>
    //     <DialogHeader>
    //       <DialogTitle>Add collecting widget to your own website</DialogTitle>
    //       <DialogDescription>
    //         <ReviewForm />
    //       </DialogDescription>
    //     </DialogHeader>
    //   </DialogContent>
    // </Dialog>
  );
};

export default CollectionTutorial;
