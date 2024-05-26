<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'HomePage',
};
</script>

<template>
  <div>
    <h1>Game Title</h1>
    <router-link to="level1"><button>Play</button></router-link>
    <router-link to="levels"><button>Levels</button></router-link>
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
