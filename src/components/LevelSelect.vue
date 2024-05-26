<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'LevelSelect',
};
</script>

<template>
    <div class="h-screen flex flex-col items-center m-8">
        <div class="flex flex-row justify-center space-x-12 w-full">
            <button class="bg-red-500 rounded-t-lg w-1/6">Levels</button>
            <button class="bg-yellow-500 rounded-t-lg w-1/6">Tutorials</button>
        </div>
            
        <div class="flex flex-col border-2 w-1/2 h-full rounded-3xl items-center">
                <router-link to="level1"><button>Play</button></router-link>
        </div>
    </div>
</template>

<style scoped>
</style>
