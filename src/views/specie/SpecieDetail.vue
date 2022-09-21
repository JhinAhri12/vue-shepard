<template>
  <div v-if="specie">
    <h1>{{ specie.name }}</h1>
    <img :src="specie.img" alt="">
    <div class="specie-detail">
      <p><i>Location : {{specie.location}}</i></p>
      <p><b>Popoulation : {{specie.population}}&nbsp;-&nbsp;<span>Status : {{specie.status}}</span></b></p>
      <p class="desc">{{specie.description}}</p>
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

<style scoped>
.specie-detail{
  padding-bottom: 40px;
  margin-bottom: 20px;
  width: 60%;
  height: 30%;
  margin: 0px auto;
}
span{
  color :red
}
</style>