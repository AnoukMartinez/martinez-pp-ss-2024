<script setup lang="ts">
import DialogueBox from './DialogueBox.vue';
import Console from './Console.vue';
import { dialogue_lines } from '../components/testdata/dialogueLines';
import { ref, defineProps, watch } from 'vue';
import { Level } from '../components/DialogueLine.ts'

const props = defineProps<{ level : Level }>()
const dialogueBoxRef = ref()
const monitoredValue = ref(false)

const emit = defineEmits(['solution-cracked'])
const handleValueChange = (newValue : boolean) => {
  monitoredValue.value = newValue
  emit('solution-cracked')

  if(dialogueBoxRef.value) {
    dialogueBoxRef.value.resetLineIndex()
  }
}
</script>

<script lang="ts">
export default {
  name: 'LevelScreen',
};
</script>

<template>
  <div class="h-screen flex flex-row">
    <div class="h-full w-48 bg-green-500">
      Top Bar
    </div>
    
    <div class="flex flex-col flex-grow">
      <div class="flex-grow border-r-2">
        Picture Placeholder
        {{ monitoredValue }}
        {{ props.level.main_chapter }}
      </div>
      <div class="h-1/3 p-4 bg-yellow-200">
        <DialogueBox ref="dialogueBoxRef" :dialogue_lines="props.level.dialogue_lines" />
      </div>  
    </div>
    
    
    <div class="w-1/4 p-4 bg-slate-500 h-full">
        <Console msg="git add" @update:value="handleValueChange"/>
      </div>
  </div>
</template>

<style scoped>
</style>
