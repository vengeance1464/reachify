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
  title: string;
  children?: ReactNode;
  trigger?: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const BaseModal: React.FC<BaseModalProps> = ({
  title,
  children,
  trigger,
  open,
  setOpen,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{trigger}</DialogTrigger>

      <DialogContent className="max-w-screen-lg bg-[#fff]">
        <DialogHeader className="bg-[#fff]">
          <DialogTitle className="text-center">{title}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BaseModal;
