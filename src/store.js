import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    auth: {
      login: false,
      user: null
    },
    editor: {
      open: false,
      id: null
    }
  },
  mutations: {
    loadingDone (state) {
      state.loading = false
    },
    auth (state, user) {
      state.auth.login = !!user
      if (user) {
        state.auth.user = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          providerId: user.providerId
        }
      } else {
        state.auth.user = null
      }
      state.loading = false
    },
    openEditor (state, id) {
      state.editor.id = id || null
      state.editor.open = true
    },
    closeEditor (state) {
      state.editor.id = null
      state.editor.open = false
    }
  },
  actions: {

  },
  getters: {
    user_id: state => {
      return (state.auth.login && state.auth.user.uid) || null
    }
  }
})
