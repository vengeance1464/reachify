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
};

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  content,
  footerContent,
}) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">{footerContent}</CardFooter>
    </Card>
  );
};

export default CardComponent;
