import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ChatBotBg from "../../assets/chatbot/chatbot.png";

const TranslatePopup = ({ onClose }) => {
  // Load Google Translate and restrict languages
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      // Check if the script is already added
      if (
        !document.querySelector(
          "script[src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit']"
        )
      ) {
        const script = document.createElement("script");
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);
      }
    };

    // Initialize Google Translate Element
    window.googleTranslateElementInit = () => {
      // Remove the existing widget and re-initialize it when opening the popup
      if (document.getElementById("google_translate_element")) {
        document.getElementById("google_translate_element").innerHTML = "";
      }

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages:
            "as,bn,en,gu,hi,kn,ml,mr,or,pa,ta,te,ur,ks,ne,sd,si,sa,brx,doi,dv,mni,mrj,sat,bh,lep,mai,kok,ks", // 28 Indian languages
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();

    // Clean up the widget when closing the popup
    return () => {
      if (document.getElementById("google_translate_element")) {
        document.getElementById("google_translate_element").innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${ChatBotBg})` }}
      className="absolute top-14 right-5 z-50 flex items-center justify-end bg-center bg-cover bg-no-repeat rounded-xl duration-500"
    >
      <div className="absolute inset-0 bg-dark_background1 opacity-50 z-10 rounded-xl"></div>

      <div className="relative z-20">
        <div className="flex items-center w-full text-2xl px-5 py-3 font-playfair font-bold text-dark_primary_text">
          <button onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>

        <div className="flex items-center rounded-lg  md:max-w-full">
          <div
            className="flex flex-col items-center justify-start gap-5 bg-background rounded-lg overflow-auto py-5
                w-[270px] h-[240px]
                min-[360px]:w-[280px] min-[360px]:h-[250px]
                sm:w-[280px] sm:h-[250px]
                md:w-[350px] md:h-[420px]
                lg:w-[450px] lg:h-[420px]
                xl:w-[350px] xl:h-[520px]"
          >
            <div id="google_translate_element"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslatePopup;
