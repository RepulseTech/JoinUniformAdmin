<script setup lang="ts">
import { storeToRefs } from 'pinia'
const me = useSupabaseUser()
watchEffect(() => {
  if (!me.value)
    navigateTo('/login', { replace: true })
})

const { handleLogout } = useAuthStore()
const usersStore = useUsersStore()
const { users, loading } = storeToRefs(usersStore)
await usersStore.initUsers()
</script>

<template>
  <div class="italic flex flex-col gap-4 items-center mb-8">
    <code v-if="me" class="animate-pulse">{{ me?.email }}</code>
    <p v-if="loading">
      Loading...
    </p>
    <div v-for="user in users" v-else :key="user.id">
      <p>
        {{ user.email }}
      </p>
      <p>
        {{ user.rawUserMetaData.name }}
      </p>
    </div>
    <button class="btn btn-active btn-primary w-32" @click="handleLogout">
      Logout
    </button>
    <button class="btn btn-active btn-secondary w-32" @click="usersStore.fetchUsers">
      Refresh
    </button>
  </div>
</template>

