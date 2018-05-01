<template>
  <div id="login-form">
    <form>
      <h1>ログイン</h1>
      <input v-model="email" type="text" placeholder="メールアドレス">
      <input v-model="password" type="password" placeholder="パスワード">
      <button @click.prevent="login">ログイン</button>
      <div id="errors" v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import * as firebase from 'firebase'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(err => {
        switch (err.code) {
          case 'auth/invalid-email':
            this.error = 'メールアドレスが正しくありません。'
            break
          case 'auth/wrong-password':
            this.error = 'メールアドレスまたはパスワードが間違っています。'
            break
          case 'auth/user-disabled':
            this.error = 'このユーザーは無効化されています。'
            break
          default:
            this.error = '不明なエラーです。'
        }
      })
      this.password = ''
    }
  }
}
</script>

<style scoped>
#login-form {
  max-width: 350px;
  width: 100%;
  border: 1px solid #aaa;
  border-radius: 5px;
  margin: 50px auto;
  padding: 15px;
}
h1 {
  text-align: center;
  font-size: 24px;
}
input {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 8px;
  font-size: 20px;
  margin-bottom: 10px;
}
button {
  width: 100%;
  border: 0;
  padding: 5px;
  font-size: 20px;
  background-color: #03A9F4;
  color: #fff;
}
#errors {
    color: #f00;
    margin-top: 8px;
    padding: 10px;
    font-weight: bold;
    background-color: #ffd7d7;
    font-size: 13px;
    border: 1px solid #f00;
    border-radius: 2px;
}
</style>
