import React from "react";
import { useTranslation } from "react-i18next";

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
    <section className="bg-background1 dark:bg-dark_background1 px-16 py-10 duration-500">
      <div className="w-full flex flex-col items-center justify-center gap-16">
        <div>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("hi")}>Hindi</button>
        </div>
        {homeContent.map((content, ind) => (
          <div
            key={ind}
            className={`backdrop-blur-lg ${content.shadow} bg-opacity-80 p-4 rounded-lg h-[520px] md:h-[450px] lg:h-[500px] xl:h-[500px] max-w-full relative flex items-center justify-between gap-10 w-full`}
          >
            {ind % 2 === 0 ? (
              <>
                {/* Text on the left, image on the right */}
                <div className="flex flex-col items-center justify-center gap-10 w-[180%]">
                  <div className="flex items-center gap-4">
                    <p className="text-lg leading-8 font-medium text-primary_text dark:text-dark_primary_text">
                      {content.para}
                    </p>
                    <button
                      onClick={() => speakText(content.para)}
                      aria-label="Speak Text"
                      className="text-2xl"
                    >
                      🔊
                    </button>
                  </div>

                  <a
                    href={content.buttonLink}
                    className="uppercase bg-highlight hover:bg-highlight_hover text-primary_text hover:text-white px-2 py-1 rounded font-ubuntu duration-500 transition-transform hover:scale-105 transform-cpu"
                  >
                    {content.buttonName}
                  </a>
                </div>

                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={content.image}
                    alt="common img"
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Image on the left, text on the right */}
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={content.image}
                    alt="common img"
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col items-center justify-center gap-10 w-[180%]">
                  <div className="flex items-center gap-4">
                    <p className="text-lg leading-8 font-medium text-primary_text dark:text-dark_primary_text">
                      {content.para}
                    </p>
                    <button
                      onClick={() => speakText(content.para)}
                      aria-label="Speak Text"
                      className="text-2xl"
                    >
                      🔊
                    </button>
                  </div>

                  <a
                    href={content.buttonLink}
                    className="uppercase bg-highlight hover:bg-highlight_hover text-primary_text hover:text-white px-2 py-1 rounded font-ubuntu duration-500 transition-transform hover:scale-105 transform-cpu"
                  >
                    {content.buttonName}
                  </a>
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
