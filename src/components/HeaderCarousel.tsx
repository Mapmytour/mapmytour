import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useBookNowDialog } from "../hooks/useBookNowDialog";


const carouselData = [
  {
    tag:"Join us as we embark on unforgettable adventures and explore the world, one destination at a time.",
    id: 1,
    src: "/img/1.jpg",
    title: "Let's Discover The World Together",
  },
  {
    title:"Your Adventure Starts Here",
    id: 3,
    src: "/img/2.jpg",
    tag: "Start your journey with us and discover the world’s most exciting destinations"
  },
  // {
  //  tag:"Discover the ideal escape tailored to your style, from serene retreats to thrilling adventures",
  //   id: 5,
  //   src: "/img/5.jpg",
  //   title: "Let's Discover The World Together",
  // },
  // {
  //  tag:"Journey beyond the ordinary and immerse yourself in unforgettable destinations and experiences.",
  //   id: 8,
  //   src: "/img/8.jpg",
  //   title: "Discover Amazing Places With Us",
  // },
];
interface HeaderCarouselProps {
  interval?: number;
  bookNowClick?: (e: React.MouseEvent) => void;
}

const HeaderCarousel: React.FC<HeaderCarouselProps> = ({
  interval = 5000,
  bookNowClick,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { openDialog } = useBookNowDialog();

  // Set up auto rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current === 1 ? 0 : 1));
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  const handlePrev = () => {
    setActiveIndex((current) => (current ===  0? carouselData.length-1 : 0));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === carouselData.length-1 ? 0 : current+1));
  };

  const handleBookNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (bookNowClick) {
      bookNowClick(e);
    } else {
      openDialog();
    }
  };


  return (
    <div className="container-fluid p-0 relative">
      <div
        id="header-carousel"
        className="relative overflow-hidden"
        style={{ height: "100vh", maxHeight: "800px" }}
      >
        <div className="relative w-full h-full">
          {carouselData.map((e, idx) => (
            <div
              key={idx}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                activeIndex === idx ? "opacity-100" : "opacity-0"
              }`}
              style={{ zIndex: activeIndex === idx ? 1 : 0 }}
            >
              <img
                className="w-full h-full object-cover"
                src={e.src}
                alt="Image"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="carousel-caption absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="p-3 max-w-4xl mx-auto">
                  <h4 className="text-white  font-[lato] mb-3 text-[1.3rem] md:text-[2.5rem] font-semibold">
                    Travel World With Class
                  </h4>
                  <h1 className="text-4xl md:text-6xl font-[anton] lg:text-7xl text-white font-bold mb-6 leading-tight">
                    {e.title}
                  </h1>
                  <p className="text-white font-regular"><i>{e.tag}</i></p>
                  {/* <a href="#" onClick={handleBookNowClick} className="bg-primary text-white py-3 px-8 inline-block mt-4 text-lg font-medium hover:bg-opacity-90 transition-all">Book Now</a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 w-[45px] h-[45px] flex items-center justify-center  bg-[#00000044]  text-white hover:bg-[#00000088]"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 w-[45px] h-[45px] flex items-center justify-center bg-[#00000044]  text-white hover:bg-[#00000088]"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default HeaderCarousel;
