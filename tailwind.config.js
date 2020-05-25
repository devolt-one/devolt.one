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
      container: {
        padding: '15px'
      },
      fontFamily: {
        sans: [
          'Work Sans',
          // ...defaultTheme.fontFamily.sans
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
        ],
        montserrat: [
          'Montserrat',
          // ...defaultTheme.fontFamily.sans
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
        ]
      },
      fontSize: {
        '6xl': '4rem'
      },
      colors: {
        primary: {
          base: '#C5517D'
        },
        secondary: {
          base: '#88E7C4'
        }
      },
      height: {
        '1/2sc': '50vh'
      }
    }
  },
  variants: {
    textColor: ['responsive']
  },
  plugins: []
}
