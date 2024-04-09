import { FC, ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Slide.scss'

type SlideProps = {
  children: ReactNode;
  itemsCount?: number;
};

const Slide: FC<SlideProps> = ({ children, itemsCount }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: itemsCount || 4
    }
  };

  return (
    <div className="slide">
      <div className="container">
        <Carousel infinite={true} responsive={responsive} arrows={true} showDots={false}>{children}</Carousel>
      </div>
    </div>
  );
};

export default Slide;
