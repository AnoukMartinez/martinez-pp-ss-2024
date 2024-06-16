<script setup lang="ts">
import { levels } from './testdata/levelObjects.ts'
import LevelSelectButton from './LevelSelectButton.vue'
</script>
<script lang="ts">
export default {
  name: 'LevelSelect',
};

</script>

<template>
  <div class="h-screen flex flex-col items-center m-8">
    <div class="flex flex-row justify-center space-x-12 w-full">
      <button class="bg-red-500 rounded-t-lg w-1/6 h-16">Levels</button>
      <button class="bg-yellow-500 rounded-t-lg w-1/6 h-16">Tutorials</button>
    </div>
    
    <div class="bg-red-500 flex flex-col w-3/4 rounded-3xl items-center">
      <!--  <router-link v-for="level in levels" :key="`${level.main_chapter}-${level.sub_chapter}`" :to="`/levels/${level.main_chapter}/chapters/${level.sub_chapter}`" class="w-full"> -->
      <LevelSelectButton v-for="level in levels" :level="level" />
    </div>
  </div>
</template>


<style scoped>
</style>
