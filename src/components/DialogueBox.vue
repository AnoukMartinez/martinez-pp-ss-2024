<script setup lang="ts">
import { defineProps } from 'vue';
import { DialogueLine } from './DialogueLine';

const props = defineProps({
  dialogue_lines: {
    type: Array as () => DialogueLine[],
    required: true,
  },
});
</script>

<script lang="ts">
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    renderNextLine() {
      this.currentIndex++;
    },
  },
};
</script>

<template>
  <div>
    <button v-on:click="renderNextLine">{{ props.dialogue_lines[currentIndex].content }}</button>
  </div>
</template>

<style scoped>
  button {
    width : 100%;
  } 
</style>
