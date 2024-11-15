import React, { useRef } from "react";
import { dummyData } from "../../utils/constants";
import DifferentCourses from "./DifferentCourses";

const LearnIndianCultureCourses = () => {
  const { LanguagesTypes, CuisinesTypes, ArtsCraftsTypes, SportsTypes } =
    dummyData;

  const scrollRefs = useRef([]); // Array to hold multiple references

  const scrollLeft = (index) => {
    scrollRefs.current[index]?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = (index) => {
    scrollRefs.current[index]?.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300">
      <h1 className="text-6xl tracking-wider font-extrabold font-gallient py-2 text-center">
        Learning the Nuances of Indian Culture 📝
      </h1>

      <div className="flex flex-col my-5 gap-24">
        <DifferentCourses
          scrollLeft={() => scrollLeft(0)} // Use index 0 for the first scrollable section
          scrollRight={() => scrollRight(0)}
          scrollRef={(el) => (scrollRefs.current[0] = el)} // Assign to index 0
          courses={LanguagesTypes}
          title="Learn Different Languages of India"
        />

        <DifferentCourses
          scrollLeft={() => scrollLeft(1)} // Use index 1 for the second scrollable section
          scrollRight={() => scrollRight(1)}
          scrollRef={(el) => (scrollRefs.current[1] = el)} // Assign to index 1
          courses={CuisinesTypes}
          title="Learn Different Cuisines of India"
        />

        <DifferentCourses
          scrollLeft={() => scrollLeft(2)} // Use index 2 for the second scrollable section
          scrollRight={() => scrollRight(2)}
          scrollRef={(el) => (scrollRefs.current[2] = el)} // Assign to index 2
          courses={ArtsCraftsTypes}
          title="Learn Different Arts of India"
        />

        <DifferentCourses
          scrollLeft={() => scrollLeft(3)} // Use index 3 for the second scrollable section
          scrollRight={() => scrollRight(3)}
          scrollRef={(el) => (scrollRefs.current[3] = el)} // Assign to index 3
          courses={SportsTypes}
          title="Learn Different Sports of India"
        />
      </div>
    </section>
  );
};

export default LearnIndianCultureCourses;
