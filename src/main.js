import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import * as firebase from 'firebase'
import config from './config/firebase.config'

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(user => {
  store.commit('auth', user)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
