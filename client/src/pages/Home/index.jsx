import React from "react";
import { useTranslation } from "react-i18next";
import MyButton1 from "../../components/Buttons/MyButton1";
import HomePageBlob from "../../components/Blobs/HomePageBlob";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Home = () => {
  const { t, i18n } = useTranslation();
  const homeContent = t("HomeData", { returnObjects: true });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const speakText = (text) => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    } else {
      const chunks = text.match(/[^।!?]+[।!?]/g) || [text];
      chunks.forEach((chunk) => {
        const utterance = new SpeechSynthesisUtterance(chunk.trim());
        utterance.lang = i18n.language === "hi" ? "hi-IN" : "en-US";
        speechSynthesis.speak(utterance);
      });
    }
  };

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-10 duration-500">
      <div className="w-full flex flex-col items-center justify-center gap-20">
        <div className="flex gap-5">
          <button
            className="p-5 hover:bg-blue-700"
            onClick={() => changeLanguage("en")}
          >
            English
          </button>
          <button
            className="p-5 hover:bg-blue-700"
            onClick={() => changeLanguage("hi")}
          >
            Hindi
          </button>
          <button
            className="p-5 hover:bg-blue-700"
            onClick={() => changeLanguage("bn")}
          >
            Bengali
          </button>
        </div>
        {homeContent.Home.map((content, ind) => (
          <div
            key={ind}
            className={`backdrop-blur-lg shadow-md ${content.shadow} bg-opacity-80    rounded-b-[3rem]  relative flex flex-col lg:flex-row  lg:justify-between px-5 sm:px-16 lg:py-10   `}
          >
            {ind % 2 === 0 ? (
              <>
                {/* Text on the left, image on the right */}
                <div className="flex flex-col z-10 items-start justify-center gap-5 ">
                  <div className=" text-5xl xl:text-7xl font-extrabold  ">
                    {content.headingName}
                  </div>
                  <div className="flex flex-col gap-2  relative">
                    <p className="  font-lato">{content.para}</p>
                    {Array.isArray(content.featuringData) &&
                      content.featuringData.length > 0 && (
                        <div>
                          <h1 className="flex gap-1 items-center pb-2 font-semibold text-lg">
                            <span>Featuring</span>{" "}
                            <MdOutlineKeyboardDoubleArrowRight className="w-5 h-5 mt-[0.28rem]" />
                          </h1>
                          <div className="flex flex-wrap gap-x-20 gap-y-2">
                            {content.featuringData.map((con, i) => (
                              <div key={i} className="flex gap-1 items-center">
                                <span className="text-2xl font-bold">
                                  {con.featureName}
                                </span>{" "}
                                <IoCheckmarkDoneCircle className="text-highlight_hover w-8 h-8" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* <button
                      onClick={() => speakText(content.para)}
                      aria-label="Speak Text"
                      className="text-2xl absolute -left-14"
                    >
                      🔊
                    </button> */}
                  </div>

                  <MyButton1
                    classDesign={
                      "bg-gradient-to-r from-[#193c70e9] to-[#1489386c] hover:to-[#174926]"
                    }
                    buttonLink={content.buttonLink}
                    buttonName={homeContent.homeButtonName}
                  />
                </div>
                <div
                  className=" absolute   flex items-center justify-center opacity-20 dark:opacity-70
                
                w-[18rem] md:w-[28rem] xl:w-[33rem] 2xl:w-[42rem]  
                bottom-[3rem] md:bottom-[20rem] lg:-bottom-5 xl:-bottom-2 2xl:-bottom-5 
                md:left-72 lg:left-32  
                "
                >
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#148938"
                      d="M38.6,-63.5C45.2,-62.9,42.5,-43,40.4,-29.1C38.3,-15.3,36.8,-7.7,41.1,2.5C45.4,12.6,55.5,25.3,57.8,39.4C60.1,53.5,54.4,69,43.5,75.7C32.6,82.4,16.3,80.3,5.9,70C-4.5,59.8,-8.9,41.5,-21.6,35.8C-34.3,30.1,-55.2,37,-64.9,33.2C-74.7,29.3,-73.2,14.6,-71.2,1.2C-69.2,-12.3,-66.6,-24.6,-61,-35.6C-55.4,-46.6,-46.7,-56.3,-36.1,-54.5C-25.4,-52.8,-12.7,-39.6,1.6,-42.4C16,-45.2,31.9,-64.1,38.6,-63.5Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                <div
                  className=" absolute flex items-center justify-center opacity-50 dark:opacity-100
                
                w-[15rem] 
                md:right-[28rem] lg:right-[18rem] xl:right-[23rem] 2xl:right-[30rem]  
                -top-5 
                "
                >
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#f49738"
                      d="M35.1,-58.2C48.6,-53.1,64.6,-49.8,75.6,-40.4C86.7,-31,92.9,-15.5,86.4,-3.8C79.9,8,60.7,16,52.1,29.8C43.6,43.6,45.7,63.15,38.8,72.7C31.9,82.1,15.9,81.5,5.7,71.6C-4.5,61.7,-9,42.5,-16.5,33.4C-24.1,24.3,-34.7,25.2,-47.4,21.3C-60.1,17.4,-74.9,8.7,-77.4,-1.4C-79.8,-11.5,-69.8,-23,-57.8,-28.2C-45.8,-33.3,-31.9,-32.2,-21.9,-39.3C-11.9,-46.3,-6,-61.7,2.4,-65.9C10.9,-70.2,21.7,-63.3,35.1,-58.2Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                <HomePageBlob diffImages={content.image} />
              </>
            ) : (
              <>
                <HomePageBlob diffImages={content.image} />

                <div
                  className=" absolute flex items-center justify-center opacity-20  dark:opacity-70  
                  w-[20rem] sm:w-[28rem]  xl:w-[30rem] 2xl:w-[42rem] 
                 right-10 sm:right-[20rem] lg:right-20  
                 bottom-24 sm:bottom-[20rem] lg:bottom-[1rem] xl:bottom-[1rem]
 "
                >
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#f49738"
                      d="M29.3,-44.7C40.9,-44.1,55.2,-42.1,62,-34.4C68.8,-26.7,68.2,-13.4,69.6,0.8C71,15,74.5,30,69.4,40.7C64.3,51.4,50.7,57.8,37.7,66.6C24.7,75.4,12.4,86.7,-1,88.5C-14.4,90.3,-28.9,82.6,-34,69.3C-39.1,55.9,-34.8,36.8,-43.8,24.3C-52.7,11.8,-74.8,5.9,-74.6,0.1C-74.4,-5.7,-51.9,-11.3,-42.2,-22.5C-32.5,-33.7,-35.7,-50.5,-30.8,-55C-25.9,-59.4,-12.9,-51.6,-2,-48.1C8.9,-44.6,17.8,-45.3,29.3,-44.7Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                <div
                  className="absolute  flex items-center justify-center opacity-50 dark:opacity-100
                
                 w-[15rem]  
                 md:left-[28rem] lg:left-[18rem] xl:left-[23rem] 2xl:left-[30rem]
                
                 -top-10
                 "
                >
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#148938"
                      d="M27.4,-39.2C39.9,-40.2,57.4,-41.8,67,-35.3C76.6,-28.8,78.3,-14.4,70.9,-4.3C63.6,5.9,47.2,11.8,37.3,17.8C27.4,23.8,24.1,29.9,19,43.2C13.8,56.4,6.9,76.9,-0.6,77.9C-8.2,79,-16.3,60.7,-28.6,51.6C-40.9,42.5,-57.4,42.5,-66.3,35.5C-75.3,28.4,-76.7,14.2,-74.5,1.3C-72.3,-11.7,-66.5,-23.3,-60.1,-34.8C-53.6,-46.2,-46.6,-57.4,-36.5,-57.7C-26.4,-58,-13.2,-47.4,-2.9,-42.4C7.5,-37.4,14.9,-38.1,27.4,-39.2Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                <div className=" order-1 lg:order-2 flex flex-col z-10 items-end justify-center gap-5 ">
                  <div className=" text-5xl xl:text-7xl font-extrabold text-right  ">
                    {content.headingName}
                  </div>
                  <div className="flex flex-col gap-2  relative">
                    <p className=" text-right  font-lato">{content.para}</p>
                    {Array.isArray(content.featuringData) &&
                      content.featuringData.length > 0 && (
                        <div>
                          <h1 className="flex gap-1 items-center justify-end pb-2 font-semibold text-lg">
                            <span>Featuring </span>{" "}
                            <MdOutlineKeyboardDoubleArrowRight className="w-5 h-5 mt-[0.28rem]" />
                          </h1>
                          <div className="flex  justify-end flex-wrap gap-x-20 gap-y-2">
                            {content.featuringData.map((con, i) => (
                              <div key={i} className="flex gap-1 items-center">
                                <span className="text-2xl font-bold">
                                  {con.featureName}
                                </span>{" "}
                                <IoCheckmarkDoneCircle className="text-highlight_hover w-8 h-8" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* <button
                      onClick={() => speakText(content.para)}
                      aria-label="Speak Text"
                      className="text-2xl absolute -left-14"
                    >
                      🔊
                    </button> */}
                  </div>
                  <MyButton1
                    classDesign={
                      "bg-gradient-to-r from-[#193c70e9] to-[#1489386c] hover:to-[#174926]"
                    }
                    buttonLink={content.buttonLink}
                    buttonName="VISIT"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
