<script setup lang="ts">
definePageMeta({
  layout: 'guest',
})
useHead({
  title: 'Login - JoinUniform',
})
const user = useSupabaseUser()
watchEffect(() => {
  if (user.value)
    navigateTo('/', { replace: true })
})
</script>

<template>
  <div>
    <LoginForm />
  </div>
</template>
