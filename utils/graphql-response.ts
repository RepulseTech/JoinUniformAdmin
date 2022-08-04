import type { GraphQLResponse } from 'graphql-request/dist/types'

export function mapGraphQLReponseToError(error: any): string {
  if (error?.reponse) {
    const { response } = error as { response: GraphQLResponse }

    const { errors } = response
    if (errors) {
      const error = errors[0]
      return error.message
    }
    return ''
  }
  return ''
}
