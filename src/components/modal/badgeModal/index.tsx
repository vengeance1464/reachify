import React, { ReactNode, useEffect, useState } from "react";
import BaseModal from "../baseModal";
import { Ratings } from "@/components/reviewStars";
import Typography from "@/components/typography";
// import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import Markdown from "react-markdown";
import { Button } from "@/components/button";
import CopyToClipboard from "@/components/copyToClipboard";
//import CodeBlock from "@/components/code";
//import Prism from "prismjs";

// require("prismjs/components/prism-javascript");
// require("prismjs/components/prism-css");
// require("prismjs/components/prism-jsx");

interface Props {
  // Define the props for your component here
  reviewRatings: number[];
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Badge: React.FC<Props> = ({ reviewRatings, open, setOpen }) => {
  // Implement your component logic here
  const avgRating =
    reviewRatings.reduce((accum, curr) => {
      return accum + curr;
    }, 0) / reviewRatings.length;

  const fullStarsRating = reviewRatings.filter((item) => item === 5).length;
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!open) {
      setIsCopied(false);
    }
  }, [open]);

  // const code = `<pre>
  //     <code>
  //       <script
  //         async
  //         type="text/javascript"
  //         src="https://testimonial.to/js/widget-embed.js"
  //       ></script>
  //       <div
  //         class="testimonial-to-embed"
  //         data-url="https://embed-v2.testimonial.to/badge/space-new?backgroundColor=EB144C&starColor=facc15&fontColor=000000&fontFamily=Roboto&reviewTerm=review&fontSize=16&reviewTermPlural=reviews&alignment=left"
  //         data-resize="true"
  //         data-resize-width="true"
  //         data-redirect-click="https://testimonial.to/space-new/all"
  //         style="width:fit-content"
  //       ></div>
  //     </code>
  //   </pre>`;

  const codeString = `<script async type="text/javascript" src="https://testimonial.to/js/widget-embed.js"></script>\n<div class="testimonial-to-embed" data-url="https://embed-v2.testimonial.to/badge/space-new?backgroundColor=EB144C&starColor=facc15&fontColor=000000&fontFamily=Roboto&reviewTerm=review&fontSize=16&reviewTermPlural=reviews&alignment=left" data-resize="true" data-resize-width="true" data-redirect-click="https://testimonial.to/space-new/all" style="width:fit-content"></div>`;
  const CodeBlock = () => {
    return (
      <SyntaxHighlighter language={"javascript"} style={tomorrow}>
        {codeString}
      </SyntaxHighlighter>
    );
  };

  // useEffect(() => {
  //   Prism.highlightAll();
  // }, []);
  return (
    <BaseModal setOpen={setOpen} open={open} title={"Embed a Badge"}>
      <div className="flex flex-col gap-2">
        <div>
          {
            <Ratings isStatic>
              <Typography
                type={"h4"}
                text={`5/5 from ${fullStarsRating} reviews`}
              />
            </Ratings>
          }
        </div>
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
            className="w-6/12 !h-9 bg-[#fff] !text-black border-solid border-2 border-grayText"
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
      </div>
    </BaseModal>
  );
};

export default Badge;
