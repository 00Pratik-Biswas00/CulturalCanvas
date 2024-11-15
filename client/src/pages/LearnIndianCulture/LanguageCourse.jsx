// LanguageCourse.js
import React from "react";
import MyButton2 from "../../components/Buttons/MyButton2";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import MyButton1 from "../../components/Buttons/MyButton1";

const LanguageCourse = ({
  scrollLeft,
  scrollRight,
  scrollRef,
  courses,
  title,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="relative w-full px-3">
        {/* Left Scroll Button */}
        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
          <MyButton2
            classDesign="text-highlight_dark hover:text-dark_primary_text dark:text-dark_primary_text"
            buttonLink={scrollLeft}
            buttonName1={<FaLongArrowAltLeft />}
            buttonName2={"Prev"}
          />
        </div>

        {/* Scrollable Grid */}
        <div
          ref={scrollRef}
          className="flex p-5 gap-8 overflow-x-auto scroll-smooth"
        >
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="min-w-[300px] lg:min-w-[430px] p-5 rounded-lg flex flex-col items-center shadow-lg shadow-gray-400 gap-5"
            >
              <div className="flex flex-col">
                <img
                  src={course.image}
                  alt="course"
                  className="w-full h-full rounded-md"
                />
              </div>
              <h2 className="text-2xl font-extrabold text-center uppercase">
                {course.description}
              </h2>

              <MyButton1
                classDesign={
                  "bg-gradient-to-r from-[#193c70e9] to-[#1489386c] hover:to-[#174926] font-bold"
                }
                buttonLink={course.buttonLink}
                buttonName={course.name}
              />
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
          <MyButton2
            classDesign="text-highlight_dark hover:text-dark_primary_text dark:text-dark_primary_text"
            buttonLink={scrollRight}
            buttonName1={<FaLongArrowAltRight />}
            buttonName2={"Next"}
          />
        </div>
      </div>

      <h1 className="px-5 py-2 bg-slate-400 text-2xl font-extrabold">
        {title}
      </h1>
    </div>
  );
};

export default LanguageCourse;
