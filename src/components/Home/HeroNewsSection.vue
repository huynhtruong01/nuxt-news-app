<template>
  <section class="pt-8">
    <div class="grid grid-cols-[2fr_1.5fr] gap-6">
      <div class="relative">
        <div
          class="relative h-[45vh] flex-[2] rounded-md overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black/0 before:to-black/90"
          :style="{
            backgroundImage: `url(${list[0].urlImage || ''})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }"
        >
          <div class="absolute top-0 left-0 w-full h-full p-6">
            <div class="absolute bottom-10">
              <h1 class="text-white font-bold text-2xl mb-4">
                {{ list[0].title }}
              </h1>
              <p class="line-clamp-3 text-white">
                {{ list[0].description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <div v-for="news in otherNewsList" :key="news.id">
          <CommonNewsItem :news="news" stylingImage="max-h-[97px]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { INews } from "../../models/news"

const { list } = defineProps({
  list: {
    type: Array as PropType<INews[]>,
    required: true,
  },
})

const otherNewsList = computed(() => list.slice(1, 5))
</script>

<style scoped></style>
