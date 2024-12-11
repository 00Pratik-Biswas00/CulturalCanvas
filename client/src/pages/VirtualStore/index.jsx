import React, { useState, useEffect } from "react";
import car1 from "../../assets/store/vid.mp4";
// import img1 from "../../assets/career/admins.png";
import img1 from "../../assets/store/aaa.png";

import car2 from "../../assets/store/ed.mp4";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import { TfiMoreAlt } from "react-icons/tfi";
import MyButton1 from "../../components/Buttons/MyButton1";

const cards = [
  {
    video: car1,
    image: img1,
    heading: "Rupal r Matha",
    subheading: "Power up your playground.",
    button1: "Find Available Cars",
    button2: "Learn More",
  },
  {
    video: car1,
    image: img1,
    heading: "Rupal r Matha",
    subheading: "Power up your playground.",
    button1: "Find Available Cars",
    button2: "Learn More",
  },
  {
    video: car1,
    image: img1,
    heading: "Rupal r Matha",
    subheading: "Power up your playground.",
    button1: "Find Available Cars",
    button2: "Learn More",
  },
];
const VirtualStore = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [initialVisibleCount, setInitialVisibleCount] = useState(6);
  const [bookHovered, setBookHovered] = useState(false);

  const [flippedCard, setFlippedCard] = useState(null);

  const handleFlip = (index) => {
    setFlippedCard(index);
  };

  const handleUnflip = () => {
    setFlippedCard(null);
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const updateVisibleCount = () => {
    let count;
    if (window.innerWidth >= 1280) {
      count = 6;
    } else if (window.innerWidth >= 768) {
      count = 4;
    } else {
      count = 2;
    }
    setVisibleCount(count);
    setInitialVisibleCount(count);
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 min-h-screen">
      <div className="flex flex-col gap-y-3">
        {/* <div className="text-primary_text sm:text-5xl text-3xl font-normal tracking-tighter font-headings">
          Our Store
        </div> */}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:gap-12 gap-8 sm:gap-10">
          {cards.slice(0, visibleCount).map((car, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden flex flex-col items-center justify-center shadow-lg cursor-pointer ${
                flippedCard === index ? "rotate-y-180" : ""
              } transition-transform duration-700`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {flippedCard !== index ? (
                <>
                  {hoveredCard === index ? (
                    <video
                      src={car.video}
                      autoPlay
                      loop
                      className="w-full h-full"
                    />
                  ) : (
                    <img
                      src={car.image}
                      alt={car.heading}
                      className="w-[20rem] h-[20rem]"
                    />
                  )}

                  <div className="p-3">
                    <button onClick={() => handleFlip(index)}>NEXT</button>
                  </div>
                </>
              ) : (
                <div className="back absolute inset-0 flex flex-col justify-center items-center bg-background2 rounded-lg">
                  <div className="containerx">
                    <div className="boxx">
                      <h2 className="namex">Khadi Kurti</h2>
                      <a href="/" className="buyx">
                        Buy
                      </a>
                      <div className="circlex"></div>
                      <img
                        src={car.image}
                        alt="Product"
                        className="productx w-52 h-52"
                      />
                    </div>
                    {/* <button
                      className="mt-4 z-50 text-white text-5xl bg-blue-500 px-4 py-2 rounded"
                      onClick={handleUnflip}
                    >
                      Back
                    </button> */}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* {visibleCount < cards.length && (
          <div className="flex justify-center mt-5">
            <button
              className="relative flex items-center justify-center gap-x-1 text-primary_text bg-highlight hover:bg-highlight_hover py-1 px-4 rounded"
              onClick={handleSeeMore}
            >
              <span className="mr-3"> See More</span>
              <div className="absolute right-2 top-[0.55rem]">
                <FaAngleDoubleDown className="w-3 h-4" />
              </div>
            </button>
          </div>
        )}
        {visibleCount >= cards.length && (
          <div className="flex justify-center mt-5">
            <button
              className="relative flex items-center justify-center gap-x-1 text-primary_text bg-highlight hover:bg-highlight_hover py-1 px-4 rounded"
              onClick={handleSeeLess}
            >
              <span className="mr-3"> See Less</span>
              <div className="absolute right-2 top-[0.55rem]">
                <FaAngleDoubleUp className="w-3 h-4" />
              </div>
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default VirtualStore;

/*

<div class="containerx">
          <div class="boxx">
            <h2 class="namex">Product Name</h2>
            <a href="/" class="buyx">
              Buy
            </a>
            <div class="circlex"></div>
            <img src={img1} alt="Product" class="productx w-52 h-52" />
          </div>
        </div>

*/
