<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div id="nav">
      <RouterLink to="/">Home</RouterLink>&nbsp;
      <RouterLink to="/about">About</RouterLink>
    </div>
  <RouterView />
    <div id="footer">
      <p>&copy; animals</p> 
    </div>
</template>

