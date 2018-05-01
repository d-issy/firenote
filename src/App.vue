<template>
  <div id="app">
    <Loading v-if="isLoading" />
    <div v-else>
      <Header />
      <div class="wrapper container">
        <Editor v-if="isEditorOpen" />
        <router-view v-if="isLogin" />
        <Login v-else />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

import Loading from '@/components/Loading'
import Login from '@/components/Login'

import Editor from '@/components/Editor'

export default {
  components: {
    Header,
    Loading,
    Login,
    Editor
  },
  computed: {
    isLoading () {
      return this.$store.state.loading
    },
    isLogin () {
      return this.$store.state.auth.login
    },
    isEditorOpen () {
      return this.$store.state.editor.open
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif;
}
.wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 1580px;
}
.container {
  box-sizing: border-box;
  padding: 20px;
  top: 45px;
  bottom: 0;
}
button {
  cursor: pointer;
}
</style>
