import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ChatBotBg from "../../assets/chatbot/chatbot.png";
import namaste from "../../assets/chatbot/namaste.png";
import StartChat from "./StartChat";

const LanguageOptions = [
  "Bengali",
  "Hindi",
  "English",
  "Tamil",
  "Assamese",
  "Bodo",
  "Dogri",
  "Gujarati",
  "Kashmiri",
  "Kannada",
  "Konkani",
  "Maithili",
  "Malayalam",
  "Manipuri",
  "Marathi",
  "Nepali",
  "Oriya",
  "Punjabi",
  "Sanskrit",
  "Santali",
  "Sindhi",
  "Telugu",
  "Urdu",
];

const ChatBotPopUp = ({ onClose }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default to English
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleInputClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const handleStartChat = () => {
    if (!selectedLanguage) {
      setSelectedLanguage("English"); // Ensure English is set if no language is chosen
    }
    setIsChatOpen(true);
  };

  const sortLanguagesAlphabetically = (languages) => {
    return languages.slice().sort((a, b) => a.localeCompare(b));
  };

  return (
    <div
      style={{ backgroundImage: `url(${ChatBotBg})` }}
      className="absolute bottom-8 -right-10 z-50 flex items-center justify-end bg-center bg-contain bg-no-repeat rounded-xl duration-500"
    >
      <div className="absolute inset-0 bg-dark_background1 opacity-50 z-10 rounded-xl"></div>

      <div className="relative z-20">
        <div className="flex justify-between items-center w-full text-2xl px-5 py-3 font-playfair font-bold text-dark_primary_text">
          <h1 className="tracking-wider">Cultural Canvas ChatBot</h1>
          <button onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>

        <div className="flex items-center rounded-lg max-w-[20rem] md:max-w-full">
          <div className="flex w-full flex-col px-5">
            <div className="flex flex-col items-center">
              {!isChatOpen ? (
                <div
                  className="flex flex-col items-center justify-start gap-5 bg-background rounded-lg overflow-auto py-5
                    w-[270px] h-[240px]
                    min-[360px]:w-[280px] min-[360px]:h-[250px]
                    sm:w-[280px] sm:h-[250px]
                    md:w-[350px] md:h-[420px]
                    lg:w-[450px] lg:h-[420px]
                    xl:w-[420px] xl:h-[520px]"
                >
                  <div>
                    <img
                      src={namaste}
                      alt="Namaste"
                      className="rounded-xl w-60 h-60"
                    />
                  </div>

                  <form>
                    <div className="relative flex flex-col items-center justify-center gap-3 w-full">
                      <input
                        className="text-dark_primary_text py-1 cursor-pointer bg-[#2a3d4c] hover:bg-[#1b2934] rounded-xl focus:outline-none focus:border focus:border-dark_primary_text w-full placeholder:text-dark_primary_text text-center"
                        placeholder="Choose Your Language"
                        value={selectedLanguage}
                        onClick={handleInputClick}
                        readOnly
                      />

                      {isDropdownOpen && (
                        <div className="absolute bottom-full my-1 w-full bg-black rounded-xl max-h-52 overflow-y-auto z-30">
                          {sortLanguagesAlphabetically(LanguageOptions).map(
                            (language, index) => (
                              <div
                                key={index}
                                className="px-4 py-2 text-center text-dark_primary_text hover:bg-[#1b2934] cursor-pointer"
                                onClick={() => handleLanguageSelect(language)}
                              >
                                {language}
                              </div>
                            )
                          )}
                        </div>
                      )}

                      <div
                        className="text-center text-dark_primary_text py-1 cursor-pointer bg-[#2a3d4c] hover:bg-[#1b2934] rounded-xl focus:outline-none focus:border focus:border-highlight w-full"
                        onClick={handleStartChat}
                      >
                        Start Chat
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                <div
                  className="flex flex-col items-center justify-end gap-5 bg-background rounded-lg py-5
                    w-[270px] h-[240px]
                    min-[360px]:w-[280px] min-[360px]:h-[250px]
                    sm:w-[280px] sm:h-[250px]
                    md:w-[350px] md:h-[420px]
                    lg:w-[450px] lg:h-[420px]
                    xl:w-[420px] xl:h-[520px]"
                >
                  <StartChat
                    selectedLanguage={selectedLanguage}
                    onClose={() => setIsChatOpen(false)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBotPopUp;
