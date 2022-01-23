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
      <div class="p-3">
        <h2 class="text-start fs-6 ms_title">
          <span class="ms_label">Titolo </span>"{{ generateTitle }}"
        </h2>
        <h2 class="text-start fs-6 ms_title">
          <span class="ms_label">Titolo originale </span>"{{
            generateOriginalTitle
          }}"
        </h2>
        <p class="ms_overview" v-if="this.movieData.overview">
          "{{ briefDescription }}"
        </p>
        <p v-else>Nessuna descrizione</p>
        <CountryFlag
          class="rounded"
          v-if="isThereTheIcon"
          :country="generateIcon"
          size="normal"
        />
        <h3 v-else>{{ this.movieData.original_language }}</h3>
        <div class="ms_title">
          <span v-if="fiveStarVote != 0">
            <font-awesome-icon
              v-for="n in fiveStarVote"
              :icon="['fas', 'star']"
              :key="n + 'star'"
            />
          </span>
          <span v-if="5 - fiveStarVote != 0">
            <font-awesome-icon
              v-for="n in 5 - fiveStarVote"
              :icon="['far', 'star']"
              :key="n + 'star'"
            />
          </span>
        </div>
      </div>
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
      let aGoodNumber = this.movieData.vote_average / 2;
      if (aGoodNumber - parseInt(aGoodNumber) > 0.5) {
        aGoodNumber = parseInt(aGoodNumber) + 1;
      } else {
        aGoodNumber = parseInt(aGoodNumber);
      }
      return aGoodNumber;
    },
    generateTitle() {
      if (this.movieData.title) {
        return this.movieData.title;
      } else {
        return this.movieData.name;
      }
    },
    generateOriginalTitle() {
      if (this.movieData.original_title) {
        return this.movieData.original_title;
      } else {
        return this.movieData.original_name;
      }
    },
    briefDescription() {
      if (this.movieData.overview) {
        const briefText = this.movieData.overview
          .split("")
          .filter((element, index) => index < 80);
        return briefText.join("") + "...";
      } else {
        return null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
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

.ms_label {
  color: $red;
  font-weight: bold;
  font-size: 0.9em;
}

.ms_title {
  color: white;
}

.ms_overview {
  max-height: 40%;
  overflow: hidden;
}
</style>
