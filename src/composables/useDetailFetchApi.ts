export const useDetailFetchApi = async <T>(url: string) => {
  try {
    const item: Ref<T | null> = ref(null)
    const { data, pending, error } = await useFetch<any>(url)
    item.value = (data.value || {}) as T
    return { item, pending, error }
  } catch (error) {
    throw new Error(error as string)
  }
}
