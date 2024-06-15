<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue';
import { DialogueLine } from './DialogueLine';

const props = defineProps({
  dialogue_lines: {
    type: Array as () => DialogueLine[],
    required: true,
  },
  lastSolvedFlag: {},
});

const emit = defineEmits(['input-required', 'no-input-required', 'all-lines-read'])

const currentIndex = ref(0);

const renderNextLine = () => {
  // If line index is greater than number of lines, keep current line
  if(currentIndex.value >= props.dialogue_lines.length - 1) {
    emit('all-lines-read')
    return
  }

  const current_line_flag = props.dialogue_lines[currentIndex.value]?.required_flag;

  if (current_line_flag == undefined) {
    currentIndex.value++;
  } else if(current_line_flag == props.lastSolvedFlag) {
    currentIndex.value++;
  }
};

watch(currentIndex, (newIndex) => {
  // Sende einen emit je nachdem ob in der Line eine Eingabe getätigt werden soll, oder nicht
  const current_line_flag = props.dialogue_lines[newIndex]?.required_flag;
  if (current_line_flag !== undefined && current_line_flag !== props.lastSolvedFlag) {
    emit('input-required');
  } else {
    emit('no-input-required')
  }
});

const resetLineIndex = () => {
  currentIndex.value = 0;
};

defineExpose({
  resetLineIndex,
  renderNextLine,
  currentIndex
});
</script>

<template>
  <div class="w-full h-full">
    <button @click="renderNextLine">
      <p class="text-4xl text-center p-4">
        {{ props.dialogue_lines[currentIndex].content }}
      </p>
    </button>
  </div>
</template>

<style scoped>
  button {
    width: 100%;
    height: 100%;
  }

  p {
    max-width: 100%;
    overflow-wrap: break-word;
  }
</style>
