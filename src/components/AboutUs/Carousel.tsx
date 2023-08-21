import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel: React.FC = () => {
  const slides = [
    {
      url: "https://149358811.v2.pressablecdn.com/wp-content/uploads/2017/09/Womens-Group-Service-First-Image.jpg",
    },
    {
      url: "https://thumbs.dreamstime.com/b/group-women-socialize-teamwork-happiness-concept-97129071.jpg",
    },
    {
      url: "https://img.freepik.com/free-photo/cute-interracial-young-adult-women-casual-clothes-chatting-among-themselves-beige-background_197531-31859.jpg",
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
