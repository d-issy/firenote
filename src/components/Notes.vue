<template>
  <div class="notes">
    <div v-if="!notes.length" class="no-note">ノートはありません</div>
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
    firestore().collection('notes').onSnapshot(snapshot => {
      this.notes = snapshot.docs.map(note => ({...note.data(), id: note.id}))
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
    width: 33%;
}
.no-note {
  width: 100%;
  text-align: center;
}
</style>
