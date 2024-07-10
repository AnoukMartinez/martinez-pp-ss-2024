<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, computed } from 'vue';
import { DialogueLine } from './DialogueLine';

const props = defineProps({
  dialogue_lines: {
    type: Array as () => DialogueLine[],
    required: true,
  },
  lastSolvedFlag: {},
});

const emit = defineEmits(['input-required', 'no-input-required', 'all-lines-read', 'show-repo-link'])

const currentIndex = ref(0);

function renderNextLine() {
  // If line index is greater than number of lines, keep current line
  if(currentIndex.value >= props.dialogue_lines.length - 1) {
    emit('all-lines-read')
    return
  }

  // Das ist der schrecklichste Code den ich jemals geschrieben habe.
  if(currentIndex.value < props.dialogue_lines.length - 1) {
    const nextLine = props.dialogue_lines[currentIndex.value + 1]
    if(nextLine.content == "Versuchen wir einmal dieses Repo über die Konsole zu klonen!") {
      emit('show-repo-link')
    }
  }

  const current_line_flag = props.dialogue_lines[currentIndex.value]?.required_flag;

  if (current_line_flag == undefined) {
    currentIndex.value++;
  } else if(current_line_flag == props.lastSolvedFlag) {
    currentIndex.value++;
  }
};

function renderPreviousLine() {
  if (currentIndex.value > 0) {
    const previousLine = props.dialogue_lines[currentIndex.value - 1];

    if (previousLine.required_flag === undefined) {
      currentIndex.value--;
    }
  }
}

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

function processLine(line) {
  if (line.highlighted === undefined) {
    return line.content;
  } else {
    return line.content.replace('$', `<span class="text-red-500">${line.highlighted}</span>`);
  }
}

const notAllowedStyle = computed(() => {
  if (currentIndex.value > 0) {
    let previousLine = props.dialogue_lines[currentIndex.value - 1];
    if(previousLine.required_flag != undefined) {
      return {
        backgroundColor : 'lightgray',
        cursor: 'not-allowed',
      }
    }
  } else {
    return {
      backgroundColor : 'lightgray',
      cursor: 'not-allowed',
    }
  }
});
</script>

<template>
  <div class="w-full h-full">
    <button id="dialogueBox" class="w-full h-full relative">
      <button class="absolute top-0 text-xl left-0 m-4 border-4 border-color-black px-4 text-white bg-slate-800 hover:bg-red-500" @click="renderPreviousLine" :style="notAllowedStyle">Zurück</button>
      <p class="text-5xl text-center p-8 max-w-full break-words" @click="renderNextLine" v-html="processLine(props.dialogue_lines[currentIndex])">
      </p>
    </button>
  </div>
</template>

<style scoped>
#dialogueBox:hover {
  background-color: lightgray;
}
</style>
