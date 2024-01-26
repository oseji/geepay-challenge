/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        bookBazaar: "#6160DC",
        artisanAisle: "#54C5EB",
        toyTroop: "#FFB74A",
        xStore: "#FF4A55",
        hoverHighlight: "#34CAA5",
        appBG: "#FAFAFA",
        appBorders: "#E5EAEF",
      },
      width: {
        "6/10": "60%",
        "4/10": "40%",

        mobileTable: "500px",
      },
    },
  },
  plugins: [],
};
