/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...require('tailwindcss/colors'),
        white: '#FFFFFF',
        basic: {
          white: {
            DEFAULT: '#FFFFFF',
            '60%': '#FFFFFF99',
            '80%': '#FFFFFFCC'
          },
          black: {
            100: '#292929',
            200: {
              DEFAULT: '#000000',
              '40%': '#00000066',
              '70%': '#000000B3',
              '80%': '#000000CC'
            }
          }
        },
        primary: {
          50: '#EDF5FF',
          100: '#5493E9',
          200: {
            DEFAULT: '#1865CD',
            '40%': '#1865CD66'
          },
          300: '#06469D'
        },
        gray: {
          50: '#FCFCFC',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#808080',
          500: '#6D6D6D',
          600: '#5D5D5D',
          800: '#454545'
        },
        error: {
          100: '#FF2D2D'
        },
        etc: {
          100: '#979AA3',
          200: '#F8F8F8'
        }
      },
    },
  },
  plugins: [],
};