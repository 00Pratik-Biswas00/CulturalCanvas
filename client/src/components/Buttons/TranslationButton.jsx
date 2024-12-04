import React, { useState } from "react";
import Modal from "../modals/Language.jsx";
import axios from "axios";
import { MdLanguage } from "react-icons/md";

const ML_API_URL = import.meta.env.VITE_API_KEY_FLASKAPI;

const TranslationButton = ({ text }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [translation, setTranslation] = useState("");

  const LANGUAGES = [
    "English",
    "Hindi",
    "Bengali",
    "Tamil",
    "Marathi",
    "Gujarati",
  ];

  const handleTranslate = async () => {
    if (!selectedLanguage) return alert("Please select a language.");
    try {
      const response = await fetch(`${ML_API_URL}/translate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, language: selectedLanguage }),
      });
      const data = await response.json();
      if (data.translation) setTranslation(data.translation);
      else alert(data.error || "Translation failed.");
    } catch (error) {
      alert("Error connecting to server.");
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="bg-highlight_hover_dark hover:bg-highlight_hover transition-transform hover:scale-125 duration-700 transform-cpu text-white p-2 rounded"
      >
        <MdLanguage className="w-5 h-5 text-dark_primary_text" />
      </button>

      {isDropdownOpen && (
        <div className="absolute mt-2 bg-white border rounded shadow-lg z-10">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="block w-full border-none focus:ring-0 p-2"
          >
            <option value="" disabled>
              Choose a language
            </option>
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
          <button
            onClick={handleTranslate}
            className="bg-green-600 text-white px-4 py-2 mt-2 w-full rounded"
          >
            Translate
          </button>
        </div>
      )}

      {translation && (
        <p className="mt-20 text-gray-700">
          <strong>Translation:</strong> {translation}
        </p>
      )}
    </div>
  );
};

export default TranslationButton;
