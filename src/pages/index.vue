<template>
  <CommonContainer>
    <HomeHeroNewsSection :list="list" />
    <HomeListNewsSection title="news latest" link="/news" :list="listLatest" />
    <HomeListNewsSection
      title="event latest"
      link="/events"
      :list="listLatest"
      className="pt-10"
    />
  </CommonContainer>
</template>

<script setup lang="ts">
import type { INews } from "../models"

useHead({
  title: "Home",
})

const { list } = await useListFetchApi<INews>(
  `${import.meta.env.VITE_BASE_URL}/news`
)
const listLatest = computed(() =>
  list.value.slice(list.value.length - 10, list.value.length)
)
</script>

<style scoped></style>
