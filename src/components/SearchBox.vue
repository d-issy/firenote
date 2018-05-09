<template>
  <div class="search-box">
    <form action="">
      <input v-model="query" type="text" placeholder="Search note...">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: ''
    }
  }
}
</script>

<style scoped>
.search-box input {
  display: block;
  max-width: 100%;
  width: 450px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 15px auto;
  font-size: 16px;
}
</style>
