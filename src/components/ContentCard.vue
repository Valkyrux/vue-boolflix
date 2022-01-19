<template>
  <li>
    <h2>{{ movieData.title }}</h2> 
    <h2>{{ movieData.original_title }}</h2>   
    <h3>{{ movieData.original_language }}</h3> 
    <h4>{{ movieData.vote_average }}</h4>  
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
