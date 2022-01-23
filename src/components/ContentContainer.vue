<template>
  <div class="container-fluid pt-5 pb-5">
    <ul v-if="items" class="row">
      <ContentCard
        class="col-2 p-1"
        :movieData="movie"
        v-for="(movie, index) in items"
        :key="index"
      />
    </ul>
  </div>
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
    giveMeType: {
      type: String,
    },
  },
  components: {
    ContentCard,
  },
  methods: {
    getMoviesFromApi(aTextToSearch, typeOfSearch) {
      if (typeOfSearch != "all") {
        axios
          .get(`https://api.themoviedb.org/3/search/${typeOfSearch}/`, {
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
      } else {
        this.items = [];
        axios
          .get(`https://api.themoviedb.org/3/search/movie/`, {
            params: {
              api_key: "66aa3f3384fe1b5ecfefc1d11f432e71",
              language: "it-IT",
              page: 1,
              query: aTextToSearch,
              include_adult: "false",
            },
          })
          .then((response) => {
            this.items = this.items.concat(response.data.results);
            console.log(response.data.results);
            axios
              .get(`https://api.themoviedb.org/3/search/tv/`, {
                params: {
                  api_key: "66aa3f3384fe1b5ecfefc1d11f432e71",
                  language: "it-IT",
                  page: 1,
                  query: aTextToSearch,
                  include_adult: "false",
                },
              })
              .then((response) => {
                this.items = this.items.concat(response.data.results);
                console.log(response.data.results);
                console.log(this.items);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  watch: {
    giveMeText(value) {
      if (value != "") {
        this.getMoviesFromApi(value, this.giveMeType);
      }
    },
    giveMeType(value) {
      if (this.giveMeText != "") {
        this.getMoviesFromApi(this.giveMeText, value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 20px;
  list-style-type: none;
}
</style>
