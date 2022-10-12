/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    screens: {
      'ss': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      width: {
        '97': '370px',
      },
      padding: {
        '57': '160px',
      },
      margin: {
        '81': '360px',
        '35': '130px',
      },
      fontSize: {
        s: '0.6rem',
        xxs: '0.4rem', // Extend Optional
        ss: '0.4rem',
      },
    },
  },

  plugins: [require('tailwindcss-font-inter')({ // default settings
    a: -0.0223,
    b: 0.185,
    c: -0.1745,
    baseFontSize: 16,
    importFontFace: true,
  })],
}