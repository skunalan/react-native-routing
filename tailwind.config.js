/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "rgb(255, 255, 255)",
        foreground: "rgb(0, 0, 0)",
        text: "rgb(50, 50, 50)",
        primary: "rgb(4, 147, 209)",
        secondary: "rgb(131, 135, 138)",
        muted: "rgb(243, 245, 247)",
        placeholder: "rgb(114, 118, 123)",
      }
    },
  },
  plugins: [],
}