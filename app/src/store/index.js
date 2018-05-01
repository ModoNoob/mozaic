import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV === 'development'
const state = {
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null
}

export default new Vuex.Store({
  strict: DEBUG,
  state,
  actions,
  getters,
  mutations
})
