import React, { useState } from "react";
import MyButton3 from "../../components/Buttons/MyButton3";
import { CiLink } from "react-icons/ci";
import { CiSearch, CiFilter } from "react-icons/ci";
import MyButton2 from "../Buttons/MyButton2";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";

const LayoutIndividualCourse = ({ course, courseDetails }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const renderRatingStars = (rating) => {
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-background1 to-background2 dark:from-dark_background1 min-h-screen dark:to-dark_background2 text-primary_text dark:text-dark_primary_text py-8 px-4 md:px-16 duration-300"
    >
      <div className="flex flex-col mx-auto">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl tracking-wider font-extrabold font-gallient py-5 text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-highlight_hover to-highlight_hover_dark"
        >
          Start Learning {course} from top-notch teachers across India
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-5 mb-12"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courseDetails.map((courseDetail, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-background2 dark:bg-dark_background2 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={courseDetail.image.url}
                  alt={courseDetail.name}
                  className="w-full h-48 object-cover transition duration-300 transform hover:scale-110"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-center uppercase">
                {courseDetail.name}
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-3">
                by {courseDetail.instructorName}
              </p>
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center mb-1">
                  {renderRatingStars(courseDetail.averageRatings)}
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    {courseDetail.averageRatings.toFixed(1)}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  ({courseDetail.totalRatings} ratings)
                </span>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <MyButton3
                  classDesign="before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text px-6 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300"
                  buttonName="Go to course"
                  buttonIcon={<CiLink className="w-5 h-5 mr-2" />}
                  onClick={() => navigate(`${courseDetail.slug}`)}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LayoutIndividualCourse;
