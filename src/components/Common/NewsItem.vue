<template>
  <div class="w-full">
    <NuxtLink
      :to="`${linkPath}/${news.id}`"
      :class="twMerge('w-full grid grid-cols-[1fr_2fr] gap-3', className)"
    >
      <div
        :class="
          twMerge(
            'max-w-full w-full rounded-md rounded-es-none rounded-ee-none overflow-hidden h-[100px] group',
            stylingImage
          )
        "
      >
        <img
          :src="news.urlImage || ''"
          :alt="news.title"
          class="group-hover:scale-110 ease-in-out duration-300"
        />
      </div>
      <div>
        <h3
          class="text-lg font-bold text-slate-800 mb-1 line-clamp-1 hover:underline hover:text-red-600"
        >
          {{ news.title }}
        </h3>
        <p class="line-clamp-2 text-sm text-slate-700">
          {{ news.description }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { INews } from "../../models"
import { twMerge } from "tailwind-merge"

defineProps({
  news: {
    type: Object as PropType<INews>,
    required: true,
  },
  className: {
    type: String,
    default: "",
    required: false,
  },
  stylingImage: {
    type: String,
    default: "",
    required: false,
  },
  linkPath: {
    type: String,
    default: "/news",
    required: false,
  },
})
</script>

<style scoped></style>
