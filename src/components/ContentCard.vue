<template>
  <li>
    <img
      v-if="movieData.poster_path"
      class="w-100"
      :src="'https://image.tmdb.org/t/p/w342' + movieData.poster_path"
      alt=""
    />
    <div v-else>No Image</div>
    <h2>{{ movieData.title }}</h2>
    <h2>{{ movieData.original_title }}</h2>
    <CountryFlag v-if="isThereTheIcon" :country="generateIcon" size="normal" />
    <h3 v-else>{{ this.movieData.original_language }}</h3>
    <h4>{{ movieData.vote_average }}</h4>
  </li>
</template>

<script>
// vue-country-flag
import CountryFlag from "vue-country-flag";

export default {
  name: "ContentCard",
  props: {
    movieData: {
      type: Object,
      required: true,
    },
  },
  components: {
    CountryFlag,
  },
  computed: {
    generateIcon() {
      let flagIcon = this.movieData.original_language;
      if (flagIcon === "en") {
        flagIcon = "gb";
      }
      return flagIcon;
    },
    isThereTheIcon() {
      const countyIdList = require("../../country.json").map(
        (element) => element.code
      );
      if (
        countyIdList.includes(this.movieData.original_language) ||
        this.movieData.original_language == "en"
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
