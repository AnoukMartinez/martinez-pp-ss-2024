<script setup lang="ts">
import { ref, onMounted, defineProps, watch } from 'vue'

const props = defineProps<{ msg: string }>()

const inputValue = ref('')
const output_lines = ref<string[]>([])
const solution_given : boolean = ref(false)
const emit = defineEmits(['correct-input-given'])

const evaluateInput = () => {
  console.log(props.msg)
  if (inputValue.value === props.msg) {
    emit('correct-input-given')
    output_lines.value.push(`> ${inputValue.value} erfolgreich ausgeführt!`)
    solution_given.value = true;
  } else {
    output_lines.value.push('> ' + 'Nicht ganz. Denke daran dass du einige Dateien hinzufügen musst bevor du deinen commit machen kannst.')
  }
}

</script>

<template>
  <div class="h-full flex flex-col justify-between">

    <div class="w-full border-2 h-20 mb-6 rounded-xl flex items-center justify-center">
      <h2 class="text-4xl">{{ msg }}</h2>
    </div>

    <div class="flex-1 overflow-y-auto">
      <table class="w-full">
        <tr v-for="(row, index) in output_lines" :key="index">
          <td>{{ row }}</td>
        </tr>
      </table>
    </div>

    <div class="flex items-center flex-col">
      <input class="w-full p-2 text-lg font-bold text-white bg-black rounded-lg" id="inputabove" v-model="inputValue" />
      <input class="w-full p-2 mt-2 font-bold border-2 rounded-lg bg-blue-300 hover:bg-blue-500 active:bg-blue-600" type="submit" value="Eingabe Validieren" @click="evaluateInput" />
    </div>

  </div>
</template>

<style scoped>
</style>
