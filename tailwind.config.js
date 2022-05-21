module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        almarai: ['Almarai'],
        poppins: ['Poppins']
      }
    },
    screens: {
      'sm': '200px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}
