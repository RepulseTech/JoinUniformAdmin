import { defineStore } from 'pinia'
import type { EntriesQuery } from '~~/graphql/generated'
import { useGqlSdk } from '~~/graphql/sdk'
import { mapGraphQLReponseToError } from '~~/utils/graphql-response'

export const useEntriesStore = defineStore('entries', () => {
  const { entries: fetchAllEntries } = useGqlSdk()

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

  return { initEntries, fetchEntries, loading, entries, error, pageInfo }
})
