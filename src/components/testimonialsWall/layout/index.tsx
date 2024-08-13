import { LayoutType } from "../types";
import AnimatedLayout from "./animated";
import CarouselLayout from "./carousel";
import FixedLayout from "./fixed";

const TestimonialsWallLayout: React.FC<any> = ({ children, layoutType }) => {
  const getLayoutType = () => {
    switch (layoutType) {
      case LayoutType.FIXED:
        return <FixedLayout>{children}</FixedLayout>;

      case LayoutType.CAROUSEL:
        return <CarouselLayout>{children}</CarouselLayout>;

      case LayoutType.ANIMATED:
        return <AnimatedLayout>{children}</AnimatedLayout>;
    }
  };
  return getLayoutType();
};

export default TestimonialsWallLayout;
