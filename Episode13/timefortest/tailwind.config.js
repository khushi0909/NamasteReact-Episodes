/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  relative: true,
  content: {
  files: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
  ],
},
  theme: {
    screens: {
    'sm1': '500px',
    ...defaultTheme.screens,
  },
  extend: {
   
    boxShadow: {
      '3xl': '-1px 5px 10px 5px rgba(112, 112, 112, 0.2) '
    }
  },
}
}

