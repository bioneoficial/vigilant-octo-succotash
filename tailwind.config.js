/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 0 30px rgba(200,208,216,.3)",
      },
      zIndex: {
        99: 99,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-linear":
          "linear-gradient(var(--tw-gradient-angle,180deg), var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "faixa-1": "url('/images/Faixa-1.svg')",
          "faixa-2": "url('/images/Faixa-2.svg')",
          "FKTN": "url('/images/FKTN.svg')",
          "leia-quadrinhos": "url('/images/leia-quadrinhos.svg')",
      },
      fontFamily: {
        'eurostile': ['Eurostile', 'sans-serif'],
        'eurostyle-normal': ['EuroStyleNormal', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
