<template>
  <div id="app">
    <Algebra/>
    <Calculus/>
  </div>
</template>

<script>
import Algebra from './components/Algebra.vue'
import Calculus from './components/Calculus.vue'

export default {
  name: 'app',
  components: {
    Algebra,
    Calculus
  }
}
</script>

<style src="../node_modules/c3/c3.min.css"></style>

<style>
.c3-tooltip-container{
	max-width: 240px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
