export const useDetailFetchApi = async <T>(
  url: string,
  id: string,
  isAsync = false
) => {
  try {
    const item: Ref<T | null> = ref(null)
    if (isAsync) {
      const { data, pending, error } = await useAsyncData<T>(`item-${id}`, () =>
        $fetch(url)
      )
      item.value = data.value as T
      return { item, pending, error }
    }
    const { data, pending, error } = await useFetch<T>(url)
    item.value = data.value as T
    return { item, pending, error }
  } catch (error) {
    throw new Error(error as string)
  }
}
