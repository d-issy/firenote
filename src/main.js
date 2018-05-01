import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import * as firebase from 'firebase'
import config from './config/firebase.config'

import 'firebase/firestore'

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(user => {
  store.commit('auth', user)
})

firebase.firestore().settings({
  timestampsInSnapshots: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
