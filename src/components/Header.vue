<template>
  <header class="d-flex align-items-center justify-content-between ps-2 pe-4">
    <font-awesome-icon icon="star" />
    <nav class="h-100">
      <img src="../assets/logo.png" class="h-100 p-2" alt="logo" />
      <TypeOfSearchButton
        class="ms-4"
        :class="typeOfSearch == 'movie' ? 'active' : ''"
        :category="'Film'"
        @typeOfSearch="$emit('typeOfSearch', categoryFormatForSearch($event))"
      />
      <TypeOfSearchButton
        :class="typeOfSearch == 'tv' ? 'active' : ''"
        :category="'Serie TV'"
        @typeOfSearch="$emit('typeOfSearch', categoryFormatForSearch($event))"
      />
      <TypeOfSearchButton
        :class="typeOfSearch == 'all' ? 'active' : ''"
        :category="'Tutti'"
        @typeOfSearch="$emit('typeOfSearch', categoryFormatForSearch($event))"
      />
    </nav>
    <InputTextButton @startSearch="$emit('startSearch', $event)" />
  </header>
</template>

<script>
import TypeOfSearchButton from "./TypeOfSearchButton.vue";
import InputTextButton from "./InputTextButton.vue";

export default {
  name: "Header",
  data() {
    return {
      typeOfSearch: "all",
    };
  },
  components: {
    TypeOfSearchButton,
    InputTextButton,
  },
  methods: {
    categoryFormatForSearch(element) {
      let result;
      switch (element) {
        case "Film":
          result = "movie";
          break;
        case "Serie TV":
          result = "tv";
          break;
        case "Tutti":
          result = "all";
          break;
      }
      this.typeOfSearch = result;
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 50px;
}

button {
  background-color: transparent;
  border: 0;
  color: gray;
  font-size: 0.8em !important;
  &.active {
    color: white;
  }
}
</style>
