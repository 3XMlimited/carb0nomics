/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'raw': '(max-height: 520px),(max-width:520px)'},
      // => custom checking height and width

      '4xl': {'max': '1500px'},
      // => @media (max-width: 1500px) { ... }

      'xxxl': {'max': '1300px'},
      // => @media (max-width: 1300px) { ... }

      'xxl': {'max': '920px'},
      // => @media (max-width: 920px) { ... }

      'xl': {'max': '820px'},
      // => @media (max-width: 700px) { ... }

      'lg': {'max': '720px'},
      // => @media (max-width: 700px) { ... }

      'md': {'max': '520px'},
      // => @media (max-width: 520px) { ... }

      'sm': {'max': '350px'},
      // => @media (max-width: 350px) { ... }

      'xs': {'max': '300px'},
      // => @media (max-width: 300px) { ... }
    }
  },
  plugins: [],
}