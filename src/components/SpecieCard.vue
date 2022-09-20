<template>
  <router-link
    class="specie-link"
    :to="{ name: 'SpecieDetails', params: { id: specie.id } }"
  >
    <div class="specie-card">
      <span>@{{ specie.time }} on {{ specie.date }}</span>
      <h4>{{ specie.title }}</h4>
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