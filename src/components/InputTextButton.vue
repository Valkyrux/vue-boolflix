<template>
  <div class="rounded-pill input-container">
    <input
      v-show="showInput === true"
      type="text"
      v-model="inputText"
      placeholder="Inserisci Titolo"
      @keydown.enter="$emit('startSearch', inputText)"
    />
    <button @click="showInputFunction()">
      <font-awesome-icon :icon="['fas', 'search']" />
    </button>
  </div>
</template>

<script>
export default {
  name: "InputTextButton",
  data() {
    return {
      showInput: "false",
      inputText: "",
    };
  },
  methods: {
    showInputFunction() {
      if (this.showInput === true) {
        this.showInput = false;
      } else {
        this.showInput = true;
      }
    },
  },
  created() {
    console.log(this.showInput);
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  border: 1px solid gray;
  padding: 2px 10px;
  &:focus-within {
    border: 2px solid white;
  }
}

input {
  background-color: transparent;
  border: 0;
  width: 0;
  transition: width 2s display 2s;
  width: 280px;
  outline: 0;
  color: gray;
}

button {
  background-color: transparent;
  border: 0;
  color: gray;
  z-index: 1;
}
</style>
