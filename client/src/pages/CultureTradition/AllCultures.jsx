import React from "react";
import { useTranslation } from "react-i18next";

const AllCultures = () => {
  const { t } = useTranslation();
  const allCultureContent = t("AllCulturesData", { returnObjects: true });
  return (
    <div>
      <h1
        id="translate_section"
        className="text-6xl tracking-wider font-extrabold font-gallient py-3  text-center "
      >
        {allCultureContent.allCultureHeading}
      </h1>
      <div className="text-primary_text dark:text-dark_primary_text flex flex-col py-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10">
          {allCultureContent.AllCulturesName.map((content, index) => {
            let shadowClass;
            let hoverClass;
            let borderClass;

            if (index % 3 === 0) {
              shadowClass = "shadow-custom-orange ";
              hoverClass = "hover:bg-highlight dark:hover:bg-highlight";
              borderClass = "border-highlight";
            } else if (index % 3 === 1) {
              shadowClass = "shadow-custom-blue";
              hoverClass =
                "hover:bg-secondary_text dark:hover:bg-background1 dark:hover:text-secondary_text ";
              borderClass = "border-secondary_text dark:border-background1";
            } else if (index % 3 === 2) {
              shadowClass = "shadow-custom-green";
              hoverClass =
                "hover:bg-highlight_hover dark:hover:bg-highlight_hover";
              borderClass = "border-highlight_hover ";
            }

            return (
              <div
                key={index}
                className={`backdrop-blur-lg bg-opacity-80 p-5 rounded-lg flex flex-col items-center ${shadowClass} gap-2`}
              >
                <div className="flex flex-col">
                  <img
                    src={content.cultureImg}
                    alt=".."
                    className="w-full h-full rounded-md"
                  />
                </div>

                <p className=" text-center py-8 pb-10 font-bold font-pangaia text-xl">
                  {content.cultureIntro}
                </p>

                <div className="absolute bottom-0 ">
                  <a
                    href={content.individualPage}
                    className={` border-b-2 ${borderClass} ${shadowClass} ${hoverClass}  hover:text-dark_primary_text font-bold font-ubuntu px-5 py-2 relative flex items-center justify-center rounded-xl -bottom-5 duration-500 transition-transform hover:scale-105 transform-cpu`}
                  >
                    <p className="text-xl">{content.cultureName}</p>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllCultures;
