const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        ...defaultTheme.screens,
        'sm':'640px',
        'md': '768px',
      'llg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '1/1':'1/1',
        '16/9':'16/9'
      },
      backgroundImage: {
        'hero': "url('../public/images/hero.jpg')",
      },
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%'
      },

      fontFamily: {
        'myfont': ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}