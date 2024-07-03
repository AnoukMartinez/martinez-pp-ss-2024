<script setup lang="ts">
import { computed } from 'vue';

const backgroundImage = computed(() => {
  return {
    backgroundImage: 'url(/assets/menucover.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
  };
});
</script>

<script lang="ts">
export default {
  name: 'HomePage',
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center" :style="backgroundImage">
    <h1 class="mb-16 text-8xl text-red-500 font-extrabold bg-white ">Burger & Spagitti</h1>
    <div class="flex flex-col w-80">
      <router-link to="levels/0/chapters/1"><button class="bg-black hover:bg-white hover:text-black text-white text-2xl py-2 px-6 mb-2 rounded-lg w-full font-extrabold">NEUES SPIEL</button></router-link>
      <router-link to="levels"><button class="bg-black hover:bg-white hover:text-black text-white text-2xl py-2 px-6 mb-2 rounded-lg w-full font-extrabold">LEVEL AUSWAHL</button></router-link>
      <router-link to="levels"><button class="bg-black hover:bg-white hover:text-black text-white text-2xl py-2 px-6 mb-2 rounded-lg w-full font-extrabold">EINSTELLUNGEN</button></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
