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
  <div class="flex flex-col">
    <div class="border-2 border-color-red">
      Bitte gibe 
      <h2>{{ msg }}</h2>
    </div>

    <div>
      <input id="inputabove" v-model="input_value" />
    </div>

    <div>
      <input type="submit" value="Enter" v-on:click="evaluateInput()" />
    </div>

    <h3>{{ result }}</h3>
  </div>
</template>

<style scoped>
</style>
