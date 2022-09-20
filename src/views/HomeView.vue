<template>
  <h1>List of endangered species</h1>
    <div class="species">
      <SpecieCard v-for="specie in species" :key="specie.id" :specie="specie" />
    </div>
</template>

<script>
import SpecieCard from "@/components/SpecieCard.vue";
import SpecieService from "@/services/SpecieService.js";
import NProgress from "nprogress";
export default {
  name: "HomeView",
  components: {
    SpecieCard,
  },
  data(){
    return {
      species: null
    }
  },
   beforeRouteEnter(routeTo, routeFrom, next) {
    NProgress.start();
    SpecieService.getSpecies()
      .then((response) => {
        next((comp) => {
          comp.species = response.data;
        });
      })
      .catch(() => {
        next({ name: "NetworkError" });
      })
      .finally(() => {
        NProgress.done();
      });
  },
}
</script>