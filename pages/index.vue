<script setup lang="ts">
const user = useSupabaseUser()
watchEffect(() => {
  if (!user.value)
    navigateTo('/login', { replace: true })
})
const { handleLogout } = useAuthStore()
</script>

<template>
  <div class="italic flex flex-col gap-4 items-center mb-8">
    <code v-if="user" class="animate-pulse">{{ JSON.stringify(user) }}</code>
    <button class="btn btn-active btn-primary w-32" @click="handleLogout">
      Logout
    </button>
  </div>
</template>

