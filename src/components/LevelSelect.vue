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
      <router-link to="/">
        <button class="bg-yellow-500 rounded-xl m-6 mb-0 px-6 py-2">Zurück zu Home</button>
      </router-link>
      <LevelSelectButton v-for="level in levels" :level="level" />
    </div>
  </div>
</template>


<style scoped>
</style>
