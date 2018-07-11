<template>
  <div id="app">
    <algebra/>
    <hr>
    <calculus/>
    <hr>
    <probability/>
    <hr>
    <machine-learning/>
    <hr>
    <deep-learning/>
  </div>
</template>

<script>
import Algebra from './components/Algebra.vue'
import Calculus from './components/Calculus.vue'
import Probability from './components/Probability.vue'
import MachineLearning from './components/MachineLearning.vue'
import DeepLearning from './components/DeepLearning.vue'

export default {
  name: 'app',
  components: {
    Algebra,
    Calculus,
    Probability,
    MachineLearning,
    DeepLearning
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
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 4px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}
.button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
table.center {
  margin-left:auto; 
  margin-right:auto;
}
</style>
