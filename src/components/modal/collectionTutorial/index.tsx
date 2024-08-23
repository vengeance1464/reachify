"use client";
import ReviewForm from "@/components/collectionWidget/reviewForm";
import BaseModal from "../baseModal";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import CollectionWidget from "@/components/collectionWidget";
import { Button } from "@/components/button";
import CopyToClipboard from "@/components/copyToClipboard";

interface Props {
  // Define the props for your component here
  open: boolean;
  setOpen: (open: boolean) => void;
}
const CollectionTutorial: React.FC<Props> = ({ open, setOpen }) => {
  const codeString = `<script async type="text/javascript" src="https://testimonial.to/js/widget-embed.js"></script>\n<div class="testimonial-to-embed" data-url="https://embed-v2.testimonial.to/badge/space-new?backgroundColor=EB144C&starColor=facc15&fontColor=000000&fontFamily=Roboto&reviewTerm=review&fontSize=16&reviewTermPlural=reviews&alignment=left" data-resize="true" data-resize-width="true" data-redirect-click="https://testimonial.to/space-new/all" style="width:fit-content"></div>`;
  const CodeBlock = () => {
    return (
      <SyntaxHighlighter language={"javascript"} style={tomorrow}>
        {codeString}
      </SyntaxHighlighter>
    );
  };
  const [isCopied, setIsCopied] = useState(false);

  return (
    <BaseModal
      open={open}
      setOpen={setOpen}
      //trigger={"Open"}
      title={"Add collecting widget to your own website"}
    >
      {/* {openReview ? (
        <ReviewForm setOpenReview={setOpenReview} />
      ) : ( */}
      <CollectionWidget spaceId={"66b8b4c89db23b2d1a47a691"} />

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

      <div className="flex justify-center">
        <Button
          text={"Close"}
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
