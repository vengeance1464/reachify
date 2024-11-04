"use client";
import CopyToClipboard from "@/components/copyToClipboard";
import Typography from "@/components/typography";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

const LandingPage: React.FC<any> = () => {
  const [isCopied, setIsCopied] = useState(false);
  const codeString = `<script type="text/javascript" src="https://reachify-bucker.s3.amazonaws.com/bundles/badgeWidget.main.js"></script>\n<div class="testimonial-to-embed" data-url="https://embed-v2.testimonial.to/badge/space-new?backgroundColor=EB144C&starColor=facc15&fontColor=000000&fontFamily=Roboto&reviewTerm=review&fontSize=16&reviewTermPlural=reviews&alignment=left" data-resize="true" data-resize-width="true" data-redirect-click="https://testimonial.to/space-new/all" style="width:fit-content"></div>`;
  const CodeBlock = () => {
    return (
      <SyntaxHighlighter language={"javascript"} style={tomorrow}>
        {codeString}
      </SyntaxHighlighter>
    );
  };
  return (
    <div className="flex flex-col items-center gap-y-10 pb-10 ">
      <div className="flex flex-col gap-4 items-center text-white">
        <Typography
          type={"h1"}
          text={"Get testimonials from your customers with ease"}
        />
        <Typography
          type="h6"
          text="Collecting testimonials is hard, we get it! So we built Testimonial. In minutes, you can collect text and video testimonials from your customers with no need for a developer or website hosting."
        />
      </div>

      <div>
        <Image
          //className="w-[75vw]! "
          style={{ objectFit: "cover" }}
          width={1000}
          height={1000}
          src={`https://reachify-bucker.s3.us-east-1.amazonaws.com/testimonials.png`}
          alt={"testimonials"}
        />
      </div>

      <div className="flex flex-col gap-4 items-center text-white">
        <Typography
          type={"h1"}
          text={"Add testimonials to your website with no coding!"}
        />
        <Typography
          type="h6"
          text="Copy and paste our HTML code to add the Wall Of Love ( to your website. "
        />
      </div>

      <div className="flex w-[75vw] flex-col bg-[#1f2d3d] px-10 py-2">
        <Typography
          classes="text-[#fff]"
          type={"p"}
          text={"Try our sample embed code"}
        />
        <Typography
          classes="text-[#fff]"
          type={"p"}
          text={"Embed the wall of love to your website in 1 minute"}
        />
        <CodeBlock />

        <div className="flex">
          <CopyToClipboard
            className="w-2/12 !h-9"
            copyText="Copy Code"
            setIsCopied={setIsCopied}
            textToCopy={codeString}
            isCopied={isCopied}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
