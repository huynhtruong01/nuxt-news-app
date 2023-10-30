<template>
  <CommonNewsContainer :list="list" title="News" linkPath="/news" />
</template>

<script setup lang="ts">
import type { INews } from "../../models"

useHead({
  title: "News",
})

const { list } = await useListFetchApi<INews>(
  `${import.meta.env.VITE_BASE_URL}/news`
)
</script>

<style scoped></style>
