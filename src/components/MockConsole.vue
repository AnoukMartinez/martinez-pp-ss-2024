<script setup lang="ts">
defineProps({
  msg: String,
});
</script>

<script lang="ts">
export default {
  data() {
    return {
      result: 'Erwarte Eingabe...',
      inputvalue: '',
    };
  },
  methods: {
    evaluateInput() {
      if (this.input_value == this.msg) {
        this.result = 'Gut!';
      } else this.result = 'Noch nicht ganz.';
    },
  },
};
</script>

<template>
  <div>
    <h1>Bitte tippe ein:</h1>
    <h2>{{ msg }}</h2>
  </div>

  <input id="inputabove" v-model="input_value" />
  <input type="submit" value="Enter" v-on:click="evaluateInput()" />

  <h3>{{ result }}</h3>
</template>

<style scoped>
</style>
