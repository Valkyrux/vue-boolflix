<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <InputTextButton @startSearch="setSearchText($event)" />
    <ContentContainer :giveMeText="searchText" />
  </div>
</template>

<script>
import InputTextButton from "./components/InputTextButton.vue";
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
    InputTextButton,
    ContentContainer,
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
