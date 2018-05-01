<template>
  <nav>
    <div class="wrapper">
      <h2 id="header-title">firenote</h2>
      <div id="button-area">
        <button @click="write" id="create-button">write</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    write () {
      this.$store.commit('toggleEditor')
    }
  }
}
</script>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  height: 45px;
  top: 0;
  background-color: #00b5ff;
  overflow: hidden;
}
nav .wrapper {
  position: relative;
  overflow: hidden;
}
#header-title {
  display: inline-block;
  position: absolute;
  left: 50%;
  box-sizing: border-box;
  transform: translateX(-50%);
  margin: 0;
  color: #ffffff;
  font-size: 30px;
}
#button-area {
  float: right;
  height: 45px;
  margin-right: 10px;
}
#button-area button {
  height: 35px;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 5px 10px;
  margin: 5px;
  background-color: transparent;
  font-size: 20px;
  color: #fff;
}
#button-area button:hover {
  background-color: #2196f3;
}
</style>
