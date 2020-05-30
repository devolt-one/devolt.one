// const localeDomains = require('~/config/locale-domains')

export const state = () => ({
  cacheVersion: '',
  version: 'published'
  // localeDomains
})

export const mutations = {
  setVersion(state, version) {
    state.version = version
  },
  setCacheVersion(state, version) {
    state.cacheVersion = version
  }
}

export const actions = {
  // nuxtServerInit(context, { req, redirect }) {
  //   if (req.headers.host.startsWith('ru')) {
  //     this.app.i18n.defaultLocale = 'ru'
  //   }
  // }
}
