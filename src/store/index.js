import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    card_bg: require('@/data/cardbg.json'),
  },
  getters:{
    card_bg_type: state => {
      return state.card_bg
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
