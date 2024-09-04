import React from "react";
import upImg from "../../assets/Heritage/up.png";
import { dummyData } from "../../utils/constants";

const StateCultures = () => {
  const { StateCulturesData } = dummyData;

  return (
    <div className="text-primary_text dark:text-dark_primary_text flex flex-col py-5 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 gap-y-10">
        {dummyData.StateCulturesData.map((content, index) => {
          let shadowClass;
          let borderClass;

          if (index % 3 === 0) {
            shadowClass = "shadow-custom-orange ";
            borderClass = "border-highlight";
          } else if (index % 3 === 1) {
            shadowClass = "shadow-custom-blue";
            borderClass = "border-secondary_text dark:border-background1";
          } else if (index % 3 === 2) {
            shadowClass = "shadow-custom-green";
            borderClass = "border-highlight_hover ";
          }

          return (
            <div
              className={`backdrop-blur-lg bg-opacity-80  rounded-lg flex flex-col items-center gap-1`}
            >
              <a
                href={content.individualPage}
                className="flex items-center justify-center "
              >
                <img
                  src={content.stateImg}
                  className="w-full h-full duration-500 transition-transform hover:scale-105 transform-cpu  "
                />
              </a>

              <div
                className={` ${borderClass} ${shadowClass} border-x-2 border-t-2 font-bold font-ubuntu px-5 py-2 relative flex items-center justify-center rounded-xl -bottom-5 `}
              >
                <p className="text-xl">{content.stateName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StateCultures;
