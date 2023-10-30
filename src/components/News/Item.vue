<template>
  <div :class="twMerge('relative', className)">
    <NuxtLink :to="`${linkPath}/${news.id}`">
      <div
        class="relative h-[200px] flex-[2] rounded-md overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black/0 before:to-black/90"
        :style="{
          backgroundImage: `url(${news.urlImage || ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }"
      >
        <div class="absolute top-0 left-0 w-full h-full">
          <div class="absolute bottom-4 p-3">
            <h1 class="text-white font-bold text-xl mb-2">
              {{ news.title }}
            </h1>
            <p class="line-clamp-2 text-white text-sm">
              {{ news.description }}
            </p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { INews } from "../../models"
import { twMerge } from "tailwind-merge"

const { news, className, linkPath } = defineProps({
  news: {
    type: Object as PropType<INews>,
    required: true,
  },
  className: {
    type: String,
    required: false,
    default: "",
  },
  linkPath: {
    type: String,
    required: true,
  },
})
</script>

<style scoped></style>
