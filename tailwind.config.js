/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      purple: "#635fc7",
      lightPurple: "#a8a4ff",
      gray900: "#000112",
      gray800: "#20212c",
      gray700: "#2b2c37",
      gray600: "#3e3f4e",
      gray400: "#828fa3",
      gray300: "#e4ebfa",
      gray: "#f4f7fd",
      white: "#ffffff",
      red500: "#ea5555",
      red100: "#ff9898",
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans"],
    },
  },
  plugins: [],
};
