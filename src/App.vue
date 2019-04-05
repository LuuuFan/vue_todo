<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/header.vue'

export default {
  name: 'app',
  components: {
    Header,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}
#app { 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50px auto;
  width: 50%;
}
</style>
