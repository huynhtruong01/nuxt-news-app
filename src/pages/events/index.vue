<template>
  <CommonNewsContainer :list="list" title="Events" linkPath="/events" />
</template>

<script setup lang="ts">
import type { INews } from "../../models"

useHead({
  title: "Events",
})

const { list } = await useListFetchApi<INews>(
  `${import.meta.env.VITE_BASE_URL}/news`
)
</script>

<style scoped></style>
