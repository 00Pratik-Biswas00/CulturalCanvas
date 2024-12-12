import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import ReactPlayer from "react-player";
import { GET_COURSE_QUERY } from "../../graphql/courseQuery";
import MailImg from "../../assets/courses/mail.avif";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { motion } from "framer-motion";

import NotFound from "../../components/NotFound";

const SingleCourse = () => {
  const { maincategory, category, slug } = useParams();
  const scrollRef = useRef(null);
  const [course, setCourse] = useState(null);
  const [currentVideo, setCurrentVideo] = useState("");
  const [currentHeading, setCurrentHeading] = useState("");
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);
  const [isIntroExpanded, setIsIntroExpanded] = useState(false);

  const { loading, error, data } = useQuery(GET_COURSE_QUERY, {
    variables: { slug },
  });

  useEffect(() => {
    if (data && data.getCourse) {
      setCourse(data.getCourse);
    }
  }, [data]);

  const handleVideoClick = (videoUrl, heading) => {
    setCurrentVideo(videoUrl);
    setCurrentHeading(heading);
  };

  const CategoryCheck = () => {
    if (
      !course ||
      !course.courseCategory ||
      !maincategory ||
      !course.courseCategory[maincategory]
    ) {
      return false;
    }
    const actualCategory = course.courseCategory[maincategory];
    return actualCategory.toLowerCase() === category.toLowerCase();
  };

  const categoryMatches = CategoryCheck();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <div>Error fetching course!</div>;
  if (!categoryMatches) return <NotFound />;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-primary_text dark:text-dark_primary_text duration-300"
    >
      {course && (
        <div
          style={{ backgroundImage: `url(${course.image.url})` }}
          className="relative bg-center bg-cover bg-fixed bg-no-repeat min-h-screen"
        >
          <div className="absolute inset-0 bg-background1 dark:bg-dark_background1 opacity-90 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-8">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold font-playfair uppercase text-center mb-8"
            >
              {course.name}
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-background2 dark:bg-dark_background2 p-6 rounded-lg shadow-lg"
              >
                <h2 className="font-semibold font-montserrat text-2xl mb-4">
                  Course History
                </h2>
                <p
                  className={`${isHistoryExpanded ? "" : "line-clamp-3"} mb-2`}
                >
                  {course.courseHistory}
                </p>
                <button
                  onClick={() => setIsHistoryExpanded(!isHistoryExpanded)}
                  className="text-highlight_hover hover:underline flex items-center"
                >
                  {isHistoryExpanded ? (
                    <>
                      Read less <FaChevronUp className="ml-1" />
                    </>
                  ) : (
                    <>
                      Read more <FaChevronDown className="ml-1" />
                    </>
                  )}
                </button>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-background2 dark:bg-dark_background2 p-6 rounded-lg shadow-lg"
              >
                <h2 className="font-semibold font-montserrat text-2xl mb-4">
                  Course Introduction
                </h2>
                <p className={`${isIntroExpanded ? "" : "line-clamp-3"} mb-2`}>
                  {course.courseIntro}
                </p>
                <button
                  onClick={() => setIsIntroExpanded(!isIntroExpanded)}
                  className="text-highlight_hover hover:underline flex items-center"
                >
                  {isIntroExpanded ? (
                    <>
                      Read less <FaChevronUp className="ml-1" />
                    </>
                  ) : (
                    <>
                      Read more <FaChevronDown className="ml-1" />
                    </>
                  )}
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 bg-background2 dark:bg-dark_background2 p-6 rounded-lg shadow-lg"
            >
              <h2 className="font-semibold font-montserrat text-2xl mb-4">
                Instructor
              </h2>
              <div className="flex items-center gap-6">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={course.instructorImage?.url}
                  alt={course.instructorName}
                  className="rounded-full w-32 h-32 object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold font-playfair mb-2">
                    {course.instructorName}
                  </h3>
                  <a
                    href={`mailto:${course.instructorEmail}`}
                    className="flex items-center text-highlight_hover hover:underline"
                  >
                    <img src={MailImg} alt="Email" className="w-6 h-6 mr-2" />
                    {course.instructorEmail}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 flex flex-col items-center justify-center"
            >
              <h2 className="text-3xl font-bold font-playfair text-center mb-8">
                {currentHeading || "Select a video to start learning"}
              </h2>
              {currentVideo && (
                <div className="aspect-w-16 aspect-h-9 w-[840px] h-[473px] mb-8">
                  <ReactPlayer
                    url={currentVideo}
                    width="100%"
                    height="100%"
                    controls
                    config={{
                      file: {
                        attributes: { controlsList: "nodownload" },
                      },
                    }}
                  />
                </div>
              )}
              <div className="relative">
                <button
                  onClick={() =>
                    scrollRef.current.scrollBy({
                      left: -300,
                      behavior: "smooth",
                    })
                  }
                  className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-background1 dark:bg-dark_background1 text-highlight_hover hover:bg-highlight_hover hover:text-dark_primary_text border border-highlight_hover p-2 rounded-full z-10 transition duration-300"
                >
                  <FaLongArrowAltLeft className="w-5 h-5" />
                </button>
                <div
                  ref={scrollRef}
                  className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
                >
                  {course.modules.map((module, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex-shrink-0 w-72 snap-start bg-background2 dark:bg-dark_background2 rounded-xl shadow-lg overflow-hidden"
                    >
                      <img
                        src={module.image?.url}
                        alt={module.name}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-montserrat text-xl font-semibold mb-2">
                          {module.name}
                        </h3>
                        <p className="text-sm mb-4 line-clamp-3">
                          {module.description}
                        </p>
                        <button
                          onClick={() =>
                            handleVideoClick(module.video, module.name)
                          }
                          className="w-full bg-highlight_hover text-white py-2 rounded-lg hover:bg-opacity-80 transition duration-300"
                        >
                          Start Learning
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <button
                  onClick={() =>
                    scrollRef.current.scrollBy({
                      left: 300,
                      behavior: "smooth",
                    })
                  }
                  className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-background1 dark:bg-dark_background1 text-highlight_hover hover:bg-highlight_hover hover:text-dark_primary_text border border-highlight_hover p-2 rounded-full z-10 transition duration-300"
                >
                  <FaLongArrowAltRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default SingleCourse;
