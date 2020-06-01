export const state = () => ({
  active: false
})

export const mutations = {
  toggle(state, status = null) {
    state.active = status ?? !state.active
  }
}

export const getters = {
  isActive(state) {
    return state.active
  }
}
