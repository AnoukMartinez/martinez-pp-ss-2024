<script setup lang="ts">
import { ref, defineProps, computed, watch } from 'vue'

const props = defineProps<{ title : string, flagKeyword : string, inputRequired : boolean }>()

const inputValue = ref('')
const output_lines = ref<string[]>([])
const emit = defineEmits(['correct-input-given'])

const evaluateInput = () => {
  if (inputValue.value == props.flagKeyword) {
    emit('correct-input-given')
    output_lines.value.push(`> ${inputValue.value} erfolgreich ausgeführt!`)
  } else {
    console.log(props.flagKeyword)
    output_lines.value.push('> ' + 'Nicht ganz. Denke daran dass du einige Dateien hinzufügen musst bevor du deinen commit machen kannst.')
  }
}

const inputStyle = computed(() => {
  if(props.inputRequired) {
    return {
      backgroundColor : 'red',

    }
  } else {
    return {
      backgroundColor : 'lightgray',
      cursor: 'not-allowed',
    }
  }
});

const submitStyle = computed(() => {
  if(!props.inputRequired) {
    return {
      backgroundColor : 'lightgrey',
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
          <td>{{ row }}</td>
        </tr>
      </table>
    </div>

    <div class="flex items-center flex-col">
      <input class="w-full p-2 text-lg font-bold text-white rounded-lg" id="inputabove" v-model="inputValue" :style="inputStyle" :readonly="!props.inputRequired"/>
      <input class="w-full p-2 mt-2 font-bold rounded-lg bg-blue-300 hover:bg-blue-500 active:bg-blue-600" type="submit" :value="props.inputRequired ? 'Eingabe Validieren' : 'Momentan keine Eingabe Nötig!'" @click="evaluateInput" :disabled="!props.inputRequired" :style="submitStyle"/>
    </div>

  </div>
</template>

<style scoped>
</style>
