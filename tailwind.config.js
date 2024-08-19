/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--davys-gray) / <alpha-value>)',
        secondary: 'rgb(var(--dim-gray) / <alpha-value>)',
        thirdary: 'rgb(var(--silver) / <alpha-value>)',
        darkBlue: 'rgb(var(--delft-blue) / <alpha-value>)',
        darkPurple: 'rgb(var(--dark-purple) / <alpha-value>)',
        accent: 'rgb(var(--blush) / <alpha-value>)',
      }
    },
  },
  plugins: [],
};
