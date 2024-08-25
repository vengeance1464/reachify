import { Input } from "postcss";
import { Button } from "../button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Label } from "@radix-ui/react-label";

type CardProps = {
  title: string;
  description?: React.ReactNode;
  content: React.ReactNode;
  footerContent?: React.ReactNode;
  classNames?: string;
  headerContent?: React.ReactNode;
  onClick?: () => void;
};

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  content,
  footerContent,
  classNames,
  headerContent,
  onClick,
}) => {
  return (
    <Card onClick={onClick} className={`w-[350px] ${classNames}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {headerContent}
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">{footerContent}</CardFooter>
    </Card>
  );
};

export default CardComponent;
