import React, { useRef, useEffect } from "react";
import commonImg from "../../assets/Heritage/a.png";
import taj from "../../assets/Heritage/taj.jpeg";
import { FaAnglesRight } from "react-icons/fa6";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import { dummyData } from "../../utils/constants";

const LearnIndianCulture = () => {
  const { LearningDetails } = dummyData;

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300">
      <div>
        <img src={commonImg} alt="Common" />
      </div>

      <div className="flex items-center justify-center py-4 text-5xl gap-8 font-bold font-playfair uppercase ">
        <p className="tracking-wider">Learning</p>
        <p className="tracking-wider">the</p>
        <p className="tracking-wider">Nuances</p>
        <p className="tracking-wider">of</p>
        <p className="tracking-wider">Indian</p>
        <p className="tracking-wider">Culture</p>
      </div>
      {Object.entries(LearningDetails).map(([key, values], index) => {
        const scrollRef = useRef(null);
        const isDragging = useRef(false);
        const startPosition = useRef(0);
        const scrollLeftValue = useRef(0);

        const handleMouseDown = (e) => {
          isDragging.current = true;
          startPosition.current = e.clientX;
          scrollLeftValue.current = scrollRef.current.scrollLeft;
        };

        const handleMouseMove = (e) => {
          if (!isDragging.current) return;
          const distance = e.clientX - startPosition.current;
          scrollRef.current.scrollLeft = scrollLeftValue.current - distance;
        };

        const handleMouseUp = () => {
          isDragging.current = false;
        };

        const scrollLeft = () => {
          scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
        };

        const scrollRight = () => {
          scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
        };

        const handleKeyDown = (e) => {
          if (e.key === "ArrowLeft") {
            scrollLeft();
          } else if (e.key === "ArrowRight") {
            scrollRight();
          }
        };

        useEffect(() => {
          scrollRef.current.focus();
        }, []);

        let textColor,
          textColor2,
          bgColor,
          hoverBgColor,
          borderColor,
          headingColor,
          headingBgColor;

        if (index % 3 === 0) {
          textColor = "text-highlight";
          textColor2 = "text-highlight";
          headingColor = "text-dark_primary_text";
          (headingBgColor = "bg-highlight"), (bgColor = "bg-highlight");
          borderColor = "border-highlight";
          hoverBgColor = "hover:bg-highlight dark:hover:bg-highlight";
        } else if (index % 3 === 1) {
          textColor = "text-dark_secondary_text dark:text-dark_primary_text";
          textColor2 =
            "text-dark_secondary_text hover:text-dark_primary_text dark:text-dark_primary_text dark:hover:text-dark_secondary_text ";

          headingColor = "text-dark_primary_text dark:text-dark_secondary_text";
          (headingBgColor = "bg-dark_secondary_text dark:bg-dark_primary_text"),
            (bgColor = "bg-dark_secondary_text dark:bg-dark_background1");
          borderColor =
            "border-dark_secondary_text dark:border-dark_primary_text";
          hoverBgColor =
            "hover:bg-dark_secondary_text dark:hover:bg-dark_primary_text";
        } else {
          textColor = "text-highlight_hover";
          textColor2 = "text-highlight_hover";
          headingColor = "text-dark_primary_text";
          (headingBgColor = "bg-highlight_hover"),
            (bgColor = "bg-highlight_hover");
          borderColor = "border-highlight_hover";
          hoverBgColor =
            "hover:bg-highlight_hover dark:hover:bg-highlight_hover";
        }

        return (
          <div key={key} className="flex flex-col py-5">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <h1
                  className={`text-4xl leading-7 font-medium font-open_sans p-3 rounded-xl ${headingColor} ${headingBgColor} `}
                >
                  {values[0].courseCategory}
                </h1>
                <FaAnglesRight className={`w-8 h-8 font-medium ${textColor}`} />
              </div>

              <div className="relative w-full">
                <button
                  onClick={scrollLeft}
                  className={`absolute -left-11 top-1/2 transform -translate-y-1/2 bg-background1 dark:bg-dark_background1 ${textColor2} ${hoverBgColor} hover:text-dark_primary_text border ${borderColor} p-2 duration-300 rounded-full z-10`}
                >
                  <FaLongArrowAltLeft className="w-5 h-5" />
                </button>

                <div
                  ref={scrollRef}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  className="flex gap-7 overflow-x-hidden w-full outline-none"
                  style={{ scrollSnapType: "x mandatory" }}
                  tabIndex="0"
                  onKeyDown={handleKeyDown}
                >
                  {values.map((item, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center justify-start gap-3 border-2 ${borderColor} rounded-xl p-4 min-w-[32%]`}
                    >
                      <img
                        src={item.image}
                        className="rounded-xl"
                        alt={item.name}
                      />
                      <h1>{item.name}</h1>
                      <p>{item.introduction}</p>
                      <a
                        href={item.courseLink}
                        className={`bg-background1 dark:bg-dark_background1 ${textColor2} ${hoverBgColor} hover:text-dark_primary_text border-2 ${borderColor} p-2 duration-300 rounded-xl font-bold `}
                      >
                        Go to the course
                      </a>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollRight}
                  className={`absolute -right-11 top-1/2 transform -translate-y-1/2 bg-background1 dark:bg-dark_background1 ${textColor2} ${hoverBgColor} hover:text-dark_primary_text border ${borderColor} p-2 duration-300 rounded-full z-10`}
                >
                  <FaLongArrowAltRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default LearnIndianCulture;
