import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

type AccordianProps = {
  trigger: ReactNode;
  content: ReactNode;
  triggerStyles?: string;
  contentStyles?: string;
};

const AccordionComponent: React.FC<AccordianProps> = ({
  trigger,
  content,
  triggerStyles,
  contentStyles,
}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className={`${triggerStyles}`}>
          {trigger}
        </AccordionTrigger>
        <AccordionContent className={`${contentStyles}`}>
          {content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
