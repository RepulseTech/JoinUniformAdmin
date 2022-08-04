<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { UseTimeAgo } from '@vueuse/components'
const me = useSupabaseUser()
watchEffect(() => {
  if (!me.value)
    navigateTo('/login', { replace: true })
})

const usersStore = useUsersStore()
const { users, loading } = storeToRefs(usersStore)
await usersStore.initUsers()
</script>

<template>
  <div class="italic flex flex-col gap-4 items-center mb-8">
    <p v-if="loading">
      Loading....
    </p>
    <Table>
      <template #header>
        <TableHeadItem>
          #
        </TableHeadItem>
        <TableHeadItem>
          Name
        </TableHeadItem>
        <TableHeadItem>
          Email
        </TableHeadItem>
        <TableHeadItem>
          Phone
        </TableHeadItem>
        <TableHeadItem>
          Last Activity
        </TableHeadItem>
        <TableHeadItem>
          Joined At
        </TableHeadItem>
        <TableHeadItem>
          Actions
        </TableHeadItem>
      </template>
      <template #body>
        <TableRow v-for="(user, i) in users" :key="user.id">
          <TableItem>
            {{ i + 1 }}.
          </TableItem>
          <TableItem>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img :src="user.rawUserMetaData.picture">
                </div>
              </div>
              <div>
                <div class="font-bold">
                  {{ user.rawUserMetaData.name }}
                </div>
                <div class="text-sm opacity-50">
                  {{ user.rawUserMetaData.email_verified ? 'Verified' : 'Unverified' }}
                </div>
              </div>
            </div>
          </TableItem>
          <TableItem>
            {{ user.email }}
          </TableItem>
          <TableItem>
            {{ user.phone ?? '-' }}
          </TableItem>
          <TableItem>
            <UseTimeAgo v-slot="{ timeAgo }" :time="user.lastSignInAt">
              {{ timeAgo }}
            </UseTimeAgo>
          </TableItem>
          <TableItem>
            <UseTimeAgo v-slot="{ timeAgo }" :time="user.created">
              {{ timeAgo }}
            </UseTimeAgo>
          </TableItem>
          <TableItem>
            <button class="btn btn-outline btn-sm btn-primary">
              Delete
            </button>
          </TableItem>
        </TableRow>
      </template>
    </Table>
  </div>
</template>

