<template>
  <footer class="bg-slate-100/80">
    <CommonContainer>
      <div
        class="pt-8 pb-4 grid grid-cols-[2fr_1fr_1fr_1fr] justify-between gap-4"
      >
        <div>
          <NuxtLink
            to="/"
            class="text-xl font-bold !text-slate-900 mb-4 inline-block"
            >News<span class="text-red-600">.</span></NuxtLink
          >
          <p class="text-sm text-slate-800 w-[70%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea magni
            magnam cupiditate
          </p>
        </div>
        <div v-for="category in footerCategories" :key="category.title">
          <h4 class="font-semibold text-slate-900 mb-4">
            {{ category.title }}
          </h4>
          <ul class="flex gap-2 flex-col">
            <li v-for="item in category.items" :key="item">
              <a
                href=""
                target="_blank"
                class="capitalize font-normal text-sm"
                >{{ item }}</a
              >
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p class="text-center pt-4 pb-6 text-slate-600">
        Made and created by <span class="font-bold">Fake New company</span>
      </p>
    </CommonContainer>
  </footer>
</template>

<script setup lang="ts">
const footerCategories = ref([
  {
    title: "Company",
    items: ["our story", "history", "leadership", "careers", "contact us"],
  },
  {
    title: "Other",
    items: ["fashion", "sports", "technology", "travel", "education"],
  },
  {
    title: "Socials",
    items: ["instagram", "twitter", "facebook", "telegram"],
  },
])
</script>

<style scoped></style>
