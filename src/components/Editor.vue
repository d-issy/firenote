<template>
  <div id="new-screen">
    <div class="edit-area">
      <textarea v-model="text" :rows="rows" placeholder="ノートを書きます"></textarea>
      <div v-if="error" class="error">{{ error }}</div>
      <div>
        <button @click="save">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
import {firestore} from 'firebase'
export default {
  data () {
    return {
      text: '',
      error: null
    }
  },
  methods: {
    save () {
      if (!this.text) {
        this.error = 'メモが入力されていません。'
        return
      }
      const {text} = this
      const user = this.$store.getters.user_id
      const now = new Date()
      firestore().collection('notes').add({
        text,
        user,
        createdAt: now,
        updatedAt: now
      }).then(() => {
        this.$store.commit('toggleEditor')
      }).catch(() => {
        this.error = 'firestoreへの接続でエラーが発生しました。'
      })
    }
  },
  computed: {
    rows () {
      let n = this.text.split('\n').length
      return n
    }
  }
}
</script>

<style scoped>
#new-screen {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  overflow-y: auto;
}
.edit-area {
  width: 100%;
  max-width: 640px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  background-color: #fff;
}
.edit-area h2 {
  text-align: center;
}
.edit-area textarea,
.edit-area textarea:focus {
  width: 100%;
  height: auto;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  resize: vertical;
  padding: 15px;
  font-size: 18px;
  line-height: 1.5;
}
.edit-area button {
  border: 0;
  float: right;
  margin-right: 10px;
  padding: 5px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #2196f3;
}
.error {
  width: 100%;
  border: 1px solid #f00;
  border-radius: 3px;
  box-sizing: border-box;
  padding: 5px;
  margin-bottom: 5px;
  color: #f00;
  background-color: #fcc;
  font-weight: bold;
}
</style>
