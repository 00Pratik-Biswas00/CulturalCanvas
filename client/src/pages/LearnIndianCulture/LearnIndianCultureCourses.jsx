// LearnIndianCultureCourses.js
import React, { useRef } from "react";
import money from "../../assets/explorePlaces/predictPoster.png";
import { CiLink } from "react-icons/ci";
import LanguageCourse from "./LanguageCourse";

const LearnIndianCultureCourses = () => {
  const scrollRefs = useRef([]);

  const scrollLeft = (index) => {
    scrollRefs.current[index].scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = (index) => {
    scrollRefs.current[index].scrollBy({ left: 500, behavior: "smooth" });
  };

  const courses = Array(10).fill({
    image: money,
    description: "Want to learn more about this Language? Check Below",
    name: "Bengali",
    icon: CiLink,
  });

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300">
      <h1 className="text-6xl tracking-wider font-extrabold font-gallient py-2 text-center">
        Learning the Nuances of Indian Culture📝
      </h1>

      <LanguageCourse
        scrollLeft={() => scrollLeft(0)}
        scrollRight={() => scrollRight(0)}
        scrollRef={(el) => (scrollRefs.current[0] = el)}
        courses={courses}
        title="Learn Different Languages of India"
      />
    </section>
  );
};

export default LearnIndianCultureCourses;
