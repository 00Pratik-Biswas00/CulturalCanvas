import React, { useRef, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_ALL_COURSES_QUERY } from "../../graphql/courseQuery";

import commonImg from "../../assets/Heritage/a.png";

import { FaAnglesRight } from "react-icons/fa6";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const LearnIndianCulture = () => {
  const [courses, setCourses] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_COURSES_QUERY);
  const navigate = useNavigate();
  useEffect(() => {
    if (data && data.getCourses) {
      setCourses(data.getCourses);
    }
  }, [data]);

  console.log(courses);

  const openSingleCourse = (slug) => {
    navigate(`${slug}`);
  };

  const groupedCourses = courses.reduce((acc, course) => {
    const category = course.courseCategory;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(course);
    return acc;
  }, {});

  const scrollRefs = useRef([]);
  const isDragging = useRef([]);
  const startPosition = useRef([]);
  const scrollLeftValue = useRef([]);

  const handleMouseDown = (index, e) => {
    isDragging.current[index] = true;
    startPosition.current[index] = e.clientX;
    scrollLeftValue.current[index] = scrollRefs.current[index].scrollLeft;
  };

  const handleMouseMove = (index, e) => {
    if (!isDragging.current[index]) return;
    const distance = e.clientX - startPosition.current[index];
    scrollRefs.current[index].scrollLeft =
      scrollLeftValue.current[index] - distance;
  };

  const handleMouseUp = (index) => {
    isDragging.current[index] = false;
  };

  const scrollLeft = (index) => {
    scrollRefs.current[index].scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = (index) => {
    scrollRefs.current[index].scrollBy({ left: 500, behavior: "smooth" });
  };

  const [expandedCourses, setExpandedCourses] = useState({});

  const toggleShowMore = (courseId) => {
    setExpandedCourses((prev) => ({
      ...prev,
      [courseId]: !prev[courseId], // Toggle the specific course
    }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching courses!</p>;
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300">
      <div>
        <img src={commonImg} alt="Common" />
      </div>

      <h1 className="text-7xl tracking-wider font-extrabold font-gallient pt-7 pb-2 text-center ">
        Learning the Nuances of Indian Culture
      </h1>

      {Object.entries(groupedCourses).map(
        ([category, categoryCourses], index) => {
          scrollRefs.current[index] =
            scrollRefs.current[index] || React.createRef();

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
            headingColor =
              "text-dark_primary_text dark:text-dark_secondary_text";
            (headingBgColor =
              "bg-dark_secondary_text dark:bg-dark_primary_text"),
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
          // console.log(category);

          return (
            <div key={category} className="flex flex-col py-5">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <h1
                    className={`text-4xl leading-7 font-medium font-open_sans p-3 rounded-xl ${headingColor} ${headingBgColor}`}
                  >
                    {category === "Language" &&
                      "Learn Different Languages of India"}
                    {category === "Cuisine" &&
                      "Try Different Cuisines of India"}
                    {category === "Clothing" &&
                      "Try Different Clothing styles of India"}
                    {category === "Art&Culture" &&
                      "Explore Different Arts & Crafts of India"}
                  </h1>
                  <FaAnglesRight
                    className={`w-8 h-8 font-medium ${textColor}`}
                  />
                </div>

                <div className="relative w-full">
                  <button
                    onClick={() => scrollLeft(index)}
                    className={`absolute -left-11 top-1/2 transform -translate-y-1/2 bg-background1 dark:bg-dark_background1 ${textColor2} ${hoverBgColor} hover:text-dark_primary_text border ${borderColor} p-2 duration-300 rounded-full z-10`}
                  >
                    <FaLongArrowAltLeft className="w-5 h-5" />
                  </button>

                  <div
                    ref={(el) => (scrollRefs.current[index] = el)}
                    onMouseDown={(e) => handleMouseDown(index, e)}
                    onMouseMove={(e) => handleMouseMove(index, e)}
                    onMouseUp={() => handleMouseUp(index)}
                    onMouseLeave={() => handleMouseUp(index)}
                    className="flex gap-7 overflow-x-hidden w-full outline-none"
                    style={{ scrollSnapType: "x mandatory" }}
                  >
                    {categoryCourses.map((course) => {
                      // Split the course intro into an array of words
                      const words = course.courseIntro.split(" ");
                      const showFullText = expandedCourses[course.id];

                      return (
                        <div
                          key={course.id}
                          className={`flex flex-col items-center justify-start gap-3 border-2 ${borderColor} rounded-xl p-4 min-w-[32%]`}
                        >
                          <img
                            src={course.image.url}
                            className="rounded-xl"
                            alt={course.name}
                          />
                          <h1>{course.name}</h1>

                          <p>
                            {/* Show the first 30 words, and the rest if "Read More" is clicked */}
                            {showFullText
                              ? course.courseIntro
                              : words.slice(0, 30).join(" ") +
                                (words.length > 30 ? "..." : "")}
                          </p>

                          {/* Add "Read More" or "Show Less" button conditionally */}
                          {words.length > 30 && (
                            <button
                              onClick={() => toggleShowMore(course.id)}
                              className="text-blue-500 font-bold"
                            >
                              {showFullText ? "Show Less" : "Read More"}
                            </button>
                          )}

                          <button
                            onClick={() => {
                              openSingleCourse(course.slug);
                            }}
                            className={`bg-background1 dark:bg-dark_background1 ${textColor2} ${hoverBgColor} hover:text-dark_primary_text border-2 ${borderColor} p-2 duration-300 rounded-xl font-bold `}
                          >
                            Go to the course
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => scrollRight(index)}
                    className={`absolute -right-11 top-1/2 transform -translate-y-1/2 bg-background1 dark:bg-dark_background1 ${textColor2} ${hoverBgColor} hover:text-dark_primary_text border ${borderColor} p-2 duration-300 rounded-full z-10`}
                  >
                    <FaLongArrowAltRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          );
        }
      )}
    </section>
  );
};

export default LearnIndianCulture;
