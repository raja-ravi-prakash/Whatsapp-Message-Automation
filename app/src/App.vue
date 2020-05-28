<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main
  }
};
</script>

<style>
body,
html {
  margin: 0;
  height: 100%;
  width: 100%;
}

body {
  display: flex;
  justify-content: center;
}
#app {
  text-align: center;
  color: #2c3e50;
}

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: graysca;
}
</style>
