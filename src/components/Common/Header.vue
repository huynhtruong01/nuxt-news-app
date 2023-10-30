import type { NuxtLink } from '#build/components';
<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow-sm z-40">
    <CommonContainer>
      <div class="flex justify-between items-center py-4">
        <NuxtLink to="/" class="text-2xl font-bold !text-slate-900"
          >News</NuxtLink
        >
        <nav>
          <ul class="flex items-center gap-4">
            <li v-for="navLink in navLinks" :key="navLink.name">
              <NuxtLink
                :to="navLink.link"
                class="py-2 px-4 text-slate-800 font-medium"
                >{{ navLink.name }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </CommonContainer>
  </header>
</template>

<script setup lang="ts">
import type { INavLink } from "../../models"
const navLinks: Ref<INavLink[]> = ref([
  {
    name: "News",
    link: "/news",
  },
  {
    name: "Events",
    link: "/events",
  },
])
</script>

<style scoped></style>
