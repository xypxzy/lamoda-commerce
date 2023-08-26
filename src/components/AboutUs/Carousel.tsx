import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import firstSlide from "../../assets/img/Womens-Group-Service-First-Image.jpg";
import secondSlide from "../../assets/img/65168748-group-of-women-socialize-teamwork-happiness-concept.jpg";
import thirdSlide from "../../assets/img/iStock-951541912.jpg";

const Carousel: React.FC = () => {
  const slides = [
    {
      url: firstSlide,
    },
    {
      url: secondSlide,
    },
    {
      url: thirdSlide,
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full">
      <div className="elative h-56 overflow-hidden rounded-lg md:h-96 relative group">
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
          }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <FaArrowLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <FaArrowRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
