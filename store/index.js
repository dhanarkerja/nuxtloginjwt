//store/index.js
export const state = () => ({
  user: null
})
// getters untuk ambil data
export const getters = {
  user(state) {
    return state.user
  },
  
  isLoggedIn(state) {
    return state.loggedIn
  }
}
// ngeset data di state awal
export const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
}
