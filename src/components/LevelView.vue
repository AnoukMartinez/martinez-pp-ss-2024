<script setup lang="ts">
import LevelScreen from './LevelScreen.vue'
import { Level } from './DialogueLine.ts'
import { level_1_1, level_1_2, level_1_3 } from './testdata/levels.ts'
import { ref } from 'vue'

var currentIndex = ref(0)
var levels = ref([level_1_1, level_1_2, level_1_3])

const handleSolutionCracked = () => {
  if(currentIndex.value < levels.value.length - 1) {
    currentIndex.value++
  }
}

</script>

<script lang="ts">
export default {
  name: 'LevelView',
};
</script>

<template>
  <LevelScreen :level="levels[currentIndex]" @solution-cracked="handleSolutionCracked" />
</template>

<style scoped>
</style>
