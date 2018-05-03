<template>
  <article>
    <p>{{ note.text }}</p>
    <time>作成日 {{ note.createdAt | time }}</time>
    <div class="control-area">
      <button @click="edit">編集</button>
      <button @click="destory">削除</button>
    </div>
  </article>
</template>

<script>
import {firestore} from 'firebase'
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
      console.log(`edit ${this.$props.note.id}`)
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
  box-sizing: border-box;
  flex-basis: 33%;
  padding: 10px;
  margin-bottom: 10px;
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
.control-area {
  float: right;
  margin-right: 10px;
}
</style>
