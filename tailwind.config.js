/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        parisienne: ["Parisenne", "cursive" ],
      },
      colors: {
        primary: "#00C2FF",
        secondary: "#DD0BFF",
        dark: "#111111",
      },
      container: {
        padding: {
         DEFAULT: "1rem",
         sm: "2rem",
         lg: "3rem",
        },
      },
    },
  },
  plugins: [],
};

