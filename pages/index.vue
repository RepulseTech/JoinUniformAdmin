<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const client = useSupabaseClient()

const loading = ref(false)

const user = useSupabaseUser()

const handleLogout = async () => {
  try {
    loading.value = true
    await client.auth.signOut()
    navigateTo('/login')
  }
  catch (error) {

  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="italic flex flex-col gap-4 items-center mb-8">
    <span class="animate-pulse">{{ user?.email }}</span>
    <button class="btn btn-active btn-primary w-32" :disabled="loading" @click="handleLogout">
      {{ loading ? 'Loading...' : 'Logout' }}
    </button>
  </div>
</template>

