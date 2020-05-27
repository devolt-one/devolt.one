/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue'],
  theme: {
    darkSelector: '.dark-mode',
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px'
    },
    extend: {
      container: {
        padding: '15px'
      },
      fontFamily: {
        sans: [
          'Work Sans',
          'Open Sans',
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
        },
        dark: {
          surface: '#212121'
        }
      },
      boxShadow: {
        fab:
          '0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12)'
      },
      inset: {
        '4': '1rem'
      }
    }
  },
  variants: {
    backgroundColor: ['dark'],
    textColor: ['dark', 'responsive']
  },
  plugins: [require('tailwindcss-dark-mode')()]
}
