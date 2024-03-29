const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    // mode : 'jit',
    content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
    // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    media: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily : {
          sans : ['Poppins', ...defaultTheme.fontFamily.sans]
        },
        backgroundImage: {
          // 'sign': "url('/img/sign.jpg')"
        },
        colors : {
          gray : {
            50: '#F9FAFB',
            300: '#F1F1F1',
            400: '#E0E0E0',
            500: '#AEAEAE',
            600: '#7E7E7E',
            900: '#303030',
          },
          blue : {
            500 : '#1976D2',
            600 : '#0C63D4',
          },
          teal : {
            500 : '#40B2B7',
            600 : '#188F95',
          },
          orange : {
            500 : '#F4694C',
            600 : '#ee5c3e',
          }
        },
        spacing : {
          '4.5' : '1.125rem',
        },
        boxShadow : {
          lg : '0px 5px 14px rgba(244, 105, 76, 0.20)'
        }
      },
    },
    variants: {
        extend: {},
    },
    // plugins: [
    //   require('@tailwindcss/forms')
    // ],
}