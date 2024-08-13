import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselLayout: React.FC<any> = ({ children }) => {
  return (
    <Carousel>
      <CarouselContent>
        {children &&
          children.length > 0 &&
          children.map((item: any) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/2 pl-2 md:pl-1">
              {item}
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselLayout;
