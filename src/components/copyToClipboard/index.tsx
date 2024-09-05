import React, { useState } from "react";
import { Button } from "../button";
import CopyIcon from "../../../public/assets/copy";
import Tick from "../../../public/assets/tick";

type ClipboardProps = {
  textToCopy: string;
  isCopied: boolean;
  setIsCopied: (isCopied: boolean) => void;
  className: string;
  copyText?: string;
};
const CopyToClipboard: React.FC<ClipboardProps> = ({
  textToCopy,
  isCopied,
  setIsCopied,
  className,
  copyText,
}) => {
  //const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    console.log("Text copied");
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        //setCopySuccess("Copied!");
      })
      .catch((err) => {
        //setCopySuccess("Failed to copy!");
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <Button
      text={isCopied ? "Copied" : copyText ?? "Copy"}
      onClick={() => copyToClipboard()}
      icon={isCopied ? <Tick /> : <CopyIcon />}
      className={className}
    ></Button>
  );
};

export default CopyToClipboard;
