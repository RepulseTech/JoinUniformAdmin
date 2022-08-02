<script setup lang="ts">
definePageMeta({
  layout: 'guest',
})
useHead({
  title: 'Login - JoinUniform',
})
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

watchEffect(() => {
  if (user.value)
    navigateTo('/', { replace: true })
})

const loading = ref(false)
const email = ref('admin@joinuniform.com')
const password = ref('Test1234!')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await auth.signIn({ email: email.value, password: password.value })
    if (error)
      throw error
  }
  catch (error: any) {
    // eslint-disable-next-line no-alert
    alert(error.error_description || error.message)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <LoginForm />
  </div>
</template>
