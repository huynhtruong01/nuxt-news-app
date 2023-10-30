<template>
  <section class="pt-10 pb-16">
    <CommonContainer>
      <h2 class="text-center text-3xl font-bold text-slate-900 mb-8">
        {{ title }}
      </h2>
      <div class="grid grid-cols-3 gap-6">
        <div v-for="news in list" :key="news.id">
          <CommonNewsItem
            :news="news"
            :linkPath="linkPath"
            className="grid-cols-1"
            stylingImage="max-h-[200px]"
          />
        </div>
      </div>
    </CommonContainer>
  </section>
</template>

<script setup lang="ts">
import type { INews } from "../../models"

const { title, linkPath, list } = defineProps({
  title: {
    type: String,
    required: true,
  },
  linkPath: {
    type: String,
    required: true,
  },
  list: {
    type: Array as PropType<INews[]>,
    required: true,
  },
})
</script>

<style scoped></style>
