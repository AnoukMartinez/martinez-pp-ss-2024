<script setup lang="ts">
import { ref, defineProps, computed, watch } from 'vue'

const props = defineProps<{ title : string, flagKeyword : string, inputRequired : boolean, hint? : string }>()

const inputValue = ref('')
const output_lines = ref<string[]>([])
const emit = defineEmits(['correct-input-given'])

const evaluateInput = () => {
  const handleSuccessfulInput = (message: string) => {
    emit('correct-input-given');
    output_lines.value.push(`> ${message} erfolgreich ausgeführt!`);
  };

  const handleFailedInput = () => {
    if(props.hint != undefined) {
      output_lines.value.push('> ' + props.hint);
    } else {
      console.log(props.hint)
      output_lines.value.push('> ' + 'Nicht ganz...');
    }
  };

  const isGitCommitMessageValid = (input: string): boolean => {
    const pattern = /^git commit -m "(.*?)"$/;
    return pattern.test(input.trimEnd());
  };

  if (props.flagKeyword == `git commit -m "(Hier deine Nachricht)"`) {
    if (isGitCommitMessageValid(inputValue.value)) {
      handleSuccessfulInput(inputValue.value);
    } else {
      handleFailedInput();
    }
  } else {
    if (inputValue.value.trimEnd() == props.flagKeyword) {
      handleSuccessfulInput(inputValue.value);
    } else {
      handleFailedInput();
    }
  }

  // Leert Eingabe nach jedem Versuch
  inputValue.value = '';
};

const handleSubmitByEnter = () => {
  if (props.inputRequired) {
    evaluateInput();
  }
}

const notAllowedStyle = computed(() => {
  if(!props.inputRequired) {
    return {
      backgroundColor : 'lightgray',
      cursor: 'not-allowed',
    }
  }
});

watch(() => props.inputRequired, (newVal) => {
  if (!newVal) {
    inputValue.value = ''
  }
})
</script>

<template>
  <div class="h-full flex flex-col justify-between">

    <div class="w-full h-20 mb-6 rounded-xl flex items-center justify-center">
      <h2 class="text-4xl">{{ props.title }}</h2>
    </div>

    <div class="flex-1 overflow-y-auto">
      <table class="w-full">
        <tr v-for="(row, index) in output_lines" :key="index">
          <td class="text-xl">{{ row }}</td>
        </tr>
      </table>
    </div>

    <div class="flex items-center flex-col">
      <input class="w-full p-2 text-lg font-bold text-white rounded-lg bg-black" id="inputabove" v-model="inputValue" :style="notAllowedStyle" :readonly="!props.inputRequired" @keydown.enter.prevent="handleSubmitByEnter"/>
      <input class="w-full p-2 mt-2 font-bold rounded-lg bg-blue-300 hover:bg-blue-500 active:bg-blue-600" type="submit" :value="props.inputRequired ? 'Eingabe Validieren' : 'Momentan keine Eingabe Nötig!'" @click="evaluateInput" :disabled="!props.inputRequired" :style="notAllowedStyle"/>
    </div>

  </div>
</template>

<style scoped>
</style>
