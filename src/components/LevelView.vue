<script setup lang="ts">
import DialogueBox from '../components/DialogueBox.vue';
import MockConsole from '../components/MockConsole.vue';
import Console from '../components/Console.vue';
import { dialogue_lines } from '../components/testdata/dialogueLines';
import { ref } from 'vue';
</script>

<script lang="ts">
export default {
  name: 'LevelView',
};

const monitoredValue = ref(false)

const handleValueChange = (newValue : boolean) => {
  monitoredValue.value = newValue
}
</script>

<template>
  <div id="wrapper">
    <div class="console">
      <Console msg="git add" @update:value="handleValueChange"/>
      <p>Value in app: {{ monitoredValue }}</p>
    </div>
  
    <br>
    <DialogueBox :dialogue_lines="dialogue_lines" />
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
}

#wrapper {
  height: 100%;
  width: 100%;
  border:solid 1px green;
}

.console {
  top:0;
  left:0;
  border:solid 1px red;
}
</style>
