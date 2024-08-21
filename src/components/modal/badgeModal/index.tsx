import React, { ReactNode } from "react";
import BaseModal from "../baseModal";
import { Ratings } from "@/components/reviewStars";
import Typography from "@/components/typography";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

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

  const codeString = `<script async type="text/javascript" src="https://testimonial.to/js/widget-embed.js"></script>
<div class="testimonial-to-embed" data-url="https://embed-v2.testimonial.to/badge/space-new?backgroundColor=EB144C&starColor=facc15&fontColor=000000&fontFamily=Roboto&reviewTerm=review&fontSize=16&reviewTermPlural=reviews&alignment=left" data-resize="true" data-resize-width="true" data-redirect-click="https://testimonial.to/space-new/all" style="width:fit-content"></div>`;
  return (
    <BaseModal open={open} title={"Embed a Badge"}>
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
      {/* <div>
        <SyntaxHighlighter language="javascript" style={dark}>
          {codeString}
        </SyntaxHighlighter>
      </div> */}
    </BaseModal>
  );
};

export default Badge;
