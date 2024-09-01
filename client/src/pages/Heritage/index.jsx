import React from "react";
import commonImg from "../../assets/Heritage/a.png";
import { Link } from "react-scroll";
import { FaAnglesRight } from "react-icons/fa6";
import { dummyData } from "../../utils/constants";

const Heritage = () => {
  const { HeritageDetails } = dummyData;
  return (
    <section className="bg-background1 dark:bg-dark_background1 py-4 px-10 duration-300">
      <div>
        <img src={commonImg} alt="Common" />
      </div>

      <div className="flex items-center justify-center py-4 text-7xl gap-12 font-bold font-playfair uppercase text-primary_text dark:text-dark_primary_text">
        <p className="tracking-wider">World</p>
        <p className="tracking-wider">Heritage</p>
        <p className="tracking-wider">Sites</p>
        <p className="tracking-wider">in</p>
        <p className="tracking-wider">India</p>
      </div>

      <div className="flex items-center justify-center gap-10">
        {Object.keys(HeritageDetails).map((key) => (
          <Link
            key={key}
            to={key}
            smooth={true}
            className="uppercase bg-highlight hover:bg-highlight_hover text-primary_text hover:text-white px-2 py-1 rounded font-ubuntu duration-300 transition-transform hover:scale-105 transform-cpu cursor-pointer"
          >
            {key.replace("_", " ")}
          </Link>
        ))}
      </div>

      {Object.entries(HeritageDetails).map(([key, values]) => (
        <div
          key={key}
          id={key}
          className="text-primary_text dark:text-dark_primary_text flex flex-col py-10 pb-10"
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                src={values[0].categoryImg}
                alt="unesco"
                className="rounded-full w-14 h-14"
              />

              <h1 className="text-5xl leading-7 font-medium font-open_sans">
                {values[0].category}
              </h1>
              <FaAnglesRight className="w-8 h-8" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16">
              {values.map((content, index) => {
                // Determine the shadow class based on the index
                let shadowClass;
                let hoverClass;
                if (index % 3 === 0) {
                  shadowClass = "shadow-custom-orange ";
                  hoverClass = "hover:bg-highlight dark:hover:bg-highlight";
                } else if (index % 3 === 1) {
                  shadowClass = "shadow-custom-blue";
                  hoverClass =
                    "hover:bg-secondary_text dark:hover:bg-secondary_text";
                } else if (index % 3 === 2) {
                  shadowClass = "shadow-custom-green";
                  hoverClass =
                    "hover:bg-highlight_hover dark:hover:bg-highlight_hover";
                } else {
                  shadowClass = ""; // Default case if you have more than three cards
                }

                return (
                  <div
                    key={index}
                    className={`backdrop-blur-lg bg-opacity-80 py-4 px-10 rounded-lg flex flex-col items-center ${shadowClass} gap-2`}
                  >
                    <div className="flex flex-col">
                      <img
                        src={content.image}
                        alt={content.name}
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <h2 className="text-3xl tracking-wider font-bold text-center font-montserrat">
                      {content.name}
                    </h2>
                    <p className="mb-12">{content.introduction}</p>
                    <div className="absolute bottom-0">
                      <button
                        className={` ${shadowClass} bg-background1 dark:bg-dark_background1  hover:text-dark_primary_text duration-300 font-bold font-ubuntu p-12 relative flex items-center justify-center rounded-full -bottom-10 ${hoverClass}`}
                      >
                        <p className="absolute text-xl">
                          Know <br /> More
                        </p>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Heritage;
