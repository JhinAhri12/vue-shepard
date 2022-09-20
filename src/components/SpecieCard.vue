<template>
  <router-link
    class="specie-link"
    :to="{ name: 'SpecieDetail', params: { id: specie.id } }"
  >
    <div class="specie-card">
      
      <h2>{{ specie.name }}</h2>
      <img :src="specie.img" alt="animals">
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    specie: {
      type: Object,
      required: true,
    },
  },
};
</script>