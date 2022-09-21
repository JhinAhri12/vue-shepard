<template>
  <div class="specie-container">
    <div class="specie">
    <router-link
      class="specie-link"
      :to="{ name: 'SpecieDetail', params: { id: specie.id } }"
    >
      <div class="specie-infos">
        
        <h2>{{ specie.name }}</h2>
        <img :src="specie.img" alt="animals">
      </div>
    </router-link>
    </div>
  </div>
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