import React, { useState } from "react";
import { useSpeaker } from "../../components/SpeakerContext/SpeakerContext";
import { AiOutlineClose } from "react-icons/ai";

const Settings = ({ onClose }) => {
  const { showSpeaker, toggleSpeaker } = useSpeaker();
  const [selectedOption, setSelectedOption] = useState(
    showSpeaker ? "YES" : "NO"
  );

  const handleToggle = (value) => {
    setSelectedOption(value);
    toggleSpeaker(value);
  };

  return (
    <div className="absolute bottom-8 left-2 z-20 flex items-center justify-end bg-center bg-cover bg-no-repeat rounded-xl duration-500">
      <div className="absolute inset-0 bg-dark_background1 dark:bg-shadow opacity-90 z-10 rounded-xl"></div>
      <div className="relative z-30">
        <div className="flex justify-between items-center h-20 w-[22rem] px-4 py-3 font-bold text-dark_primary_text">
          <div className="absolute top-1 right-2 text-xl">
            <button onClick={onClose}>
              <AiOutlineClose />
            </button>
          </div>
          <div className="font-playfair">
            Want to display the Speaker buttons?
            <div className="flex items-center gap-4 mt-2">
              {["YES", "NO"].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="speakerToggle"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleToggle(option)}
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
