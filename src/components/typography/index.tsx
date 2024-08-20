import React from "react";
import { TypographyH1 } from "./h1";
import { TypographyH2 } from "./h2";
import { TypographyH3 } from "./h3";
import { TypographyH4 } from "./h4";
import { TypographyP } from "./p";

interface Props {
  // Define your component's props here
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  text: string;
  classes?: string;
}

const Typography: React.FC<Props> = ({ type, text, classes }) => {
  // Implement your component logic here
  const getTypographyComponent = () => {
    switch (type) {
      case "h1":
        return <TypographyH1 text={text} classes={classes} />;

      case "h2":
        return <TypographyH2 text={text} classes={classes} />;

      case "h3":
        return <TypographyH3 text={text} classes={classes} />;

      case "h4":
        return <TypographyH4 text={text} classes={classes} />;

      default:
        return <TypographyP text={text} classes={classes} />;
    }
  };

  return getTypographyComponent();
};

export default Typography;
