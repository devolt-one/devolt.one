/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      xs: '320px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        primary: {
          base: '#C5517D'
        },
        secondary: {
          base: '#88E7C4'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
