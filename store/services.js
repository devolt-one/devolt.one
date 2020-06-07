export const state = () => ({
  records: []
})

export const mutations = {
  SET_RECORDS(state, list) {
    state.records = list
  }
}

export const actions = {
  async load({ state, commit }) {
    const files = await require.context(
      '~/assets/content/services',
      true,
      /\.json$/
    )

    const regex = new RegExp(`(\\.\\/)(${this.$i18n.locale})`)
    const posts = files
      .keys()
      .filter((key) => key.match(regex))
      .map((key) => ({ ...files(key) }))

    commit('SET_RECORDS', posts)
  }
}
