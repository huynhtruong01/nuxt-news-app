<template>
  <section class="pb-16">
    <data v-if="pending">Loading...</data>
    <CommonContainer>
      <div v-if="item" class="pb-8">
        <div class="h-[500px] overflow-hidden rounded-md">
          <img :src="item.urlImage" :alt="item.title" />
        </div>
        <div class="mt-10">
          <h1 class="text-3xl font-bold text-center mb-8">{{ item.title }}</h1>
          <p class="mb-6 flex justify-end">
            <span class="font-semibold">{{ item.author }}</span
            >,
            <span class="inline-block pl-1 italic text-slate-700">{{
              formatDate(item.updatedAt)
            }}</span>
          </p>
          <article class="flex flex-col gap-4">
            <p>
              {{ item.content }}
            </p>
            <p v-for="n in 10" :key="n">{{ description }}</p>
          </article>
        </div>
      </div>
      <hr />
      <div class="py-8">
        <h4 class="text-xl font-bold text-slate-900 mb-4">Related News</h4>
        <div class="grid grid-cols-4 gap-4" v-if="relatedList.length">
          <div v-for="news in relatedList" :key="news.id">
            <NewsItem :news="news" :linkPath="`/${path}`" />
          </div>
        </div>
        <div v-if="!relatedList.length" class="text-center py-4 text-slate-700">
          No related {{ path }}
        </div>
      </div>
    </CommonContainer>
  </section>
</template>

<script setup lang="ts">
import type { INews } from "../../models"
import { formatDate } from "../../utils"

const route = useRoute()
const path = ref(route.path.split("/")[1])

const { id } = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const { item, pending } = await useDetailFetchApi<INews>(
  `${import.meta.env.VITE_BASE_URL}/news/${id}`,
  id
)

const { list } = await useListFetchApi<INews>(
  `${import.meta.env.VITE_BASE_URL}/news`
)

const relatedList = computed(() => {
  return item
    ? list.value
        .filter(
          (i) => i.category === item.value?.category && i.id !== item.value.id
        )
        .slice(0, 8)
    : []
})

if (item.value) {
  useSeoMeta({
    title: item.value.title || "",
    ogTitle: item.value.title || "",
    description: item.value.description || "",
    ogDescription: item.value.description || "",
    ogImage: item.value.urlImage || "",
  })
}

const description = ref(`Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Id cum nihil possimus perspiciatis autem
              laboriosam aperiam, animi praesentium neque quo. Possimus, ratione
              magnam ad cupiditate veritatis natus qui quae dolore sequi,
              reprehenderit, voluptatum vel esse harum consectetur distinctio! Sit
              deleniti doloribus asperiores unde saepe odit, esse aliquid eligendi
              obcaecati quo? Ab maxime veniam quos placeat blanditiis non magni
              quaerat nesciunt deserunt sequi! Delectus magnam quibusdam harum
              nesciunt velit earum reiciendis pariatur necessitatibus maxime
              eligendi, ad cupiditate animi a quam, molestias est? Blanditiis,
              ducimus doloribus laudantium veritatis quos labore? Magni eaque
              provident, quo quibusdam nesciunt aliquam culpa? Perferendis
              voluptatibus modi deleniti!`)
</script>

<style scoped></style>
