<template>
  <div>
    <input type="text" v-model="inputText" placeholder="Inserisci Titolo" />
    <button @click="$emit('startSearch', inputText)">Cerca</button>
  </div>
</template>

<script>
export default {
  name: "InputTextButton",
  data() {
    return {
      inputText: "",
    };
  },
  // methods: {
  //   getInputText() {
  //     const searcInputText = this.inputText;
  //     this.inputText = "";
  //     return searcInputText;
  //   },
  // },
};
</script>

<style></style>
