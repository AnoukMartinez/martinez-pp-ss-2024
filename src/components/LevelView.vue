<script setup lang="ts">
import DialogueBox from '../components/DialogueBox.vue';
import MockConsole from '../components/MockConsole.vue';
import { dialogue_lines } from '../components/testdata/dialogueLines';
</script>

<script lang="ts">
export default {
  name: 'LevelView',
};
</script>

<template>
  <MockConsole msg="git add" />
  <br>
  <DialogueBox :dialogue_lines="dialogue_lines" />
</template>

<style scoped></style>
