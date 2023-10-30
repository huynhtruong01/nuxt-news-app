<template>
  <NewsDetail :id="id" />
</template>

<script setup lang="ts">
import type { RouteParams } from "vue-router"

interface RouteParamsId extends RouteParams {
  id: string
}

const { id } = useRoute().params as RouteParamsId
</script>

<style scoped></style>
