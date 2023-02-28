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

      colors: {
        'blue2':'#ABA8A9',
        'green': '#94AFAA',
        "lime":"#ebf6d6",
        'gray': '#a84b62',
        'green': '#779682',
        'rose': '#c2828f',
        'moon': '#ebf6d6',
        'midnight':"#003442",
        'beige':"#dedcd7",
        'dark':"#333333",
        'ring':"#aba89e",
        "blue-200":"#52949e"
      
      },

    
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}