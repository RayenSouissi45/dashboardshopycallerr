/** @type {import('tailwindcss').Config} */

const colors = require('./src/ui/theme/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      colors,
      opacity: {
        1: '.1',
        2: '.2',
        3: '.3',
        4: '.4',
      },
    },
  },
  plugins: [],
};
