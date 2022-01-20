<template>
  <ul v-if="setResultFromSearch">
    <ContentCard
      :movieData="movie"
      v-for="(movie, index) in items"
      :key="index"
    />
  </ul>
</template>

<script>
import ContentCard from "./ContentCard.vue";
import axios from "axios";

export default {
  name: "ContentContainer",
  data() {
    return {
      items: null,
    };
  },
  props: {
    giveMeText: {
      type: String,
    },
  },
  components: {
    ContentCard,
  },
  methods: {
    getMoviesFromApi(aTextToSearch) {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "66aa3f3384fe1b5ecfefc1d11f432e71",
            language: "it-IT",
            page: 1,
            query: aTextToSearch,
            include_adult: "false",
          },
        })
        .then((response) => {
          this.items = response.data.results;
          console.log(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    setResultFromSearch() {
      if (this.giveMeText != "") {
        this.getMoviesFromApi(this.giveMeText);
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
