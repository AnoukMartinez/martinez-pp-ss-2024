<script setup lang="ts">
import { defineProps, ref, computed, onMounted, defineEmits, watch } from 'vue';
import { Level } from '../components/DialogueLine.ts'

const props = defineProps<{ currentLevel : Level }>()
const transcriptIsVisible = ref(false)
const showSolutions = ref(false)
const emit = defineEmits(['skip-level'])
const infoIsVisible = ref(false)

function toggleTranscriptVisibility() {
  transcriptIsVisible.value = !transcriptIsVisible.value
}

function toggleInfoVisibility() {
  infoIsVisible.value = !infoIsVisible.value
}

function toggleShowSolutions() {
  showSolutions.value = !showSolutions.value
}

function renderDialogueLine(line) {
  if (line.highlighted === undefined) {
    return line.content;
  } else {
    return line.content.replace('$', line.highlighted);
  }
}

const backgroundStyle = computed(() => {
  return {
    backgroundImage: `url(/assets/transcript_background.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
  };
});

function skipLevel() {
  emit('skip-level')
}

const tutorialPresent = computed(() => {
  if(props.currentLevel.tutorial != undefined) {
    return true
  }
  return false
})
</script>

<template>
<div class="h-full w-48 bg-green-500 flex flex-col items-center justify-evenly p-2">
    <router-link to="/" class="w-full h-1/6 sidebarLink homeLink"></router-link>
    <router-link to="/levels" class="w-full h-1/6 sidebarLink levelsLink"></router-link>
    <button @click="skipLevel" class="w-full h-1/6 sidebarLink skipLink"></button>
    <button @click="toggleTranscriptVisibility" class="w-full h-1/6 sidebarLink scriptLink" ></button>
    <button @click="toggleInfoVisibility" class="w-full h-1/6 sidebarLink infoLink"></button>
</div>

<div v-if="transcriptIsVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div class="relative bg-white p-16 w-3/4 h-3/4" :style="backgroundStyle">
    <button @click="toggleTranscriptVisibility" class="bg-red-500 p-2 rounded-xl mb-2">Schliessen</button>
    <p class="mb-6 text-4xl font-bold">
      {{ currentLevel.main_chapter }}.{{ currentLevel.sub_chapter }} Skript
    </p>
    <button class="bg-green-600 p-2 rounded-xl mb-2" @click="toggleShowSolutions()">
        {{ showSolutions ? 'Alle Lösungen Verstecken' : 'Alle Lösungen Zeigen' }}
      </button>
    <ul>
      <li v-for="(line, index) in props.currentLevel.dialogue_lines" class="text-xl">
        {{ index + 1}}. {{ renderDialogueLine(line) }}
        <div v-if="line.required_flag !== undefined && showSolutions" class="text-green-600 font-bold">
          Lösung: {{ line.required_flag }}
        </div>
      </li>
    </ul>
  </div>
</div>

<div v-if="infoIsVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div v-if="tutorialPresent" class="relative bg-white p-16 w-3/4 h-3/4 overflow-y-scroll bg-neutral-300">
    <button @click="toggleInfoVisibility" class="bg-red-500 p-2 rounded-xl mb-2">Schliessen</button>
    <p class="mb-4">{{ props.currentLevel.tutorial.tutorial_content }}</p>
    <img class="w-full" :src="props.currentLevel.tutorial.tutorial_image_path">
  </div>
  <div v-else class="relative bg-white p-16 w-3/4 h-3/4 overflow-y-scroll bg-neutral-300">
    <button @click="toggleInfoVisibility" class="bg-red-500 p-2 rounded-xl mb-2">Schliessen</button>
    <p class="mb-4">
      Für dieses Level gibt es momentan keine zusätzlichen Informationen. 
      In Zukunft soll das Info Icon an dieser Stelle komplett ausgegraut sein.
    </p>
  </div>
</div>

</template>

<style>
.sidebarLink {
  background-repeat : no-repeat;
  background-size: 100% 100%;
}

.homeLink {
  background-image : url('/assets/icons/home.png');
}
.homeLink:hover {
  background-image : url('/assets/icons/home_hover.png');
}

.levelsLink {
  background-image : url('/assets/icons/levels.png');
}
.levelsLink:hover {
  background-image : url('/assets/icons/levels_hover.png');
}

.skipLink {
  background-image : url('/assets/icons/skip.png');
}
.skipLink:hover {
  background-image : url('/assets/icons/skip_hover.png');
}

.scriptLink {
  background-image : url('/assets/icons/script.png');
}
.scriptLink:hover {
  background-image : url('/assets/icons/script_hover.png');
}

.infoLink {
  background-image : url('/assets/icons/info.png');
}
.infoLink:hover {
  background-image : url('/assets/icons/info_hover.png');
}

</style>