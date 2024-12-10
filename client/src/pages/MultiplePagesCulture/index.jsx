import React from "react";
import religiousImg from "../../assets/culture/religious.png";
import { useTranslation } from "react-i18next";
import MyButton1 from "../../components/Buttons/MyButton1";

const ReligionCulture = () => {
  const { t } = useTranslation();
  const religionContent = t("ReligionData", { returnObjects: true });

  return (
    <section className="duration-300 text-primary_text dark:text-dark_primary_text">
      <div
        style={{ backgroundImage: `url(${religiousImg})` }}
        className="relative bg-center bg-cover bg-fixed bg-no-repeat"
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-background1 dark:bg-dark_background1 opacity-80 z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center">
          <div className="flex flex-col px-16 py-5 gap-10">
            {religionContent.map((content, index) => {
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
                  className={`backdrop-blur-lg bg-opacity-80 p-5 rounded-lg flex items-center justify-center gap-5 ${shadowClass}`}
                >
                  <img
                    src={content.image}
                    alt=".."
                    className=" h-[20rem] rounded-xl"
                  />

                  <div className="flex flex-col items-center  gap-5">
                    <h1 className="text-[3rem] font-extrabold tracking-wide ">
                      {content.name}{" "}
                    </h1>
                    <p>{content.intro}</p>

                    <MyButton1
                      classDesign={
                        "bg-gradient-to-r from-[#193c70e9] to-[#1489386c] hover:to-[#174926]"
                      }
                      buttonLink={content.religionLink}
                      buttonName={`Want to know more about ${content.name}?`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReligionCulture;
