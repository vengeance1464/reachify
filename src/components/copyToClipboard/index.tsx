import React, { useState } from "react";
import { Button } from "../button";

type ClipboardProps = {
  textToCopy: string;
  isCopied: boolean;
  setIsCopied: (isCopied: boolean) => void;
};
const CopyToClipboard: React.FC<ClipboardProps> = ({
  textToCopy,
  isCopied,
  setIsCopied,
}) => {
  //const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
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
    <div>
      <Button
        text={isCopied ? "Code Copied" : "Copy Code"}
        onClick={copyToClipboard}
      ></Button>
      {/* {copied && <p>Text copied to clipboard!</p>} */}
    </div>
  );
};

export default CopyToClipboard;
