module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        dnd: ['Kaushan\\ Script', 'cursive'],
      },
    },
    screens: {
      phone: '325px',

      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      oxfordBlue: '#101e42',
      silverSand: '#b8c8cf',
      mintCream: '#F5FBF5',
      hookersGreen: '#4e6e58',
      terraCotta: '#e07a5f',
      white: '#ffffff'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
