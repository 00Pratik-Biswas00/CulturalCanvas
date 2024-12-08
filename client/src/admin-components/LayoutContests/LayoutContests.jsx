import React, { useRef } from "react";
import {
  FaSearch,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const LayoutContests = ({ setModalOpen }) => {
  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-y-3">
        <h1 className="text-[1.8rem] rounded-r-xl font-semibold text-center font-playfair bg-highlight text-dark_primary_text py-1 px-4">
          Blog Contest
        </h1>

        {/* Add New Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="bg-highlight_hover hover:bg-highlight_hover_dark text-dark_primary_text font-medium font-ubuntu sm:text-base py-1 px-4 rounded transition-transform hover:scale-110 duration-1000 transform-cpu"
        >
          Add a New Blog
        </button>
      </div>

      <div className="relative w-full mt-10 px-10">
        <div className="flex gap-7 overflow-x-hidden w-full outline-none">
          {/* Cards for Courses */}

          <div className="flex flex-col items-center justify-start gap-3 p-2 min-w-[32%] border  rounded-xl shadow-custom-green">
            <div>
              <h1>Blog Contest Topic: TOPIC</h1>
              <h1>Blog Contest Date: DATE</h1>
              <h1>Blog Contest Time: Time</h1>
            </div>
            <div className="flex items-center justify-center pt-1 gap-x-3">
              <RiEditFill
                className="w-7 h-7 cursor-pointer text-highlight_hover hover:text-highlight_hover_dark"
                // onClick={() => onEditCourse(course)}
              />
              <MdDelete className="w-7 h-7 cursor-pointer text-red-600 hover:text-red-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutContests;
