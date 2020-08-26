import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userID: 12345678, // userID is a number. 12345678
  firstName: 'John',
  lastName: 'Doe'
}

const mutations = { // https://vuex.vuejs.org/guide/mutations.html
  setUserID (state, payload) {
    state.userID = payload
  },
  setFirstName (state, payload) {
    state.firstName = payload
  },
  setLastName (state, payload) {
    state.lastName = payload
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
