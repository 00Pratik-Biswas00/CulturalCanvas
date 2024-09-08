import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { Hindi_Home } from "../utils/lang/hi";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: Hindi_Home,
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
