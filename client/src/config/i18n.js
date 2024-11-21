import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { Static_Information } from "../utils/lang/langStaticInfo";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: Static_Information,
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["queryString", "cookie", "localStorage", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
