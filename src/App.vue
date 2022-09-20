<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <div id="app">

    <div id="nav">
      <RouterLink to="/">Home</RouterLink>&nbsp;
      <RouterLink to="/about">About</RouterLink>
    </div>
  </div>

  <RouterView />
</template>

<style scoped>
@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}
#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
h4 {
  font-size: 20px;
}
</style>
