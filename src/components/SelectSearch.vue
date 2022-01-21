<template>
  <select
    name="type-of-search"
    id="type-of-search"
    v-model="userChoice"
    :change="$emit('searchType', userChoice)"
  >
    <option value="no-value">Seleziona cosa cercare</option>
    <option value="movie">Film</option>
    <option value="tv">Serie TV</option>
  </select>
</template>

<script>
export default {
  name: "SelectSearch",
  data() {
    return {
      userChoice: "no-value",
    };
  },
};
</script>

<style></style>
