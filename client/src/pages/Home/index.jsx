import React from "react";
import { useTranslation } from "react-i18next";
import MyButton1 from "../../components/Buttons/MyButton1";
import HomePageBlob from "../../components/Blobs/HomePageBlob";

const Home = () => {
  const { t, i18n } = useTranslation();
  const homeContent = t("Home", { returnObjects: true });

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
      <div className="w-full flex flex-col items-center justify-center gap-16">
        {/* <div>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("hi")}>Hindi</button>
        </div> */}
        {homeContent.map((content, ind) => (
          <div
            key={ind}
            className={`backdrop-blur-lg shadow-md ${content.shadow} bg-opacity-80    rounded-b-[3rem]  relative flex flex-col lg:flex-row  lg:justify-between px-16 py-5  `}
          >
            {ind % 2 === 0 ? (
              <>
                {/* Text on the left, image on the right */}
                <div className="flex flex-col items-start justify-center gap-5 ">
                  <div className=" text-7xl font-extrabold  ">
                    {content.headingName}
                  </div>
                  <div className="flex items-center gap-4 relative">
                    <p className="  font-lato">{content.para}</p>
                    {/* <button
                      onClick={() => speakText(content.para)}
                      aria-label="Speak Text"
                      className="text-2xl absolute -left-14"
                    >
                      🔊
                    </button> */}
                  </div>

                  <MyButton1
                    buttonLink={content.buttonLink}
                    buttonName="VISIT"
                  />
                </div>

                <HomePageBlob diffImages={content.image} />
              </>
            ) : (
              <>
                {/* Image on the left, text on the right */}
                <HomePageBlob diffImages={content.image} />

                <div className="flex flex-col items-end justify-center gap-5 ">
                  <div className=" text-7xl font-extrabold text-right  ">
                    {content.headingName}
                  </div>
                  <div className="flex items-center gap-4 relative">
                    <p className=" text-right  font-lato">{content.para}</p>
                  </div>
                  <MyButton1
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
