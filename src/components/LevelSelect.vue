<script setup lang="ts">
import { levels } from './testdata/levels.ts'
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
        
        <div class="flex flex-col border-2 w-3/4 h-full rounded-3xl items-center">
            <router-link v-for="level in levels" :to="`/levels/${level.main_chapter}/chapters/${level.sub_chapter}`" class="w-full">
                <div class="bg-red-300 h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 w-11/12 mx-auto my-6 rounded flex items-center justify-center">
                    <LevelSelectButton :level="level" />
                </div>
            </router-link>
        </div>
    </div>
</template>


<style scoped>
</style>
