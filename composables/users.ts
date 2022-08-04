import { defineStore } from 'pinia'
import type { UsersQuery } from '~~/graphql/generated'
import { useGqlSdk } from '~~/graphql/sdk'
import { mapGraphQLReponseToError } from '~~/utils/graphql-response'

export const useUsersStore = defineStore('users', () => {
  const { users: usersQuery } = useGqlSdk()

  const usersConnection = ref<UsersQuery['users'] | undefined>(undefined)
  const error = ref<string | undefined>(undefined)
  const loading = ref(false)
  const users = computed(() => usersConnection.value?.edges?.map(({ node }) => node) || [])

  async function initUsers() {
    const { data, error: _ } = await useAsyncData('users', () => usersQuery())

    if (data)
      usersConnection.value = data.value.users

    if (_.value)
      error.value = mapGraphQLReponseToError(_.value)
  }

  async function fetchUsers() {
    try {
      loading.value = true
      const { users } = await usersQuery()
      usersConnection.value = users
    }
    catch (e) {
      error.value = mapGraphQLReponseToError(e)
    }
    finally {
      loading.value = false
    }
  }

  return { users, initUsers, fetchUsers, error, loading }
})
