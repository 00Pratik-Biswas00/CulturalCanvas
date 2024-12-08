import React, { useState } from "react";
import { useSpeaker } from "../../components/SpeakerContext/SpeakerContext";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

const Speaker = ({ webData }) => {
  const { showSpeaker } = useSpeaker();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakText = (text) => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const chunks = text.match(/[^।!?]+[।!?]/g) || [text];
      chunks.forEach((chunk) => {
        const utterance = new SpeechSynthesisUtterance(chunk.trim());
        utterance.lang = "en-US"; // Adjust based on language as needed
        utterance.onend = () => setIsSpeaking(false);
        speechSynthesis.speak(utterance);
      });
    }
  };

  return (
    showSpeaker && (
      <button
        onClick={() => speakText(webData)}
        aria-label={isSpeaking ? "Stop Speaking" : "Speak Text"}
        className="text-2xl absolute -left-10"
      >
        {isSpeaking ? (
          <div className="bg-slate-400 rounded-full p-1 animate-pulse">
            <HiSpeakerXMark />
          </div>
        ) : (
          <div className="p-1 bg-slate-400 rounded-full">
            <HiSpeakerWave />
          </div>
        )}
      </button>
    )
  );
};

export default Speaker;
