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
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-10 duration-500">
      <div className="w-full flex flex-col items-center justify-center gap-16">
        {/* <div>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("hi")}>Hindi</button>
        </div> */}
        {homeContent.map((content, ind) => (
          <div
            key={ind}
            className={`backdrop-blur-lg shadow-md ${content.shadow} bg-opacity-80    rounded-b-[3rem]  relative flex flex-col lg:flex-row  lg:justify-between px-16 py-10  `}
          >
            {ind % 2 === 0 ? (
              <>
                {/* Text on the left, image on the right */}
                <div className="flex flex-col items-start justify-center gap-5 ">
                  <div className=" text-7xl font-extrabold  ">
                    Unveiling India's Timeless Treasures
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

                  {/* <a
                    href={content.buttonLink}
                    className="uppercase bg-highlight hover:bg-highlight_hover text-primary_text hover:text-white px-2 py-1 rounded font-ubuntu duration-500 transition-transform hover:scale-105 transform-cpu"
                  >
                    Get Started
                  </a> */}
                  <button class="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-[#193c70e9] to-[#148938] hover:to-[#174926]">
                    <span class="relative text-sm text-white">Get Started</span>
                    <div class="flex items-center -space-x-3 translate-x-3">
                      <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </button>
                </div>

                <div className="w-full h-full relative flex items-center justify-center">
                  <svg
                    id="sw-js-blob-svg"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <defs>
                      {" "}
                      <linearGradient
                        id="sw-gradient"
                        x1="0"
                        x2="1"
                        y1="1"
                        y2="0"
                      >
                        {" "}
                        <stop
                          id="stop1"
                          stop-color="rgba(244, 151, 56, 1)"
                          offset="0%"
                        ></stop>{" "}
                        <stop
                          id="stop2"
                          stop-color="rgba(20, 137, 56, 1)"
                          offset="100%"
                        ></stop>{" "}
                      </linearGradient>{" "}
                    </defs>{" "}
                    <path
                      fill="none"
                      d="M25.7,-30.2C31.4,-25.9,32.6,-16,32.3,-7.2C31.9,1.5,30.1,8.9,26.6,15.8C23.2,22.8,18.1,29.2,11.1,32.8C4.1,36.3,-4.8,36.9,-11.4,33.6C-18,30.2,-22.3,22.8,-25.7,15.5C-29.2,8.2,-31.8,1.1,-31.6,-6.4C-31.3,-14,-28.1,-21.8,-22.4,-26.1C-16.6,-30.3,-8.3,-30.8,0.9,-31.9C10.1,-32.9,20.1,-34.4,25.7,-30.2Z"
                      width="100%"
                      height="100%"
                      transform="translate(50 50)"
                      stroke-width="1"
                      stroke="url(#sw-gradient)"
                    ></path>{" "}
                  </svg>
                  {/* <img
                    className="relative  z-10 object-cover rounded-full"
                    src={content.image}
                    alt="Profile"
                  /> */}
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
                  <div className="flex items-center gap-4 relative">
                    <p className="text-lg leading-8 font-medium text-primary_text dark:text-dark_primary_text">
                      {content.para}
                    </p>
                    {/* <button
                      onClick={() => speakText(content.para)}
                      aria-label="Speak Text"
                      className="text-2xl absolute -right-14"
                    >
                      🔊
                    </button> */}
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
