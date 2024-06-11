import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {}
  },
  mutations: {
    ADD_USER_DATA: (state, data) => {
      state.userData = data
    }
  }
})
