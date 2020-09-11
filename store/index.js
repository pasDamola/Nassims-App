// import stateOptions from '~/static/json/nigeria-states-and-local-govts.json'

export const state = () => ({
  states: [],
  isAppForm: true
})

// export const getters = {
//   getStates: state => state.states
// }

// export const actions = {
//   fetchStates ({ commit }) {
//     commit('loadStates', stateOptions)
//     return stateOptions
//   }
// }

export const mutations = {
  SET_VIEW_STATE (state, view) {
    state.isAppForm = view
  }
}
