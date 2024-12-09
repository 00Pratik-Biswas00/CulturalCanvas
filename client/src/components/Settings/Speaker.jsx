import React, { useState } from "react";
import { useSpeaker } from "../../components/SpeakerContext/SpeakerContext";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import i18n from "i18next";
const languages = [
  { code: "en", langCode: "en-US" },
  { code: "hi", langCode: "hi-IN" },
  { code: "bn", langCode: "bn-IN" },
  { code: "ta", langCode: "ta-IN" },
  { code: "te", langCode: "te-IN" },
  { code: "ml", langCode: "ml-IN" },
  { code: "kn", langCode: "kn-IN" },
  { code: "mr", langCode: "mr-IN" },
  { code: "gu", langCode: "gu-IN" },
  { code: "pa", langCode: "pa-IN" },
  { code: "or", langCode: "or-IN" },
  { code: "as", langCode: "as-IN" },
  { code: "ur", langCode: "ur-IN" },
  { code: "sa", langCode: "sa-IN" },
  { code: "brx", langCode: "brx-IN" },
  { code: "doi", langCode: "doi-IN" },
  { code: "ks", langCode: "ks-IN" },
  { code: "kok", langCode: "kok-IN" },
  { code: "mai", langCode: "mai-IN" },
  { code: "mni", langCode: "mni-IN" },
  { code: "ne", langCode: "ne-IN" },
  { code: "sat", langCode: "sat-IN" },
  { code: "sd", langCode: "sd-IN" },
];

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

        // Find the matching language code or fall back to English
        const languageMatch = languages.find(
          (lang) => lang.code === i18n.language
        );
        utterance.lang = languageMatch ? languageMatch.langCode : "en-US";

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
