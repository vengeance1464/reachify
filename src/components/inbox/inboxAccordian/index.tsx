import AccordionComponent from "@/components/accordians";
import React from "react";
import AccordianContent from "./content";

interface InboxAccordionProps {
  // Add any props you need here
}

const InboxAccordion: React.FC<InboxAccordionProps> = (
  {
    /* destructure props here */
  }
) => {
  // Add your component logic here

  return (
    <AccordionComponent
      triggerStyles="text-[#D9E3EA]"
      trigger={""}
      content={<AccordianContent />}
    />
  );
};

export default InboxAccordion;
