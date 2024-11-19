import React, { useRef } from "react";
import {
  FaSearch,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { RiEditFill } from "react-icons/ri";

import { MdDelete } from "react-icons/md";

import imgTemp from "../../assets/footer/linkedin.jpeg";

const LayoutCourses = ({
  cultureName,
  setModalOpen,
  courses,
  onEditCourse,
}) => {
  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center  gap-y-3 ">
        <h1 className="text-[1.8rem] rounded-r-xl font-semibold text-center font-playfair bg-highlight text-dark_primary_text py-1 px-4">
          {cultureName}s
        </h1>

        {/* Search Box */}
        <div className="relative w-full sm:w-1/2 flex items-center">
          <input
            type="text"
            placeholder={`Search for a ${cultureName}...`}
            className="w-full bg-background2 dark:bg-shadow rounded-lg focus:outline-none focus:border focus:border-highlight text-base pl-10 sm:pl-10 py-2 sm:px-4"
          />
          <FaSearch className="absolute left-3 w-4 h-4" />
        </div>

        {/* Add New Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="bg-highlight_hover hover:bg-highlight_hover_dark text-dark_primary_text font-medium font-ubuntu sm:text-base py-1 px-4 rounded transition-transform hover:scale-110 duration-1000 transform-cpu">
          Add a New {cultureName}
        </button>
      </div>

      {/* Scrollable Section */}
      <div className="relative w-full mt-10 px-10 ">
        <div className="flex gap-7 overflow-x-auto">
          {courses.map((course) => (
            <div
              key={course.slug}
              className="flex flex-col items-center justify-start gap-3 p-4 min-w-[32%]">
              <img
                src={course.image.url}
                className="rounded-xl w-80 h-80"
                alt={course.name}
              />
              <div className="flex items-center justify-center pt-5 gap-x-3">
                <RiEditFill
                  className="w-7 h-7 cursor-pointer text-highlight_hover hover:text-highlight_hover_dark"
                  onClick={() => onEditCourse(course)}
                />
                <p className="text-xl font-bold">{course.name}</p>
                <MdDelete className="w-7 h-7 cursor-pointer text-red-600 hover:text-red-800" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutCourses;
