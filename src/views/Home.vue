<template>
  <div class="home">
      <h1>Note List</h1>
      <SearchBox />
      <NoteList />
  </div>
</template>

<script>
import NoteList from '@/components/NoteList'
import SearchBox from '@/components/SearchBox'

export default {
  name: 'home',
  components: {
    NoteList,
    SearchBox
  }
}
</script>
