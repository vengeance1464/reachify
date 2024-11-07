"use client";

import BaseModal from "../baseModal";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import CollectionWidget from "@/components/collectionWidget";
import { Button } from "@/components/button";
import CopyToClipboard from "@/components/copyToClipboard";
import Typography from "@/components/typography";

interface Props {
  // Define the props for your component here
  open: boolean;
  setOpen: (open: boolean) => void;
  spaceId: string;
  spaceName: string;
}
const CollectionTutorial: React.FC<Props> = ({
  open,
  setOpen,
  spaceId,
  spaceName,
}) => {
  const codeString = `<iframe id="collectingWidget" style="width:100vw;height:100vh;" src="https://reachify-bucker.s3.us-east-1.amazonaws.com/bundles/collection.html?spaceId=${spaceId}"/>`;
  const CodeBlock = () => {
    return (
      <SyntaxHighlighter language={"javascript"} style={tomorrow}>
        {codeString}
      </SyntaxHighlighter>
    );
  };
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsCopied(false);
    }
  }, [open]);

  return (
    <BaseModal
      open={open}
      setOpen={setOpen}
      //trigger={"Open"}
      title={
        <Typography
          type={"h2"}
          text={"Add collecting widget to your own website"}
        />
      }
    >
      {/* {openReview ? (
        <ReviewForm setOpenReview={setOpenReview} />
      ) : ( */}
      <CollectionWidget spaceName={spaceName} spaceId={spaceId} />

      <div
        style={{
          width: "800px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* <article>
          <ReactMarkdown
            escapeHtml={false}
            source={""}
            renderers={{ code: CodeBlock }}
          />
        </article>
        <SyntaxHighlighter language="javascript">
          {codeString}
        </SyntaxHighlighter> */}
        {/* <Markdown children={code} /> */}
        <CodeBlock />
      </div>

      <div className="flex justify-center gap-1">
        <Button
          text={"Close"}
          className="w-6/12 !h-9 !bg-[#fff] !text-black border-solid border-2 border-grayText"
          onClick={() => {
            setOpen(false);
          }}
        ></Button>
        {/* <Button
          text={"Copy Code"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        ></Button> */}
        <CopyToClipboard
          className="w-6/12 !h-9"
          copyText="Copy Code"
          setIsCopied={setIsCopied}
          textToCopy={codeString}
          isCopied={isCopied}
        />
      </div>
      {/* )} */}
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
