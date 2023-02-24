/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      qs: ["Quicksand"],
      dg: ["Dangrek"],
    },
    keyframes: {
      "open-menu": {
        "0%": { transform: "scaleY(0)" },
        "80%": { transform: "scaleY(1.2)" },
        "100%": { transform: "scaleY(1)" },
      },
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(30px, -20px) scale(1.1)",
        },
        "66%": {
          transform: "translate(-30px, 20px) scale(0.9)",
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)",
        },
      },
    },
    animation: {
      "open-menu": "open-menu 0.5s ease-in-out forwards",
      blob: "blob 7s infinite",
    },
  },
  plugins: [],
};
