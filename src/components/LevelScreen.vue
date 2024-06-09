<script setup lang="ts">
import DialogueBox from './DialogueBox.vue';
import Console from './Console.vue';
import { ref, defineProps, watch, computed } from 'vue';
import { Level } from '../components/DialogueLine.ts'

const props = defineProps<{ level : Level }>()
const dialogueBoxRef = ref()
const currentFlagIndex = ref(0)
const lastSolvedFlag = ref(null)
const inputRequired = ref(false)
const inputColor = ref('black')

const emit = defineEmits(['solution-cracked'])

function handleValueChange() {
  currentFlagIndex.value = currentFlagIndex.value + 1
  lastSolvedFlag.value = props.level.flags[currentFlagIndex.value - 1].keyword

  if(dialogueBoxRef.value.currentIndex < props.level.dialogue_lines.length) {
    dialogueBoxRef.value.currentIndex++
  }
  
  // If all flags are triggered, progress to next level and reset the game state
  if(currentFlagIndex.value == props.level.flags.length) {
    emit('solution-cracked')
    dialogueBoxRef.value.resetLineIndex()
    currentFlagIndex.value = 0
  }
}

function handleInputRequired() {
  inputRequired.value = true
}

function handleNoInputRequired() {
  inputRequired.value = false
}

const backgroundStyle = computed(() => {
  return {
    backgroundImage: `url(${props.level.backgrounds[0]})`,
  };
});

watch(inputRequired, (newVal) => {
  inputColor.value = newVal ? 'red' : 'black'
})

</script>

<script lang="ts">
export default {
  name: 'LevelScreen',
};
</script>

<template>
  <div class="h-screen flex flex-row">
    <div class="h-full w-48 bg-green-500">
    </div>
    
    <div class="flex flex-col flex-grow" :style="backgroundStyle">
      <div class="flex-grow">
        <div class="text-4xl font-bold text-red-600 ml-12 mt-12">
          {{ props.level.main_chapter }}.{{ props.level.sub_chapter }}
        </div>
      </div>
      <div class="h-1/3 p-4 bg-yellow-200">
        <DialogueBox ref="dialogueBoxRef" :dialogue_lines="props.level.dialogue_lines" :lastSolvedFlag="lastSolvedFlag" @input-required="handleInputRequired" @no-input-required="handleNoInputRequired" />
      </div>  
    </div>
    
    
    <div class="w-1/4 p-4 bg-slate-500 h-full">
        <Console :title="props.level.title" :flagKeyword="props.level.flags[currentFlagIndex].keyword" :inputColor="inputColor" @correct-input-given="handleValueChange" />
      </div>
  </div>
</template>

<style scoped>
</style>
