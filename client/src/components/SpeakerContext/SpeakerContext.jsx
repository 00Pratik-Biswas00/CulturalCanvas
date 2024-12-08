import React, { createContext, useState, useContext } from "react";

const SpeakerContext = createContext();

export const useSpeaker = () => {
  return useContext(SpeakerContext);
};

export const SpeakerProvider = ({ children }) => {
  const [showSpeaker, setShowSpeaker] = useState(true); // Default is YES

  const toggleSpeaker = (value) => {
    setShowSpeaker(value === "YES");
  };

  return (
    <SpeakerContext.Provider value={{ showSpeaker, toggleSpeaker }}>
      {children}
    </SpeakerContext.Provider>
  );
};
