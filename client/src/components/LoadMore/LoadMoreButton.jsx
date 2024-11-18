import React from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { FaAngleDoubleUp } from "react-icons/fa";

const LoadMoreButton = ({ isAllDisplayed, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="relative group overflow-hidden px-6 h-12 border border-primary_text rounded-full"
      >
        <div
          aria-hidden="true"
          className="transition duration-300 group-hover:-translate-y-12"
        >
          {isAllDisplayed ? (
            <>
              <div className="h-12 flex items-center justify-center">
                <span className="text-highlight_hover">Show Less</span>
              </div>
              <div className="h-12 flex items-center justify-center">
                <span className="text-highlight_hover">
                  {" "}
                  <FaAngleDoubleUp />{" "}
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="h-12 flex items-center justify-center">
                <span className="text-highlight_hover">Show More</span>
              </div>
              <div className="h-12 flex items-center justify-center">
                <span className="text-highlight_hover">
                  {" "}
                  <FaAnglesDown />{" "}
                </span>
              </div>
            </>
          )}
        </div>
      </button>
    </div>
  );
};

export default LoadMoreButton;
