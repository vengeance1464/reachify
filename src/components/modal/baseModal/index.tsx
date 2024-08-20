import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface BaseModalProps {
  trigger: ReactNode;
  title: string;
  children: ReactNode;
}

const BaseModal: React.FC<BaseModalProps> = ({ trigger, title, children }) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="bg-[#fff]">
        <DialogHeader className="bg-[#fff]">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BaseModal;
