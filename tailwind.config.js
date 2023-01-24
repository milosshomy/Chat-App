/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        subHeading: "hsl(276, 100%, 81%)",
        recievedMessage: "hsl(276, 55%, 52%)",
        sentMessage: "hsl(271, 15%, 43%)",
        placeholder: "hsl(206, 6%, 79%)",
        mainHeading: "hsl(271, 36%, 24%)",
        paragraph: "hsl(270, 7%, 64%)",
        linearGradientFrom: "hsl(293, 100%, 63%)",
        linearGradientTo: "hsl(264, 100%, 61%)",
        whiteClr: "hsl(0, 0%, 100%)",
        appBg: "hsl(270, 20%, 96%)",
        submitBtnBg: "hsl(271, 36%, 24%)",
        radioBtnBorder: "hsl(289, 100%, 72%)",
      },
      fontFamily: {
        rubik: "'Rubik', sans-serif",
      },
      keyframes: {
        slideLeft: {
          "0%": {
            transform: "translateX(-200%)",
          },
          "90%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideRight: {
          "0%": {
            transform: "translateX(200%)",
            "90%": { transform: "translateX(-10px)" },
            "100%": { transform: "translateX(0%)" },
          },
        },
      },
    },
  },
  plugins: [],
};
