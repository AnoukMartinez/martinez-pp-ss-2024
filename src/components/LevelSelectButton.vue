<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { Level } from './DialogueLine.ts'

const props = defineProps<{ level : Level }>();

const backgroundStyle = computed(() => {
  return {
    backgroundImage: `url(${props.level.backgrounds[0]})` ,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
});
</script>

<script lang="ts">
export default {
  name: 'LevelSelectButton',
};
</script>

<template>
    <div class="bg-red-300 h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 w-11/12 mx-auto my-6 rounded flex items-center justify-center">
        <button class="w-full h-full flex items-center justify-between m-4">
            <div class="w-1/6 h-5/6" :style="backgroundStyle"></div>
            <div class="text-4xl">
                {{ props.level.main_chapter }}.{{ props.level.sub_chapter }}
            </div>
        </button>
    </div>
</template>

<style scoped></style>
