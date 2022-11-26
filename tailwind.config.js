const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/hero.jpg')",
      },
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
      fontFamily: {
        'myfont': ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}