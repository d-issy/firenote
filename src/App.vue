<template>
  <div id="app">
    <Loading v-if="isLoading" />
    <div v-else id="container">
      <div id="wrapeer">
        <Header />
        <router-view v-if="isLogin" />
        <Login v-else />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Loading from './components/Loading'
import Login from './components/Login'

export default {
  components: {
    Header,
    Loading,
    Login
  },
  computed: {
    isLoading () {
      return this.$store.state.loading
    },
    isLogin () {
      return this.$store.state.auth.login
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif;
}
</style>
