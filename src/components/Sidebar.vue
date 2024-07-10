<script setup lang="ts">
import { defineProps, ref, computed, onMounted, emit, defineEmits, watch } from 'vue';
import { Level } from '../components/DialogueLine.ts'

const props = defineProps<{ currentLevel : Level }>()
const transcriptIsVisible = ref(false)
const showSolutions = ref(false)
const emit = defineEmits(['skip-level'])

function toggleTranscriptVisibility() {
  transcriptIsVisible.value = !transcriptIsVisible.value
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
</script>

<template>
<div class="h-full w-48 bg-green-500 flex flex-col items-center justify-evenly p-2">
    <router-link to="/" class="w-full h-1/6 sidebarLink homeLink"></router-link>
    <router-link to="/levels" class="w-full h-1/6 sidebarLink levelsLink"></router-link>
    <button @click="skipLevel" class="w-full h-1/6 sidebarLink skipLink"></button>
    <button @click="toggleTranscriptVisibility" class="w-full h-1/6 sidebarLink scriptLink" ></button>
    <router-link to="/" class="w-full h-1/6 sidebarLink infoLink"></router-link>
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
        {{ index + 1}}. {{ renderDialogueLine(line) }} {{ line.keyword }}
        <div v-if="line.required_flag !== undefined && showSolutions" class="text-green-600 font-bold">
          Lösung: {{ line.required_flag }}
        </div>
      </li>
    </ul>
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