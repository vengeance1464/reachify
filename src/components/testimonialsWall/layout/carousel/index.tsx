import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LeftArrow from "../../../../../public/assets/leftArrow";
import RightArrow from "../../../../../public/assets/rightArrow";
import RightArrowNew from "../../../../../public/assets/rightArrowNew";
import LeftArrowNew from "../../../../../public/assets/leftArrowNew";

const CarouselLayout: React.FC<any> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages =
    children.length % 3 === 0
      ? children.length / 3
      : Math.floor(children.length / 3) + 1;

  const getCurrentCarouselItems = () => {
    const items: any = [];
    for (let i = currentPage * 3; i < currentPage * 3 + 3; i++) {
      items.push(children[i]);
    }

    return items;
  };
  return (
    // <Carousel>
    //   <CarouselContent>
    //     {children &&
    //       children.length > 0 &&
    //       children.map((item: any) => (
    //         <CarouselItem className="md:basis-1/2 lg:basis-1/2 pl-1 md:pl-1">
    //           {item}
    //         </CarouselItem>
    //       ))}
    //   </CarouselContent>
    //   <CarouselPrevious />
    //   <CarouselNext />
    // </Carousel>
    <div className="flex flex-col">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="grid grid-cols-5 gap-x-3 p-4 flex flex-row justify-center items-center mx-auto"
      >
        {/* <div className="bg-blue-200 p-4">Column 1</div>
      <div className="bg-blue-300 p-4">Column 2</div>
      <div className="bg-blue-400 p-4">Column 3</div>
      <div className="bg-blue-500 p-4">Column 4</div> */}
        {/* <LeftArrow
          onClick={() => {
            if (currentPage > 0) setCurrentPage(currentPage - 1);
            else setCurrentPage(totalPages - 1);
          }}
        /> */}
        <LeftArrowNew />
        {/* <div className="flex gap-4"> */}
        {children &&
          children.length > 0 &&
          getCurrentCarouselItems().map((item: any) => (
            <div className="w-[350px]">{item}</div>
          ))}
        {/* </div> */}
        {/* <RightArrow
          onClick={() => {
            if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
            else setCurrentPage(0);
          }}
        /> */}
        <RightArrowNew
          onClick={() => {
            if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
            else setCurrentPage(0);
          }}
        />
      </div>
      {totalPages >= 1 && (
        <div className="flex justify-center items-center">
          {Array(totalPages)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
                  currentPage === index ? "bg-gray-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentPage(index)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default CarouselLayout;
