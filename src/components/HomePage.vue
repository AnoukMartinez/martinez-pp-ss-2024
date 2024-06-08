<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'HomePage',
};
</script>

<template>
  <div class="border-2 min-h-screen flex flex-col items-center justify-center">
    <h1 class="mb-16 text-8xl text-red-500 font-extrabold">Burger & Spaghitti</h1>
    <div class="flex flex-col w-60">
      <router-link to="levels/1/chapters/1"><button class="bg-black text-white py-2 px-6 mb-2 rounded-lg w-full">Play</button></router-link>
      <router-link to="levels"><button class="bg-black text-white py-2 px-6 mb-2 rounded-lg w-full">Levels</button></router-link>
      <router-link to="levels"><button class="bg-black text-white py-2 px-6 mb-2 rounded-lg w-full">Settings</button></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
