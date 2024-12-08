import React, { useState } from "react";
import { IoIosSettings } from "react-icons/io";
import MyButton2 from "../Buttons/MyButton2";
import SettingsPopUp from "./SettingsPopUp";

const Settings = ({ handleSpeakerToggle }) => {
  const [isSettingsPopUp, setIsSettingsPopUp] = useState(false);
  const toggleSettingsPopup = () => {
    setIsSettingsPopUp(!isSettingsPopUp);
  };

  return (
    <div
      className={`fixed bottom-1 left-2   lg:bottom-9 z-40  flex items-center `}
    >
      <div className={` absolute -top-5`}>
        <button
          onClick={toggleSettingsPopup}
          className=" p-2 border-2 bg-highlight_dark hover:bg-highlight duration-300 rounded-full"
        >
          <IoIosSettings className=" text-dark_primary_text w-7 h-7" />
        </button>
      </div>

      {isSettingsPopUp && (
        <SettingsPopUp
          onClose={toggleSettingsPopup}
          onToggle={handleSpeakerToggle}
        />
      )}
    </div>
  );
};

export default Settings;
