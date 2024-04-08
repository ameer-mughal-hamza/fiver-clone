import { FC, ReactNode } from "react";

type SlideProps = {
  children: ReactNode;
};

const Slide: FC<SlideProps> = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container"></div>
    </div>
  );
};

export default Slide;
