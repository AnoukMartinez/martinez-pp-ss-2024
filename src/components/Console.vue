<script setup lang="ts">
import { ref, onMounted, defineProps, watch } from 'vue'

const props = defineProps<{ msg: string }>()

const inputValue = ref('')
const output_lines = ref<string[]>([])
const solution_given : boolean = ref(false)

const evaluateInput = () => {
  if (inputValue.value === props.msg) {
    output_lines.value.push(`${inputValue.value} hinzugefügt!`)
    solution_given.value = true;
  } else {
    output_lines.value.push('Nicht ganz. Denke daran dass du einige Dateien hinzufügen musst bevor du deinen commit machen kannst.')
  }
}

const emit = defineEmits(['update:value'])
watch(solution_given, (newValue) => {
  emit('update:value', newValue)
})
</script>

<template>
  <div id="console-wrapper">
    <div id="console-header">
      <h2>{{ msg }}</h2>
    </div>
    <table id="console-output">
      <tr v-for="(row, index) in output_lines" :key="index">
        <td>{{ row }}</td>
      </tr>
    </table>
    <div id="console-input">
      <input id="inputabove" v-model="inputValue" />
      <input type="submit" value="Enter" @click="evaluateInput" />
    </div>
  </div>
</template>

<style scoped>
table {
  overflow: auto;
  width:250px;
  height:20%;
  text-align: left;
}

table td {
  overflow-wrap: break-word;
}
</style>
