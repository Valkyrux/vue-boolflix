<template>
  <div id="app">
    <Header @startSearch="setSearchText($event)" />
    <ContentContainer :giveMeText="searchText" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ContentContainer from "./components/ContentContainer.vue";

export default {
  name: "App",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    setSearchText(textFromInput) {
      this.searchText = textFromInput;
    },
  },
  components: {
    Header,
    ContentContainer,
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "./assets/scss/_variables.scss";

body {
  background-color: $black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
