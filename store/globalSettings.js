export const state = () => ({
  settings: []
})
export const mutations = {
  SET_SETTINGS(state, payload) {
    state.settings = payload
  }
}
export const actions = {
  setSettings({ commit }) {
    this.$axios('/api/settings').then((res) => {
      const { settings } = res.data
      const convertedSettings = settings.reduce((acc, currentSetting) => {
        acc[currentSetting.type] = currentSetting.value
        return acc
      }, {})

      commit('SET_SETTINGS', convertedSettings)
    })
  }
}
export const getters = {
  settings: (state) => (type) => {
    return state.settings[type]
  }
}
