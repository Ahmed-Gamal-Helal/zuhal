export const state = () => ({
  serverErrors: { message: null }
})

export const mutations = {
  SET_SERVER_ERRORS(state, payload) {
    state.serverErrors = payload
  },
  CLEAR_SERVER_ERRORS(state) {
    state.serverErrors = null
  }
}
export const actions = {
  SetServerErrors({ commit }, payload) {
    return new Promise((resolve) => {
      commit('SET_SERVER_ERRORS', payload)
      resolve(true)
    })
  },
  ClearServerErrors({ commit }) {
    return new Promise((resolve) => {
      commit('CLEAR_SERVER_ERRORS')
      resolve(true)
    })
  }
}

export const getters = {
  serverErrors(state) {
    return state.serverErrors
  }
}
