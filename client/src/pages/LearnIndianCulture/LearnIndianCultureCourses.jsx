import React, { useRef } from "react";
import LanguageCourse from "./LanguageCourse";
import { dummyData } from "../../utils/constants";

const LearnIndianCultureCourses = () => {
  const { LanguagesTypes } = dummyData;

  const scrollRefs = useRef([]);

  const scrollLeft = (index) => {
    scrollRefs.current[index].scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = (index) => {
    scrollRefs.current[index].scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300">
      <h1 className="text-6xl tracking-wider font-extrabold font-gallient py-2 text-center">
        Learning the Nuances of Indian Culture📝
      </h1>

      <LanguageCourse
        scrollLeft={() => scrollLeft(0)}
        scrollRight={() => scrollRight(0)}
        scrollRef={(el) => (scrollRefs.current[0] = el)}
        courses={LanguagesTypes}
        title="Learn Different Languages of India"
      />
    </section>
  );
};

export default LearnIndianCultureCourses;
