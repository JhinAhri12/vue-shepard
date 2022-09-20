<template>
  <div v-if="specie">
    <h1>{{ specie.name }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'SpecieDetails' }">Details</router-link>
      |

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