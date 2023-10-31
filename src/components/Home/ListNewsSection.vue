<template>
  <section :class="twMerge('pt-20 pb-12', className)">
    <div class="mb-4 flex justify-between items-center">
      <h2 class="text-2xl font-bold capitalize">{{ title }}</h2>
      <NuxtLink :to="link" class="underline hover:text-red-600"
        >See all</NuxtLink
      >
    </div>
    <div class="grid grid-cols-5 gap-6">
      <div
        v-for="news in list.slice(list.length - 10, list.length)"
        :key="news.id"
      >
        <CommonNewsItem
          :news="news"
          className="grid-cols-1"
          stylingImage="h-[140px]"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { INews } from "../../models"
import { twMerge } from "tailwind-merge"

defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  list: {
    type: Array as PropType<INews[]>,
    required: true,
  },
  className: {
    type: String,
    required: false,
    default: "",
  },
})
</script>

<style scoped></style>
