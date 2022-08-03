import { GraphQLClient } from 'graphql-request'
import type { Sdk } from './generated'
import { getSdk } from './generated'

export const useGqlSdk = (): Sdk => {
  const nuxtApp = useNuxtApp()
  const token = useSupabaseToken()

  const config = useRuntimeConfig().public

  if (!config.GQL_HOST)
    throw new Error('GRAPHQL_URL is not set')

  // No need to recreate client if exists
  if (!nuxtApp._gqlSdk) {
    const client = new GraphQLClient(config.GQL_HOST, {
      headers: () => ({
        authorization: `Bearer ${token.value}`,
      }),
    })
    nuxtApp._gqlSdk = getSdk(client)
  }

  return nuxtApp._gqlSdk
}
