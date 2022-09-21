import type { EntriesQuery } from '~~/graphql/generated'

export type EntryType = EntriesQuery['entries']['edges'][0]['node']
export type CreateEntryType = EntriesQuery['entries']['edges'][0]['node']
