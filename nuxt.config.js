import dotenv from 'dotenv'
import lang from './lang/en-US'

dotenv.config()
const {
  homepage: { meta }
} = lang

export default {
  target: 'static',
  ssr: true,
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'mask-icon', color: '#c5517d', href: '/safari-pinned-tab.svg' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
        crossorigin: true
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Open+Sans:ital,wght@0,400;0,700;0,900;1,400&display=swap'
      }
    ],
    bodyAttrs: {
      class: [
        'font-sans font-regular bg-white dark:bg-dark-surface text-black dark:text-white'
      ]
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#C5517D' },
  loadingIndicator: {
    name: 'cube-grid',
    color: '#C5517D',
    background: '212121'
  },
  /*
   ** Global CSS
   */
  css: ['~assets/css/_animations.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '~plugins/ga.js', mode: 'client' },
    '~plugins/contentful.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt/components
    // TODO: Remove when upgrading to nuxt 2.13+
    '@nuxt/components',
    // Doc: https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // Doc: https://github.com/nuxt-community/imagemin-module
    // '@nuxtjs/imagemin',
    // Doc: https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-i18n',
    '@nuxtjs/markdownit'
  ],

  pwa: {
    meta: {
      favicon: false,
      name: meta.title,
      description: meta.description,
      ogSiteName: 'Devolt',
      ogImage: '/site_card_en.png',
      twitterCreator: 'devolt_one'
    },
    manifest: {
      name: meta.title,
      shortName: 'Devolt',
      description: meta.description
    }
  },

  gtm: {
    dev: false,
    id: process.env.GTM_ID || 'GTM-XXXXXXX'
  },

  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID || 'UA-XXXXXXXX-X',
    GTM_ID: process.env.GTM_ID || 'GTM-XXXXXXX',

    CTF_SPACE_ID: process.env.CTF_SPACE_ID || 'YOURSPACEID',
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN || 'YOURACCESSTOKEN',
    CTF_ENVIRONMENT: process.env.CTF_ENVIRONMENT || 'master',

    DOMAIN_EN: process.env.DOMAIN_EN || 'en.nuxt-app.localhost:3000',
    DOMAIN_RU: process.env.DOMAIN_RU || 'ru.nuxt-app.localhost:3000'
  },

  i18n: {
    // differentDomains: true,
    locales: [
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru-RU.js',
        name: 'Русский',
        // domain: process.env.DOMAIN_RU || 'ru.nuxt-app.localhost:3000'
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English',
        // domain: process.env.DOMAIN_EN || 'en.nuxt-app.localhost:3000'
      }
    ],
    defaultLocale: 'ru',
    // vuex: {
    //   syncLocale: true
    // },
    vueI18n: {
      fallbackLocale: 'en',
      warnHtmlInMessage: 'off'
    },
    seo: false,
    lazy: true,
    langDir: 'lang/'
  },

  markdownit: {
    injected: true
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios', 'contentful'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
