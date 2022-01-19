<template>
  <li>
    {{ movieData.title }}
  </li>
</template>

<script>
export default {
  name: "ContentCard",
  props: {
    movieData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
