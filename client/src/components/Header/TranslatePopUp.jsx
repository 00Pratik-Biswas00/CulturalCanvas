import React from "react";
import { useTranslation } from "react-i18next";

// Array of Indian languages
const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "bn", label: "Bengali" },
  { code: "ta", label: "Tamil" },
  { code: "te", label: "Telugu" },
  { code: "ml", label: "Malayalam" },
  { code: "kn", label: "Kannada" },
  { code: "mr", label: "Marathi" },
  { code: "gu", label: "Gujarati" },
  { code: "pa", label: "Punjabi" },
  { code: "or", label: "Odia" },
  { code: "as", label: "Assamese" },
  { code: "ur", label: "Urdu" },
  { code: "sa", label: "Sanskrit" },
  { code: "brx", label: "Bodo" },
  { code: "doi", label: "Dogri" },
  { code: "ks", label: "Kashmiri" },
  { code: "kok", label: "Konkani" },
  { code: "mai", label: "Maithili" },
  { code: "mni", label: "Manipuri" },
  { code: "ne", label: "Nepali" },
  { code: "sat", label: "Santali" },
  { code: "sd", label: "Sindhi" },
];

const TranslatePopUp = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Calculate sizes for 3 columns
  const columnSize = Math.ceil(languages.length / 3);
  const firstColumn = languages.slice(0, columnSize);
  const secondColumn = languages.slice(columnSize, columnSize * 2);
  const thirdColumn = languages.slice(columnSize * 2);

  return (
    <div className="absolute top-14 right-40 z-40 flex items-center justify-end bg-center bg-cover bg-no-repeat rounded-xl duration-700">
      <div className="absolute inset-0 bg-dark_background1 opacity-50 z-10 rounded-xl"></div>

      <div className="relative z-20">
        <div className="flex flex-col items-center justify-center w-full text-2xl px-5 py-3 font-playfair font-bold text-dark_primary_text">
          <h1 className="tracking-wider mb-4">Choose Preferred Language</h1>
          <div className="flex gap-8 justify-evenly w-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-2">
              {firstColumn.map((lang) => (
                <button
                  key={lang.code}
                  className="px-4 py-2 text-sm rounded-md bg-highlight_hover hover:bg-highlight_hover_dark text-white transition"
                  onClick={() => changeLanguage(lang.code)}
                  aria-label={`Switch to ${lang.label}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2">
              {secondColumn.map((lang) => (
                <button
                  key={lang.code}
                  className="px-4 py-2 text-sm  rounded-md bg-highlight_hover hover:bg-highlight_hover_dark text-white transition"
                  onClick={() => changeLanguage(lang.code)}
                  aria-label={`Switch to ${lang.label}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-2">
              {thirdColumn.map((lang) => (
                <button
                  key={lang.code}
                  className="px-4 py-2 text-sm  rounded-md bg-highlight_hover hover:bg-highlight_hover_dark text-white transition"
                  onClick={() => changeLanguage(lang.code)}
                  aria-label={`Switch to ${lang.label}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslatePopUp;
