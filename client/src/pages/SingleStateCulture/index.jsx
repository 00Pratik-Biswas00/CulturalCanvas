import React from "react";
import tajImg from "../../assets/culture/stateCultureBg.png";
import { IoIosLink } from "react-icons/io";
import i18next from "i18next";
import { dummyData } from "../../utils/constants";
import MyButton3 from "../../components/Buttons/MyButton3";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SingleStateCulture = ({
  stateName,
  greetingImg,
  greetingName,
  stateImg,
  stateHistory,
  stateHistoryVideo,
  cuisineDetails,
  cuisineCourse,
  clothingImg,
  clothingDetails,
  languageImg,
  languageDetails,
  languageCourse,
  artsDetails,
  artsCourse,
}) => {
  const { t } = useTranslation();
  const commonStaticNames = t("CommonStaticInfo", { returnObjects: true });
  const currentLanguage = i18next.language;

  const { SingleState } = dummyData;
  const navigate = useNavigate();

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text duration-300">
      <div
        style={{ backgroundImage: `url(${tajImg})` }}
        className="relative bg-center bg-cover bg-fixed bg-no-repeat flex flex-col items-center justify-center "
      >
        <div className="flex gap-16 items-center justify-center">
          {/* {stateName.map((word, wordIndex) => (
            <div
              key={wordIndex}
              className="flex relative z-20 gap-5 justify-center items-center h-[35vh] text-dark_primary_text"
            >
              {word.split("").map((letter, letterIndex) => (
                <h1
                  key={letterIndex}
                  className={`text-7xl bg-black px-2 pb-2 rounded-xl font-extrabold text-dark_primary_text font-pangaia uppercase ${
                    letterIndex % 2 === 0 ? "rotate-6" : "-rotate-6"
                  }`}
                >
                  {letter}
                </h1>
              ))}
            </div>
          ))} */}

          {currentLanguage === "en" ? (
            stateName.map((word, wordIndex) => (
              <div
                key={wordIndex}
                className="flex relative z-20 gap-5 justify-center items-center h-[35vh] text-dark_primary_text"
              >
                {word.split("").map((letter, letterIndex) => (
                  <h1
                    key={letterIndex}
                    className={`text-7xl bg-black px-2 pb-2 mb-5 rounded-xl font-extrabold text-dark_primary_text font-pangaia uppercase ${
                      letterIndex % 2 === 0 ? "rotate-6" : "-rotate-6"
                    }`}
                  >
                    {letter}
                  </h1>
                ))}
              </div>
            ))
          ) : (
            <div className="flex relative z-20 gap-5 justify-center items-center h-[35vh] text-dark_primary_text">
              <h1 className="text-7xl bg-black px-5 pb-4 mb-5 rounded-xl font-extrabold text-dark_primary_text font-pangaia uppercase">
                {stateName.join(" ")}
              </h1>
            </div>
          )}
        </div>

        {/* SVG Curve */}
        <svg
          className="w-full "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 300"
        >
          <path
            className=" fill-current text-[#fff] dark:text-dark_background1"
            d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,165.3C672,149,768,107,864,90.7C960,75,1056,85,1152,96C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        {/* Greeting */}

        <div className=" absolute flex flex-col items-center justify-center px-5 py-2  gap-5 border border-b-0 border-dark_background1 dark:border-background1 bg-background1 dark:bg-dark_background1 rounded-xl mt-40 ">
          <h1 className=" font-playfair text-3xl font-extrabold">
            {commonStaticNames.ourGreeting}
          </h1>
          <img src={greetingImg} className="w-80 rounded-xl" />

          <MyButton3
            classDesign={
              "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text "
            }
            buttonName={`${greetingName}`}
            onClick={() => {
              navigate(`/culture-tradition/greetings`);
            }}
            buttonIcon={<IoIosLink />}
          />
        </div>
      </div>

      {/* History */}
      <div className="flex flex-col items-center justify-center px-16 py-10 gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className=" font-extrabold text-5xl  ">
            {commonStaticNames.briefHistory}
          </h1>
          <p className=" opacity-70 text-lg">
            {" "}
            {commonStaticNames.briefHistoryPara}{" "}
          </p>
        </div>

        <div className="relative flex gap-5 items-center ">
          <img
            src={stateImg}
            alt="state image"
            className="  w-72 h-72 object-cover "
          />

          <div className=" flex flex-col gap-3">
            <p className="text-justify text-lg">{stateHistory}</p>
            <div className="flex flex-col items-start justify-center">
              <a
                className="bg-highlight hover:bg-highlight_dark duration-500 px-3 py-1 rounded-xl font-bold"
                href={stateHistoryVideo}
                target="_blank"
              >
                {commonStaticNames.buttonWantToKnowMore} 🔗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cuisines */}
      <div className="flex flex-col items-center justify-center px-16 py-10 gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className=" font-extrabold text-5xl  ">
            {commonStaticNames.cuisines}
          </h1>
          <p className=" opacity-70 text-lg">
            {" "}
            {commonStaticNames.cuisinesPara}{" "}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {cuisineDetails.map((content, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <img src={content.cuisineImage} className="w-80 rounded-xl" />
              <p className=" text-xl font-montserrat">{content.cuisineName}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10">
          <MyButton3
            classDesign={
              "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text "
            }
            buttonName={commonStaticNames.buttonWantToKnowMore}
            onClick={() => {
              navigate(`/culture-tradition/cuisines`);
            }}
            buttonIcon={<IoIosLink />}
          />
          <MyButton3
            classDesign={
              "before:bg-highlight bg-highlight_dark text-dark_primary_text "
            }
            buttonName={commonStaticNames.buttonWantToCook}
            onClick={() => {
              navigate(`${cuisineCourse}`);
            }}
            buttonIcon={<IoIosLink />}
          />
        </div>
      </div>

      {/* Clothing */}
      <div className="flex flex-col items-center justify-center px-16 py-10 gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className=" font-extrabold text-5xl  ">
            {commonStaticNames.clothings}
          </h1>
          <p className=" opacity-70 text-lg">
            {" "}
            {commonStaticNames.clothingPara}{" "}
          </p>
        </div>

        <div className="relative flex gap-5 items-center">
          <div className=" flex flex-col gap-3">
            <p className="text-justify text-lg"> {clothingDetails} </p>
          </div>

          <img
            src={clothingImg}
            alt="West Bengal"
            className=" w-64 h-64 object-cover "
          />
        </div>
      </div>

      {/* Language */}
      <div className="flex flex-col items-center justify-center px-16 py-10 gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className=" font-extrabold text-5xl  ">
            {commonStaticNames.languages}
          </h1>
          <p className=" opacity-70 text-lg">
            {" "}
            {commonStaticNames.languagesPara}{" "}
          </p>
        </div>

        <div className="relative flex gap-5 items-center">
          <img
            src={languageImg}
            alt="West Bengal"
            className=" w-64 h-64 object-cover "
          />

          <div className=" flex flex-col gap-3">
            <p className="text-justify text-lg"> {languageDetails} </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-10">
          <MyButton3
            classDesign={
              "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text "
            }
            buttonName={commonStaticNames.buttonWantToKnowMore}
            onClick={() => {
              navigate(`/culture-tradition/languages`);
            }}
            buttonIcon={<IoIosLink />}
          />
          <MyButton3
            classDesign={
              "before:bg-highlight bg-highlight_dark text-dark_primary_text "
            }
            buttonName={commonStaticNames.buttonWantToCook}
            onClick={() => {
              navigate(`${languageCourse}`);
            }}
            buttonIcon={<IoIosLink />}
          />
        </div>
      </div>

      {/* arts and crafts */}
      <div className="flex flex-col items-center justify-center px-16 py-10 gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className=" font-extrabold text-5xl  ">
            {commonStaticNames.artsCrafts}
          </h1>
          <p className=" opacity-70 text-lg">
            {" "}
            {commonStaticNames.artsCraftsPara}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {artsDetails.map((content, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <img src={content.cuisineImage} className="w-80 rounded-xl" />
              <p className=" text-xl font-montserrat">{content.cuisineName}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10">
          <MyButton3
            classDesign={
              "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text "
            }
            buttonName={commonStaticNames.buttonWantToKnowMore}
            onClick={() => {
              navigate(`/culture-tradition/cuisines`);
            }}
            buttonIcon={<IoIosLink />}
          />
          <MyButton3
            classDesign={
              "before:bg-highlight bg-highlight_dark text-dark_primary_text "
            }
            buttonName={commonStaticNames.buttonWantToCook}
            onClick={() => {
              navigate(`${artsCourse}`);
            }}
            buttonIcon={<IoIosLink />}
          />
        </div>
      </div>
    </section>
  );
};

export default SingleStateCulture;
