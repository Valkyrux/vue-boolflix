<template>
  <header class="d-flex align-items-center justify-content-between ps-3 pe-4">
    <nav class="h-100">
      <img src="../assets/logo.png" class="h-100 p-1" alt="logo" />
      <TypeOfSearchButton :category="'Film'" />
      <TypeOfSearchButton :category="'Serie TV'" />
      <TypeOfSearchButton :category="'Tutti'" />
    </nav>
    <InputTextButton />
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
      searchText: "",
    };
  },
  components: {
    TypeOfSearchButton,
    InputTextButton,
  },
};
</script>

<style lang="scss">
header {
  height: 60px;
}
</style>
