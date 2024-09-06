import React, { useState } from "react";
import { FaRobot } from "react-icons/fa6";
import ChatBotPopUp from "./ChatBotPopUp";  // Correct path if it's in the same folder 

const Chatbot = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="fixed bottom-1 right-1 lg:right-14 lg:bottom-8 z-40 mt-8 flex items-center">
      <div
        className={`text-2xl text-primary_text hover:text-dark_primary_text duration-500 bg-highlight hover:bg-[#FF671F]  rounded-full flex justify-center items-center cursor-pointer w-11 h-11 lg:w-12 lg:h-12
        absolute `}
        onClick={togglePopup}
      >
        <FaRobot />
      </div>

      {isPopupOpen && <ChatBotPopUp onClose={togglePopup} />}
    </div>
  );
};

// Render the Index component to the root element
//ReactDOM.render(<Index />, document.getElementById("root"));

export default Chatbot;