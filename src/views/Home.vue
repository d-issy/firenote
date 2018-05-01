<template>
  <div class="home">
      <h1>Note List</h1>
      <Notes />
  </div>
</template>

<script>
import Notes from '../components/Notes'
export default {
  name: 'home',
  components: {
    Notes
  }
}
</script>
