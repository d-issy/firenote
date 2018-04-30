import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      login: false,
      user: null
    }
  },
  mutations: {
    auth (state, user) {
      state.auth.login = !!user
      state.auth.user = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        providerId: user.providerId
      }
    }
  },
  actions: {

  }
})
