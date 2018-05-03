<template>
  <div id="new-screen">
    <div class="edit-area">
      <textarea v-model="text" @keydown.enter="onEnter" :rows="rows" placeholder="ノートを書きます" ref="newNote"></textarea>
      <div v-if="error" class="error">{{ error }}</div>
      <div>
        <button class="save-btn" @click="save">保存</button>
        <button class="close-btn" @click="close">破棄</button>
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
    onEnter (e) {
      if (e.metaKey || e.ctrlKey) {
        this.save()
      }
    },
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
    },
    close () {
      if (!confirm('本当に破棄してよろしいですか？')) {
        return
      }
      this.$store.commit('toggleEditor')
    }
  },
  computed: {
    rows () {
      let n = this.text.split('\n').length
      return n
    }
  },
  mounted () {
    this.$nextTick(() => this.$refs.newNote.focus())
  }
}
</script>

<style scoped>
#new-screen {
  position: absolute;
  top: 45px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  overflow-y: auto;
}
.edit-area {
  width: 100%;
  max-width: 640px;
  border-radius: 5px;
  position: relative;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
  padding: 10px;
}
.edit-area h2 {
  text-align: center;
}
.edit-area textarea,
.edit-area textarea:focus {
  width: 100%;
  height: auto;
  border-radius: 5px;
  border: 1px solid #aaa;
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
}
.close-btn {
  background-color: #ff5c5c;
}
.save-btn {
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
