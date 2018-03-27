import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV === 'development'
const state = {
  spotifyAuthInfo: {
    clientID: '9f23f4f6a47f4ca9aea4d7bf2ee29762',
    scopes: 'user-library-read',
    redirectUri: 'http://localhost:8080/spotify_redirect',
    accessToken: null
  }
}

export default new Vuex.Store({
  strict: DEBUG,
  state,
  actions,
  getters,
  mutations
})
