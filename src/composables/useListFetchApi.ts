export const useListFetchApi = async <T>(url: string) => {
  try {
    const list: Ref<T[]> = ref([])
    const { data, pending, error } = await useFetch<any>(url)
    list.value = (data.value || []) as T[]
    return { list, pending, error }
  } catch (error) {
    throw new Error(error as string)
  }
}
