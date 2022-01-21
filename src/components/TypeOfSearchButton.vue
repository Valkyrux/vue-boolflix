<template>
  <button @click="$emit('typeOfSearch', category)" class="h-100">
    {{ category }}
  </button>
</template>

<script>
export default {
  name: "TypeOfSearchButton",
  props: {
    category: String,
  },
};
</script>

<style></style>
