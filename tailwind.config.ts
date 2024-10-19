/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/hero-bg.png')",
      }),
      colors: {
        green: {
          "500": "#0CE449",
        },
        accentBlue: {
          "500": "#0057FF",
        },
        accentYellow: {
          "100": "#FFF7CC", // Kuning terang
          "500": "#FFD700", // Kuning standar
          "700": "#FFB700", // Kuning lebih gelap
        },
        gray: {
          "100": "#A8A8AB",
          "500": "#323437",
        },
        black: "#141414",
        "black-1": "#0E100F",
        white: "#FEFCE1",
      },
    },
  },
  plugins: [],
};
