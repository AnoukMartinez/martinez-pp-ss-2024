<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  title: String,
});
</script>

<template>
<div class="h-full w-48 bg-green-500 flex flex-col items-center justify-evenly">
    <router-link to="/">Home</router-link>
    <router-link to="/levels">Levels</router-link>
    <div>Skip</div>
    <router-link to="/">Settings</router-link>
    <router-link to="/">Info</router-link>
</div>
</template>

<style></style>