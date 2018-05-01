<template>
  <div class="notes">
    <Note v-for="(note, _, index) in notes" :key="index" :note="note" />
  </div>
</template>

<script>
import {firestore} from 'firebase'
import Note from '@/components/Note'
export default {
  components: {
    Note
  },
  data () {
    return {
      notes: []
    }
  },
  beforeMount () {
    // TOOD: 並び順を実装する
    firestore().collection('notes').get().then(query => {
      this.notes = query.docs.map(note => ({ ...note.data(), id: note.id }))
    }).catch(() => {
      console.error('ノートの取得に失敗しました。')
    })
  }
}
</script>

<style scoped>
.notes {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.notes::after {
    content:"";
    display: block;
    width:30%;
  }
</style>
