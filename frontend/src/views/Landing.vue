<template>
  <div id="wrapper" class="my-purple">
      <h1>Landing page</h1>
      <router-link to="/transfer">Transfer</router-link>
  </div>
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#wrapper{
  background-color: #533A71;
  width: 100%;
  height: 100%;
}

.my-white{
  color: #FDFDFD
}
</style>
