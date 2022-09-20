<template>
  <h1>List of endangered species</h1>
</template>

<script>
import EventService from "@/services/EventService.js";
export default {
  name: "HomeView",
  data(){
    return {
      species: null
    }
  }
}
</script>