/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        background1: "#000407",
        background2: "#121212",
        shadow: "#232222",
        primary_text: "#FFFAF4",
        secondary_text: "#a3a09d",
        highlight: "#e1251a",
        highlight_hover: "#f43a3a77",
      },
      fontFamily: {
        open_sans: ["Open Sans", "sans-serif"], // normal text
        playfair: ["Playfair Display", "serif"],
        lato: ["Lato", "sans-serif"], // secondary heading
        montserrat: ["Montserrat", "sans-serif"], // primary heading
        ubuntu: ["Ubuntu", "sans-serif"], // buttons
        logo_text: ["Macondo", "cursive"],
      },
    },
  },
  plugins: [],
};
