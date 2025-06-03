/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#166088",
        secondary: "#DBE9EE",
        tertiary: "#4A6FA5",
      },
      fontFamily: {
        nerko: ["NerkoOne-Regular"],
      },
    },
  },
  plugins: [],
};
