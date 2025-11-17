/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        big: ['"BigShouldersDisplay"', "sans-serif"],
        iceland: ["Iceland", "sans-serif"],
        iceberg: ["Iceberg", "sans-serif"],
      },
      colors: {
        red01: "#E84A4A",
        green01: "#7DFF68",
        black01: "#000003",
        black02: "#242425",
        black03: "#333333",
        black04: "#080306",
        black05: "#010103",
        black06: "#1D1D20",
        gray01: "#7A7A7A",
        gray02: "#B2B7BA",
        gray03: "#262626",
        gold01: "#E8BB4A",
        blue01: "#429DD1",
        purple01: "#B71553",
      },
      transform: {
        "preserve-3d": "preserve-3d",
      },
      rotate: {
        "x-5": "rotateX(5deg)",
        "y-10": "rotateY(10deg)",
      },
      clipPath: {
        "cut-corner": "polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)",
      },
    },
  },
  plugins: [],
};
