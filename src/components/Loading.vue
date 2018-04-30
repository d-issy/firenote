<template>
    <div id="loading">
      <div id="loading-text">Loading{{ dots }}</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      sep: 1,
      timer: null
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.sep = this.sep + 1 > 3 ? 1 : this.sep + 1
    }, 500)
  },
  destroyed () {
    clearInterval(this.timer)
  },
  methods: {
    update () {
      this.sep = this.sep + 1 > 3 ? this.sep + 1 : 1
    }
  },
  computed: {
    dots () {
      console.log(this.sep)
      return '.'.repeat(this.sep)
    }
  }
}
</script>

<style scoped>
#loading {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 3;
    color: #fff;
    background-color: #000;
    font-size: 32px;
}
#loading-text {
    position:relative;
    top: 50%;
    text-align: center;
}
</style>
