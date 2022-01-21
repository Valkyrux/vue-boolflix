<template>
  <header class="d-flex align-items-center justify-content-between ps-2 pe-4">
    <nav class="h-100">
      <img src="../assets/logo.png" class="h-100 p-2" alt="logo" />
      <TypeOfSearchButton
        :category="'Film'"
        @typeOfSearch="$emit('typeOfSearch', categoryFormatForSearch($event))"
      />
      <TypeOfSearchButton
        :category="'Serie TV'"
        @typeOfSearch="$emit('typeOfSearch', categoryFormatForSearch($event))"
      />
      <TypeOfSearchButton
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
  //   data() {
  //     return {
  //       TypeOfSearch: "all",
  //       searchText: "",
  //     };
  //   },
  components: {
    TypeOfSearchButton,
    InputTextButton,
  },
  methods: {
    categoryFormatForSearch(element) {
      switch (element) {
        case "Film":
          return "movie";
        case "Serie TV":
          return "tv";
        case "Tutti":
          return "all";
      }
    },
  },
};
</script>

<style lang="scss">
header {
  height: 50px;
}
</style>
