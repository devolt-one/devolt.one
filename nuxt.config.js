export default {
  target: 'static',
  ssr: true,
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Work+Sans:ital,wght@0,400;0,700;0,900;1,400&family=Open+Sans:ital,wght@0,400;0,700;0,900;1,400&display=swap'
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
  /*
   ** Global CSS
   */
  css: ['~assets/css/_animations.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
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
    '@nuxtjs/color-mode'
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
    'nuxt-i18n'
  ],

  pwa: {
    meta: {
      favicon: false,
      name: 'Devolt - Development Agency',
      ogSiteName: 'Devolt'
    }
  },

  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID || 'UA-XXXXXXXX-X'
  },

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English'
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru-RU.js',
        name: 'Русский'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    },
    seo: false,
    lazy: true,
    langDir: 'lang/'
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
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
