import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    maxAttempts: 10,
    minValue: 1,
    maxValue: 10
  },
  mutations: {
    SET_MAX_ATTEMPTS(state, n) {
      state.maxAttempts = n
    },
    SET_MIN_VALUE(state, n) {
      state.minValue = n
    },
    SET_MAX_VALUE(state, n) {
      state.maxValue = n
    }
  },
  actions: {
    setMaxAttempts(context, maxAttempts) {
      context.commit("SET_MAX_ATTEMPTS", maxAttempts)
    }
  }
})
