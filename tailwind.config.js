/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      './pages/**/*.vue',
      './layouts/**/*.vue',
      './components/**/*.vue',
      './lang/**/*.js'
    ],
    options: {
      whitelist: [
        'dark-mode',
        'ul',
        'ol',
        'li',
        'text-primary-base',
        'md:inline',
        'swiper-wrapper'
      ],
      whitelistPatternsChildren: [/service-description$/, /svg.*/, /swiper.*/]
    }
  },
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
          '"Open Sans"',
          // ...defaultTheme.fontFamily.sans
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
        ],
        montserrat: [
          'Montserrat',
          // ...defaultTheme.fontFamily.sans
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
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
          surface: '#1a1a1a',
          darken: '#141414'
        }
      },
      boxShadow: {
        fab:
          '0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12)'
      },
      spacing: {
        '05': '0.125rem',
        '18': '4.5rem',
        '22': '5.5rem'
      },
      inset: {
        '4': '1rem'
      },
      zIndex: {
        '-10': -10
      }
    },
    typography: (theme) => ({
      dark: {
        css: [
          {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.gray.300')
            }
          }
        ]
      }
    })
  },
  variants: {
    backgroundColor: ['dark'],
    textColor: ['dark', 'responsive'],
    padding: ['responsive', 'last'],
    margin: ['responsive', 'last'],
    typography: ['dark', 'responsive']
  },
  plugins: [
    require('tailwindcss-dark-mode')(),
    require('@tailwindcss/typography')()
  ]
}
