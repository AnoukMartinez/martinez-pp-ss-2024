<script setup lang="ts">
import LevelScreen from './LevelScreen.vue'
import { Level } from './DialogueLine.ts'
import { levels } from './testdata/levels.ts'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const paramLevel = ref<number | null>(null);
const paramChapter = ref<number | null>(null);

const currentIndex = ref(0)

function handleSolutionCracked() {
  var nextLevel = levels[currentIndex.value + 1].main_chapter
  var nextChapter = levels[currentIndex.value + 1].sub_chapter
  if(currentIndex.value < levels.length - 1) {
    router.push(`/levels/${nextLevel}/chapters/${nextChapter}`)
    currentIndex.value++
  }
}

onMounted(() => {
  paramLevel.value = parseInt(route.params.main as string, 10);
  paramChapter.value = parseInt(route.params.sub as string, 10);

  const matchesParameters = (level) => level.main_chapter === paramLevel.value && level.sub_chapter === paramChapter.value;
  currentIndex.value = levels.findIndex(matchesParameters);
  if(currentIndex.value == -1) {
    // Falls Level nicht gefunden wird rufe Platzhalter Seite, TODO
  }
});

</script>

<script lang="ts">
export default {
  name: 'LevelView',
};
</script>

<template>
  <div v-if="levels[currentIndex]">
    <LevelScreen :level="levels[currentIndex]" @solution-cracked="handleSolutionCracked" />
  </div>
</template>

<style scoped>
</style>
