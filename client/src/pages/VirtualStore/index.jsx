import React, { useState, useEffect } from "react";
import car1 from "../../assets/store/a.mp4";
import car2 from "../../assets/store/ed.mp4";
// import img1 from "../../assets/career/admins.png";
import img1 from "../../assets/store/aaa.png";
import img2 from "../../assets/store/dhokra.png";
import { CiSearch, CiFilter } from "react-icons/ci";

import MyButton2 from "../../components/Buttons/MyButton2";

const cards = [
  {
    video: car1,
    image: img2,
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
  {
    video: car1,
    image: img2,
    heading: "Rupal r Matha",
    subheading: "Power up your playground.",
    button1: "Find Available Cars",
    button2: "Learn More",
  },
  {
    video: car1,
    image: img2,
    heading: "Rupal r Matha",
    subheading: "Power up your playground.",
    button1: "Find Available Cars",
    button2: "Learn More",
  },
  {
    video: car1,
    image: img2,
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
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text  py-4 px-16 duration-300 min-h-screen">
      <div className="flex items-center tracking-widest justify-center py-4 text-6xl font-extrabold font-gallient">
        Virtual Cultural Store
      </div>

      <div className="flex items-center justify-center gap-x-5">
        <MyButton2
          classDesign="text-highlight_dark hover:text-dark_primary_text dark:text-dark_primary_text"
          buttonName1={<CiFilter className="cursor-pointer sm:w-8 sm:h-8" />}
          buttonName2="Filter"
          // buttonLink={() => setBlogsVlogsModalOpen(true)}
        />

        <div className="relative flex items-center cursor-pointer pl-2 py-2 border border-highlight_dark text-highlight_dark dark:text-dark_primary_text font-searchBars text-xl tracking-wider hover:text-dark_primary_text duration-1000 rounded-3xl group hollowBorder">
          <CiSearch className="w-8 h-8" />
          <input
            type="text"
            placeholder="Search for Blogs and Vlogs..."
            className="bg-transparent outline-none border-none w-0 pl-2 transition-all duration-700 group-hover:w-[400px] placeholder:text-dark_primary_text placeholder:font-searchBars"
            // value={searchQuery}
            // onChange={handleSearch}
          />
        </div>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:gap-12 gap-8 sm:gap-10 pt-5">
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
              <div className=" p-3 flex items-center justify-center flex-col">
                {hoveredCard === index ? (
                  <video
                    src={car.video}
                    autoPlay
                    loop
                    className="w-full h-full mb-5"
                  />
                ) : (
                  <img
                    src={car.image}
                    alt={car.heading}
                    className="w-[20rem] h-[20rem] mb-5"
                  />
                )}

                <button
                  onClick={() => handleFlip(index)}
                  className={`relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-[#193c70e9] to-[#1489386c] hover:to-[#174926] `}
                >
                  <span className="relative text-base text-dark_primary_text">
                    NEXT
                  </span>
                  <div className="flex items-center -space-x-3 translate-x-3">
                    <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            ) : (
              <div className="back absolute inset-0 flex flex-col justify-center items-center rounded-lg">
                <div className="containerx">
                  <div className="boxx">
                    <h2 className="namex">Khadi Kurti</h2>
                    <a
                      href="/virtual-store/6759c6385204dcbaadf3fc09"
                      className="buyx"
                    >
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
