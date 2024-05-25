<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'HomePage',
};
</script>

<template>
  <div>
    <h1>Game Title</h1>
    <button><router-link to="level1">Play</router-link></button>
    <button>Levels</button>
    <button>Settings</button>
    <router-view></router-view>
  </div>
</template>

<style scoped>
button {
  width: 50%;
  margin: 10px;
}
</style>
