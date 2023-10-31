<template>
  <div :class="twMerge('max-w-[1220px] m-auto px-4')">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge"

defineProps({
  className: {
    type: String,
    default: "",
  },
})
</script>

<style scoped></style>
