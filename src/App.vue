<template>
  <div id="app">
    <mainPage/>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import  mainPage  from "./components/main";
export default {
  name: "app",
  components: {
    mainPage
  }
};
</script>

<style>
#app {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: url("~@/assets/捕获2.png") center no-repeat;
  background-size: cover;
}

* {
  padding: 0;
  margin: 0;
}
</style>
