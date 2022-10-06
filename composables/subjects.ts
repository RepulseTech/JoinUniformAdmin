import { defineStore } from 'pinia'
import type { SubjectsQuery } from '~~/graphql/generated'
import { useGqlSdk } from '~~/graphql/sdk'
import { mapGraphQLReponseToError } from '~~/utils/graphql-response'

export const useSubjectsStore = defineStore('subjects', () => {
  const { subjects: fetchAllSubjects } = useGqlSdk()

  const subjectsConnection = ref<SubjectsQuery['subjects'] | undefined>(undefined)
  const error = ref<string | undefined>(undefined)
  const loading = ref(false)
  const subjects = computed(() => subjectsConnection.value?.edges?.map(({ node }) => node) || [])
  const pageInfo = computed(() => subjectsConnection.value?.pageInfo)

  async function initSubjects() {
    const { data, error: _ } = await useAsyncData('subjects', () => fetchAllSubjects())
    if (_.value) {
      error.value = mapGraphQLReponseToError(_.value)
      return
    }

    if (data.value)
      subjectsConnection.value = data.value.subjects
  }

  async function fetchSubjects() {
    try {
      loading.value = true
      const { subjects } = await fetchAllSubjects()
      subjectsConnection.value = subjects
    }
    catch (e) {
      error.value = mapGraphQLReponseToError(e)
    }
    finally {
      loading.value = false
    }
  }

  return { initSubjects, fetchSubjects, loading, subjects, pageInfo, error }
})
