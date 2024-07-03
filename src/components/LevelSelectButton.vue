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
    <div class="bg-red-300 hover:bg-red-100 h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 w-11/12 mx-auto my-6 rounded-xl flex items-center justify-center">
      <router-link :to="`/levels/${level.main_chapter}/chapters/${level.sub_chapter}`" class="w-full h-full flex items-center">
        <div class="w-full h-full flex items-center m-4">
            <div class="w-1/6 h-5/6 bg-gray-200 rounded-xl" :style="backgroundStyle">
              <!-- Hier kommt das Preview Image rein -->
            </div>

            <div class="flex flex-col items-start ml-8 w-full h-full justify-around">
                <div>
                  <div class="text-4xl font-bold mb-2">
                    {{ props.level.main_chapter }}.{{ props.level.sub_chapter }} {{ props.level.title }}
                  </div>

                  <div class="text-xl">
                    {{ props.level.preview.description }}
                  </div>
                </div>

                <div class="text-gray-600">
                  Keywords:
                  <span v-for="(flag, index) in level.flags" :key="flag.id">
                    {{ flag.keyword }}<span v-if="index < level.flags.length - 1">, </span>
                  </span>
                </div>
            </div>
          </div>
        </router-link>
    </div>
</template>

<style scoped></style>
