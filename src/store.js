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
    toggleEditor (state) {
      state.editor.open = !state.editor.open
      if (!state.editor.open) {
        state.editor.id = null
      }
    },
    openEditor (state, id) {
      state.editor.open = true
      state.editor.id = id
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
