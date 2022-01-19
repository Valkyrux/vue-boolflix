<template>
  <ul v-if="setResultFromSearch">
    <ContentCard :movieData="movie" v-for="(movie,index) in items" :key="index" />
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
      textHere: this.giveMeText,
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
      if(aTextToSearch != "" || aTextToSearch != "null"){
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "66aa3f3384fe1b5ecfefc1d11f432e71",
            language: "en-US",
            page: 1,
            query: aTextToSearch,
            include_adult: "false",
          },
        })
        .then((response) => {
          console.log(response);
          this.items = response.data.results;
        })
        .catch((error) => {
          console.log(error);
          console.log(this.giveMeText);
        });
    }},
  }, 
    computed: {
      setResultFromSearch() {
        this.getMoviesFromApi(this.giveMeText);
        console.log(this.items);
        return this.items;
      }
    },
};
</script>

<style></style>
