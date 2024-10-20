/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': {
          100: '#37517E', 
        },
        'custom-button':{
          100: '#47B2E4;',
        },
        'custom-white':{
          100: '#F3F5FA;',

        }
      },
    },
  },
  plugins: [],

};