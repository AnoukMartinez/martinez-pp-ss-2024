<script setup lang="ts">
import DialogueBox from './DialogueBox.vue';
import Console from './Console.vue';
import Sidebar from './Sidebar.vue';
import { ref, defineProps, watch, computed } from 'vue';
import { Level } from '../components/DialogueLine.ts'

const props = defineProps<{ level : Level }>()
const dialogueBoxRef = ref()
const currentFlagIndex = ref(0)
const currentBackgroundIndex = ref(0)
const lastSolvedFlag = ref(null)
const inputRequired = ref(false)
const allDialogueLinesRead = ref(false)

const showRepolink = ref(false)

const emit = defineEmits(['solution-cracked'])

function handleValueChange() {
  if(currentFlagIndex.value < props.level.flags.length - 1) {
    lastSolvedFlag.value = props.level.flags[currentFlagIndex.value]?.keyword;
    currentFlagIndex.value += 1
  }

  currentBackgroundIndex.value += 1

  if(dialogueBoxRef.value.currentIndex < props.level.dialogue_lines.length) {
    dialogueBoxRef.value.currentIndex++
  }

  showRepolink.value = false

  checkEndOfLevel()
}

function handleInputRequired() {
  inputRequired.value = true
}

function handleNoInputRequired() {
  inputRequired.value = false
}

function handleAllDialogueLinesRead() {
  allDialogueLinesRead.value = true
  checkEndOfLevel()
}

function checkEndOfLevel() {
  // currentFlagIndex.value muss + 1 gerechnet werden um Länge zu entsprechen.
  // Ich mag diese Lösung nicht wirklich, aber es funktioniert im Moment nur so.
  if(currentFlagIndex.value + 1 == props.level.flags.length && allDialogueLinesRead.value) {
    endLevel()
  }
}

function endLevel() {
  emit('solution-cracked')
  dialogueBoxRef.value.resetLineIndex()
  currentFlagIndex.value = 0
  allDialogueLinesRead.value = false
  currentBackgroundIndex.value = 0
}

const backgroundStyle = computed(() => {
  console.log(`Background updated. cfi: ${currentFlagIndex.value}`)
  // TODO: Fit div containing image to always fit image properly, then set fit to cover
  return {
    backgroundImage: `url(${props.level.backgrounds[currentBackgroundIndex.value]})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center', // Center the image
  };
});

watch(inputRequired, (newVal) => {
  inputRequired.value = newVal
})

function toggleRepolink() {
  console.log("line reached")
  showRepolink.value = true
}

function copyToClipboard() {
  const textToCopy = document.getElementById('textToCopy').innerText;
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert('In Zwischenablage kopiert!');
  })
}

</script>

<script lang="ts">
export default {
  name: 'LevelScreen',
};
</script>

<template>
  <div class="h-screen flex flex-row">
    

    <div>
      <Sidebar :currentLevel="props.level" @skip-level="endLevel"/>
    </div>
    
    <div class="flex flex-col flex-grow">
      <div class="flex-grow" :style="backgroundStyle">
        <div class="text-4xl font-bold text-red-600 ml-12 mt-12">
          {{ props.level.main_chapter }}.{{ props.level.sub_chapter }}
        </div>
        <div v-if="showRepolink" class="absolute inset-auto bg-white p-2 m-4 w-1/6 h-1/6 flex justify-center overlay flex-col">
          <div id="textToCopy" class="p-4 bg-gray-200">
            https://github.com/AnoukMartinez/martinez-pp-ss-2024
          </div>
          <button @click="copyToClipboard" class="mt-2 p-2 bg-blue-500 text-white">
            In Zwischenablage kopieren
          </button>
        </div>
          
      </div>
      <div class="h-1/3 bg-white">
        <DialogueBox ref="dialogueBoxRef" :dialogue_lines="props.level.dialogue_lines" :lastSolvedFlag="lastSolvedFlag" @input-required="handleInputRequired" @no-input-required="handleNoInputRequired" @all-lines-read="handleAllDialogueLinesRead" @show-repo-link="toggleRepolink"/>
      </div>  
    </div>
    
    
    <div class="w-1/4 p-4 bg-slate-500 h-full shrink-0">
      <Console :title="props.level.title" :flagKeyword="props.level.flags[currentFlagIndex].keyword" :inputRequired="inputRequired" :hint="props.level.flags[currentFlagIndex].hint" @correct-input-given="handleValueChange" />
    </div>
  </div>
</template>

<style scoped>
</style>
