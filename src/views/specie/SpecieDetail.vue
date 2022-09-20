<template>
  <div v-if="specie">
    <h1>{{ specie.name }}</h1>
    <img :src="specie.img" alt="">
    <div class="specie-detail">
      <i>location : {{specie.location}}</i>
      <b>popoulation : {{specie.popoulation}} <span>status : {{specie.status}}</span></b>
      <p>{{specie.description}}</p>
    </div>

    
    <router-view :specie="specie" />
  </div>
</template>

<script>
import SpecieService from "@/services/SpecieService.js";
export default {
  props: ["id"],
  data() {
    return {
      specie: null,
    };
  },
  created() {
    SpecieService.getSpecie(this.id)
      .then((response) => {
        this.specie = response.data;
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: "404Resource",
            params: { resource: "specie" },
          });
        } else {
          this.$router.push({ name: "NetworkError" });
        }
      });
  },
};
</script>