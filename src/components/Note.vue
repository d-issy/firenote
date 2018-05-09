<template>
  <article>
    <div v-html="text" class="body"></div>
    <div class="footer">
      <time>作成日 {{ note.createdAt | time }}</time>
      <div class="control-area">
        <button @click="edit">編集</button>
        <button @click="destory">削除</button>
      </div>
    </div>
  </article>
</template>

<script>
import {firestore} from 'firebase'
import marked from 'marked'
import moment from 'moment'
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    edit () {
      this.$store.commit('openEditor', this.$props.note.id)
    },
    destory () {
      if (!confirm('削除してよろしいですか')) {
        return
      }
      const id = this.$props.note.id
      firestore().collection('notes').doc(id).delete().catch(() => {
        console.error('削除できませんでした。')
      })
    }
  },
  computed: {
    text () {
      return marked(this.note.text, {
        gfm: true,
        breaks: true,
        sanitize: true
      })
    }
  },
  filters: {
    time (value) {
      return moment(value.toDate()).format('YYYY-MM-DD HH:mm')
    }
  }
}
</script>

<style scoped>
article {
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative;
  box-sizing: border-box;
  flex-basis: 33%;
  padding: 10px;
  margin-bottom: 25px;
}
@media screen and (max-width: 768px) {
  article {
    flex-basis: 49%;
  }
}
@media screen and (max-width: 480px) {
  article {
    flex-basis: 99%;
  }
}
article time {
  font-size: 13px;
}
.body {
  overflow: hidden;
  margin-bottom: 10px;
}
.footer {
  display: block;
  box-sizing: border-box;
  position: absolute;
  right: 10px;
  left: 10px;
  bottom: 5px;
}
.control-area {
  float: right;
  margin-right: 10px;
}
</style>
