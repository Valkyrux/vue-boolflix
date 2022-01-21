<template>
  <li class="position-relative">
    <div
      class="img-container d-flex align-items-center h-100"
      v-if="movieData.poster_path"
    >
      <img
        class="w-100"
        :src="'https://image.tmdb.org/t/p/w342' + movieData.poster_path"
        alt=""
      />
    </div>
    <div
      class="h-100 w-100 bg-secondary d-flex justify-content-center text-light fs-2 align-items-center"
      v-else
    >
      No Image
    </div>
    <div class="position-absolute fixed-dimension info">
      <h2>{{ movieData.title }}</h2>
      <h2>{{ movieData.original_title }}</h2>
      <CountryFlag
        class="rounded"
        v-if="isThereTheIcon"
        :country="generateIcon"
        size="normal"
      />
      <h3 v-else>{{ this.movieData.original_language }}</h3>
      <h4>{{ fiveStarVote }}<font-awesome-icon icon="coffee" /></h4>
    </div>
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
    fiveStarVote() {
      return this.movieData.vote_average / 2;
    },
  },
};
</script>

<style lang="scss" scoped>
.img-container {
  background-color: black;
}

.info {
  display: none;
}

li:hover .info {
  display: block;
  background-color: rgba($color: #000000, $alpha: 0.9);
  top: 4px;
  z-index: 1;
}

.fixed-dimension {
  width: calc(100% - 8px);
  height: calc(100% - 8px);
}
</style>
