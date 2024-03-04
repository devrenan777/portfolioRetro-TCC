module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          background: "#4C14CC",

          secondary: "#201064",

          accent: "#BE1CD3",

          primary: "#0A0E1E",

          textoC1: "#4E159B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
