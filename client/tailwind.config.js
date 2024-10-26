/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark_background1: "#000407",
        dark_background2: "#121212",
        background1: "#fff",
        background2: "#fff3e4",
        shadow: "#232222",
        dark_primary_text: "#fff",
        primary_text: "#000407",
        dark_secondary_text: "#06038D",
        secondary_text: "#121212",
        // highlight: "#e1251a",
        // highlight: "#4B70D1",
        highlight: "#f49738",
        highlight_dark: "#FF671F",

        // highlight_hover: "#193c70e9",
        highlight_hover: "#148938",
        highlight_hover_dark: "#174926",

        // highlight_hover: "#f43a3a77",
      },

      boxShadow: {
        "custom-orange": "0 10px 20px #f496386c",
        "custom-blue": "0 10px 20px #06038D6c",

        "custom-green": "0 10px 20px #1489386c",
      },

      fontFamily: {
        open_sans: ["Open Sans", "sans-serif"], // normal text
        playfair: ["Playfair Display", "serif"],
        lato: ["Lato", "sans-serif"], // secondary heading
        montserrat: ["Montserrat", "sans-serif"], // primary heading
        ubuntu: ["Ubuntu", "sans-serif"], // buttons
        logo_text: ["Macondo", "cursive"],
        gallient: ["Gallient", "sans-serif"],
      },
    },
  },
  plugins: [],
};
