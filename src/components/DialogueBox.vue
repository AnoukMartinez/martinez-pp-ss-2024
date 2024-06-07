<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { DialogueLine } from './DialogueLine';

const props = defineProps({
  dialogue_lines: {
    type: Array as () => DialogueLine[],
    required: true,
  },
  lastSolvedFlag: {},
});

const currentIndex = ref(0);

const renderNextLine = () => {
  // If line index is greater than number of lines, keep current line
  if(currentIndex.value >= props.dialogue_lines.length - 1) {
    return
  }

  const current_line_flag = props.dialogue_lines[currentIndex.value]?.required_flag;

  if (current_line_flag == undefined) {
    currentIndex.value++;
  } else if(current_line_flag == props.lastSolvedFlag) {
    // needs more logic on wether current keyword was solved yet
    currentIndex.value++;
  }
};

const resetLineIndex = () => {
  currentIndex.value = 0;
};

defineExpose({
  resetLineIndex,
});
</script>

<template>
  <div class="resize-none">
    <button class="text-4xl mt-14" @click="renderNextLine">{{ props.dialogue_lines[currentIndex].content }}</button>
  </div>
</template>

<style scoped>
  button {
    width: 100%;
  }
</style>
