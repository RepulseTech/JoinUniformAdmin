import { defineStore } from 'pinia'
import type { EntriesQuery, EntryInput } from '~~/graphql/generated'
import { useGqlSdk } from '~~/graphql/sdk'
import { mapGraphQLReponseToError } from '~~/utils/graphql-response'

export const useEntriesStore = defineStore('entries', () => {
  const { entries: fetchAllEntries, createOneEntry, deleteOneEntry } = useGqlSdk()

  const entriesConnection = ref<EntriesQuery['entries'] | undefined>(undefined)
  const error = ref<string | undefined>(undefined)
  const loading = ref(false)
  const entries = computed(() => entriesConnection.value?.edges?.map(({ node }) => node) || [])
  const pageInfo = computed(() => entriesConnection.value?.pageInfo)

  async function initEntries() {
    const { data, error: _ } = await useAsyncData('entries', () => fetchAllEntries())
    if (_.value) {
      error.value = mapGraphQLReponseToError(_.value)
      return
    }

    if (data.value)
      entriesConnection.value = data.value.entries
  }

  async function fetchEntries() {
    try {
      loading.value = true
      const { entries } = await fetchAllEntries()
      entriesConnection.value = entries
    }
    catch (e) {
      error.value = mapGraphQLReponseToError(e)
    }
    finally {
      loading.value = false
    }
  }

  async function createEntry(entry: EntryInput) {
    try {
      await createOneEntry({ input: { entry } })
      await fetchEntries()
    }
    catch (e) {
      error.value = mapGraphQLReponseToError(e)
    }
  }

  async function deleteEntry(id: string) {
    try {
      await deleteOneEntry({ id })
      await fetchEntries()
    }
    catch (e) {
      error.value = mapGraphQLReponseToError(e)
    }
  }

  return { initEntries, fetchEntries, loading, entries, createEntry, deleteEntry, error, pageInfo }
})
