<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const supabase = useSupabaseClient()

const user = useSupabaseUser()

const handleLogOut = async () => {
  await supabase.auth.signOut()
  navigateTo('/login')
}
</script>

<template>
  <div class="italic flex flex-col gap-4 items-center mb-8">
    <span class="animate-pulse">{{ user?.email }}</span>
    <button class="btn btn-active btn-primary w-32" @click="handleLogOut">
      Log out
    </button>
  </div>
</template>
