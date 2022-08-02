<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
const user = useSupabaseUser()
const { handleLogout } = useAuthStore()
</script>

<template>
  <div class="italic flex flex-col gap-4 items-center mb-8">
    <span class="animate-pulse">{{ user?.email }}</span>
    <button class="btn btn-active btn-primary w-32" @click="handleLogout">
      Logout
    </button>
  </div>
</template>

