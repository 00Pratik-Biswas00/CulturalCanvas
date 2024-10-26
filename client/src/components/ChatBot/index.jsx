import React, { useState } from "react";
import { FaRobot } from "react-icons/fa6";
import ChatBotPopUp from "./ChatBotPopUp";
import MyButton2 from "../Buttons/MyButton2";

const Chatbot = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="fixed bottom-1 right-1 lg:right-14 lg:bottom-8 z-40 mt-8 flex items-center">
      <div
        className={`
        absolute `}
      >
        <MyButton2
          classDesign={
            "text-highlight_dark hover:text-dark_primary_text  dark:text-dark_primary_text"
          }
          buttonLink={togglePopup}
          buttonName1={"🤖"}
          buttonName2={"Chat"}
        />
      </div>

      {isPopupOpen && <ChatBotPopUp onClose={togglePopup} />}
    </div>
  );
};

export default Chatbot;
