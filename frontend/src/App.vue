<template>
  <div id="app">
    <Landing></Landing>
    <router-view></router-view>
  </div>
</template>

<script>
import Landing from './views/Landing.vue'

export default {
  name: 'App',
  components: {
    Landing
  }
}
</script>

<style>
html,
body {
  background-color: #533A71;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #533A71;
  margin-top: 60px;
}
</style>
