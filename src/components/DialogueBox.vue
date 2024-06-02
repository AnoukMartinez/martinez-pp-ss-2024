<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { DialogueLine } from './DialogueLine';

const props = defineProps({
  dialogue_lines: {
    type: Array as () => DialogueLine[],
    required: true,
  },
});

const currentIndex = ref(0);

const renderNextLine = () => {
  if(currentIndex.value < props.dialogue_lines.length - 1) {
    currentIndex.value++;
  }
};

const resetLineIndex = () => {
  console.log("LINE INDEX HAS BEEN RESET");
  currentIndex.value = 0;
};

// Expose the resetLineIndex method so that it can be accessed from the parent
defineExpose({
  resetLineIndex,
});
</script>

<template>
  <div>
    <button @click="renderNextLine">{{ props.dialogue_lines[currentIndex].content }}</button>
  </div>
</template>

<style scoped>
  button {
    width: 100%;
  }
</style>
