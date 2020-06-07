// const localeDomains = require('~/config/locale-domains')

// export const state = () => ({
//   localeDomains
// })

export const actions = {
  async nuxtServerInit({ dispatch }) {
    // if (req.headers.host.startsWith('ru')) {
    //   this.app.i18n.defaultLocale = 'ru'
    // }
    await dispatch('services/load')
  }
}
