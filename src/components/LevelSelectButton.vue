<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { Level } from './DialogueLine.ts'

const props = defineProps<{ level : Level }>();

const backgroundStyle = computed(() => {
  return {
    backgroundImage: `url(${props.level.backgrounds[0]})`,
  };
});
</script>

<script lang="ts">
export default {
  name: 'LevelSelectButton',
};
</script>

<template>
  <button>
    <div class="flex flex-row justify-between">
        <div class="w-14 h-14 border-4" :style="backgroundStyle">  
            
        </div>
        {{ props.level.main_chapter }}.{{ props.level.sub_chapter }}
    </div>
  </button>
</template>

<style scoped></style>
