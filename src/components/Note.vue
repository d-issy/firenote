<template>
  <article>
    <p>{{ note.text }}</p>
    <time>作成日 {{ note.createdAt | time }}</time>
  </article>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    note: {
      type: Object,
      required: true
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
</style>
