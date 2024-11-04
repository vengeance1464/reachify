"use client";
import ReviewForm from "@/components/collectionWidget/reviewForm";
import BaseModal from "../baseModal";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import CollectionWidget from "@/components/collectionWidget";
import { Button } from "@/components/button";
import CopyToClipboard from "@/components/copyToClipboard";
import Card from "@/components/card";
import { LayoutType } from "@/components/testimonialsWall/types";
import Typography from "@/components/typography";

interface Props {
  // Define the props for your component here
  open: boolean;
  setOpen: (open: boolean) => void;
}
const LayoutModal: React.FC<Props> = ({ open, setOpen }) => {
  const [layoutSelect, setLayoutSelect] = useState<LayoutType | null>(null);
  const codeString = `<script async type="text/javascript" src="https://testimonial.to/js/widget-embed.js"></script>\n<div class="testimonial-to-embed" data-url="https://embed-v2.testimonial.to/badge/space-new?backgroundColor=EB144C&starColor=facc15&fontColor=000000&fontFamily=Roboto&reviewTerm=review&fontSize=16&reviewTermPlural=reviews&alignment=left" data-resize="true" data-resize-width="true" data-redirect-click="https://testimonial.to/space-new/all" style="width:fit-content"></div>`;
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
      setLayoutSelect(undefined);
    }
  }, [open]);
  return (
    <BaseModal
      open={open}
      setOpen={setOpen}
      //trigger={"Open"}
      title={<Typography type={"h2"} text={"Embed a Wall Of Love"} />}
    >
      {/* {openReview ? (
        <ReviewForm setOpenReview={setOpenReview} />
      ) : ( */}
      {layoutSelect === null ? (
        <div className="flex w-100 gap-4 justify-center">
          <Card
            onClick={() => {
              setLayoutSelect(LayoutType.FIXED);
            }}
            classNames="w-[200px]"
            content={<div>Fixed</div>}
            title={""}
          />
          <Card
            onClick={() => {
              setLayoutSelect(LayoutType.CAROUSEL);
            }}
            classNames="w-[200px]"
            content={<div>Carousel</div>}
            title={""}
          />
          <Card
            onClick={() => {
              setLayoutSelect(LayoutType.ANIMATED);
            }}
            classNames="w-[200px]"
            content={<div>Animated</div>}
            title={""}
          />
        </div>
      ) : (
        <>
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
        </>
      )}
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

export default LayoutModal;
