<script setup lang="ts">
import DialogueBox from '../components/DialogueBox.vue';
import MockConsole from '../components/MockConsole.vue';
import Console from '../components/Console.vue';
import { dialogue_lines } from '../components/testdata/dialogueLines';
import { ref } from 'vue';
</script>

<script lang="ts">
export default {
  name: 'LevelView',
};

const monitoredValue = ref(false)

const handleValueChange = (newValue : boolean) => {
  monitoredValue.value = newValue
}
</script>

<template>
  <div class="h-screen flex flex-col border-2">
    <div class="w-full h-16 bg-green-500">
      Top Bar Placeholder
    </div>
    
    <div class="flex flex-row flex-grow">
      <div class="flex-grow border-r-2">
        Picture Placeholder
      </div>
      
      <div class="w-1/4 border-l-2 p-4 bg-slate-500 h-full">
        <Console msg="git add" @update:value="handleValueChange"/>
      </div>
    </div>
    
    <div class="h-1/3 border-t-2 p-4 bg-yellow-200">
      <DialogueBox :dialogue_lines="dialogue_lines" />
    </div>
  </div>
</template>

<style scoped>
</style>
