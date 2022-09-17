<script setup lang="ts">
definePageMeta({
  layout: 'guest',
})
useHead({
  title: 'Login - JoinUniform',
})

const route = useRoute()

const user = useSupabaseUser()
watchEffect(() => {
  if (user.value)
    navigateTo(`${route.query.redirect || '/'}`, { replace: true })
})
</script>

<template>
  <div>
    <LoginForm />
  </div>
</template>
