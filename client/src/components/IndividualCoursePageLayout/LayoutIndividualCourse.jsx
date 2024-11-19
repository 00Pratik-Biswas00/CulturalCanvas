import React, { useState } from "react";
import MyButton3 from "../../components/Buttons/MyButton3";
import { CiLink } from "react-icons/ci";
import { CiSearch, CiFilter } from "react-icons/ci";
import MyButton2 from "../Buttons/MyButton2";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import star icons

const LayoutIndividualCourse = ({ course, courseDetails }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const renderRatingStars = (rating) => {
    // Round the rating to the nearest 0.5
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="flex gap-1">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500" />
        ))}
        {[...Array(halfStars)].map((_, index) => (
          <FaStarHalfAlt key={`half-${index}`} className="text-yellow-500" />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-yellow-500" />
        ))}
      </div>
    );
  };

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 pb-10 px-16 duration-300">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-5xl tracking-wider font-extrabold font-gallient py-5 text-center ">
          Start Learning {course} from top-notch teachers across India
        </h1>

        <div className="flex items-center justify-center gap-x-5">
          <MyButton2
            classDesign="text-highlight_dark hover:text-dark_primary_text dark:text-dark_primary_text"
            buttonName1={<CiFilter className="cursor-pointer sm:w-8 sm:h-8" />}
            buttonName2="Filter"
          />

          <div className="relative flex items-center cursor-pointer pl-2 py-2 border border-highlight_dark text-highlight_dark dark:text-dark_primary_text font-searchBars text-xl tracking-wider hover:text-dark_primary_text duration-1000 rounded-3xl group hollowBorder">
            <CiSearch className="w-8 h-8" />
            <input
              type="text"
              placeholder="Search for Blogs and Vlogs..."
              className="bg-transparent outline-none border-none w-0 pl-2 transition-all duration-700 group-hover:w-[400px] placeholder:text-dark_primary_text placeholder:font-searchBars"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courseDetails.map((courseDetail, index) => (
            <div
              key={index}
              className="p-5 rounded-lg flex flex-col items-center shadow-lg shadow-gray-400 gap-5">
              <div className="flex flex-col">
                <img
                  src={courseDetail.image.url}
                  alt={courseDetail.name}
                  className="w-full h-full rounded-md"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-3xl font-extrabold text-center uppercase">
                  {courseDetail.name}
                </h2>
                <p className="italic font-semibold">
                  - by {courseDetail.instructorName}
                </p>

                {/* Display the rating stars here */}
                <div className="flex flex-col items-center">
                  <div className="text-yellow-500">
                    {renderRatingStars(courseDetail.averageRatings)}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({courseDetail.totalRatings} ratings)
                  </span>
                </div>
              </div>

              <MyButton3
                classDesign={
                  "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text"
                }
                buttonName={"Go To Course"}
                buttonIcon={<CiLink className="w-7 h-7" />}
                onClick={() => navigate(`${courseDetail.slug}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayoutIndividualCourse;
