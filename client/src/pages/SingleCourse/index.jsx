import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import ReactPlayer from "react-player";
import { GET_COURSE_QUERY } from "../../graphql/courseQuery";

import bengaliImg from "../../assets/courses/bengali.png";
import pratikImg from "../../assets/courses/pratik.jpg";
import MailImg from "../../assets/courses/mail.avif";
import LinkedInImg from "../../assets/courses/linkedin.jpeg";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const SingleCourse = () => {
  const { slug } = useParams();
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startPosition = useRef(0);
  const scrollLeftValue = useRef(0);
  const [course, setCourse] = useState(null);
  const { loading, error, data } = useQuery(GET_COURSE_QUERY, {
    variables: { slug },
  });

  useEffect(() => {
    if (data && data.getCourse) {
      setCourse(data.getCourse);
    }
  }, [data]);

  // console.log(course);

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
    scrollRef.current.scrollBy({ left: -478, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 479, behavior: "smooth" });
  };

  const [currentVideo, setCurrentVideo] = useState("");
  const [currentHeading, setCurrentHeading] = useState("");

  const handleVideoClick = (videoUrl, heading) => {
    setCurrentVideo(videoUrl);
    setCurrentHeading(heading);
  };
  //console.log(course);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <div>Error fetching course!</div>;
  }

  return (
    <section className=" text-primary_text dark:text-dark_primary_text  duration-300">
      {course && (
        <div
          style={{ backgroundImage: `url(${course.image.url})` }}
          className="relative bg-center bg-contain bg-fixed bg-no-repeat">
          {/* Black overlay */}
          <div className="absolute inset-0 bg-background1 dark:bg-dark_background1 opacity-80 z-10"></div>
          <div className="relative z-20 flex flex-col items-center justify-center">
            {/* heading */}
            <div className="flex flex-wrap items-center justify-center py-4 text-5xl gap-8 font-bold font-playfair uppercase ">
              <p className="tracking-wider">Expand</p>
              <p className="tracking-wider">Your</p>
              <p className="tracking-wider">Knowledge</p>
              <p className="tracking-wider">in</p>
              <p className="tracking-wider">{course.name}</p>
            </div>

            {/* description */}

            <div className="">
              <div className=" py-4 px-16 text-lg flex flex-col items-start justify-center gap-3 w-full h-full">
                <div className="flex flex-col gap-3">
                  <h1 className=" font-semibold font-montserrat text-2xl">
                    Brief History of {course.name}
                  </h1>
                  <p className="">{course.courseHistory}</p>

                  <h1 className=" font-semibold font-montserrat text-2xl">
                    Course Introduction
                  </h1>
                  <p className="">{course.courseIntro}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <h1 className=" font-semibold font-montserrat text-2xl">
                    Teacher's Introduction
                  </h1>
                  <div className="flex items-center gap-3 ">
                    <img
                      src={course.instructor.photo?.url}
                      alt="teacher"
                      className=" rounded-full w-32 h-32"
                    />

                    <div className="flex flex-col justify-center gap-3">
                      <div className=" flex items-center gap-3">
                        <p className="text-4xl leading-7 font-bold font-playfair">
                          {course.instructor.name}
                        </p>
                        {course.instructor.occupation && (
                          <p className=" text-xl font-lato pt-1">
                            {" "}
                            {course.instructor.occupation}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-start gap-4">
                        <a
                          href={`mailto:${course.instructor.email}`}
                          target="blank"
                          rel="noopener"
                          className="flex items-center justify-center gap-2 font-medium duration-500 transition-transform hover:scale-105 transform-cpu">
                          <img
                            src={MailImg}
                            alt="Mail"
                            className=" rounded-full w-8 h-8"
                          />
                          <p>{course.instructor.email}</p>
                        </a>

                        {course.instructor.linkedin && (
                          <a
                            href={course.instructor.linkedin}
                            target="blank"
                            rel="noopener"
                            className="flex items-center justify-center gap-2 font-medium duration-500 transition-transform hover:scale-105 transform-cpu">
                            <img
                              src={LinkedInImg}
                              alt="Linkedin"
                              className=" rounded-full w-8 h-8"
                            />
                            <p>{course.instructor.name}</p>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* videos */}

              <div className=" py-4 px-16 bg-background1 dark:bg-dark_background1">
                <div className="py-4 flex flex-col gap-4 items-center justify-center w-full h-full">
                  <h1 className="font-bold font-playfair text-5xl tracking-wider">
                    {currentHeading || "Select a video to start learning"}
                  </h1>
                  <ReactPlayer
                    url={currentVideo}
                    width="100%"
                    height="100%"
                    className="max-w-full max-h-full m-auto"
                    playing={!!currentVideo}
                    controls
                    config={{
                      file: {
                        attributes: { controlsList: "nodownload" },
                      },
                    }}
                  />
                </div>
                <div className="relative w-full">
                  <button
                    onClick={scrollLeft}
                    className="absolute -left-11 top-1/2 transform -translate-y-1/2 bg-background1 dark:bg-dark_background1 text-highlight_hover hover:bg-highlight_hover hover:text-dark_primary_text border border-highlight_hover p-2 duration-300 rounded-full z-10">
                    <FaLongArrowAltLeft className="w-5 h-5" />
                  </button>

                  <div
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    className="flex gap-7 w-full overflow-x-auto scroll-smooth outline-none"
                    style={{ scrollSnapType: "x mandatory" }}>
                    {course.modules.map((content, ind) => (
                      <div
                        key={ind}
                        className="flex-shrink-0 w-[32%] max-w-[32%] flex flex-col items-center justify-start gap-3 border-2 border-highlight_hover rounded-xl p-4">
                        <img
                          src={content.image.url}
                          className="rounded-xl"
                          alt="bengali"
                        />
                        <h1 className="font-montserrat text-xl text-center">
                          {content.name}
                        </h1>
                        <p className="text-center">{content.description}</p>
                        <div
                          onClick={() =>
                            handleVideoClick(
                              content.video.Location,
                              content.name
                            )
                          }
                          className="bg-background1 dark:bg-dark_background1 text-highlight_hover hover:bg-highlight_hover hover:text-dark_primary_text border-2 border-highlight_hover p-2 duration-300 rounded-xl font-bold cursor-pointer">
                          Start Learning
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={scrollRight}
                    className="absolute -right-11 top-1/2 transform -translate-y-1/2 bg-background1 dark:bg-dark_background1 text-highlight_hover hover:bg-highlight_hover hover:text-dark_primary_text border border-highlight_hover p-2 duration-300 rounded-full z-10">
                    <FaLongArrowAltRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleCourse;
