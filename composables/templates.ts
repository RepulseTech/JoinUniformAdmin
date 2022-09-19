import { defineStore } from 'pinia'
import type { TemplatesQuery } from '~~/graphql/generated'
import { useGqlSdk } from '~~/graphql/sdk'
import { mapGraphQLReponseToError } from '~~/utils/graphql-response'

export const useTemplatesStore = defineStore('templates', () => {
  const { templates: fetchAllTemplates } = useGqlSdk()

  const templatesConnection = ref<TemplatesQuery['categories'] | undefined>(undefined)
  const error = ref<string | undefined>(undefined)
  const loading = ref(false)
  const templates = computed(() => templatesConnection.value?.edges?.map(({ node }) => node) || [])
  const pageInfo = computed(() => templatesConnection.value?.pageInfo)

  async function initTemplates() {
    const { data, error: _ } = await useAsyncData('templates', () => fetchAllTemplates())
    if (_.value) {
      error.value = mapGraphQLReponseToError(_.value)
      return
    }

    if (data.value)
      templatesConnection.value = data.value.categories
  }

  async function fetchTemplates() {
    try {
      loading.value = true
      const { categories } = await fetchAllTemplates()
      templatesConnection.value = categories
    }
    catch (e) {
      error.value = mapGraphQLReponseToError(e)
    }
    finally {
      loading.value = false
    }
  }

  return { initTemplates, fetchTemplates, loading, templates, error, pageInfo }
})
