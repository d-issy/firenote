<template>
  <div class="home">
      <h1>Note List</h1>
      <NoteList />
  </div>
</template>

<script>
import NoteList from '../components/NoteList'
export default {
  name: 'home',
  components: {
    NoteList
  }
}
</script>
