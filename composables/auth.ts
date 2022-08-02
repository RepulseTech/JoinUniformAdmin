import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const { auth } = useSupabaseClient()

  const email = ref('')
  const password = ref('')

  const loading = ref(false)

  const errorText = ref('')

  async function handleLogin() {
    try {
      errorText.value = ''
      loading.value = true
      const { error } = await auth.signIn({ email: email.value, password: password.value })
      if (error)
        throw error
    }
    catch (error: any) {
      errorText.value = error.message
    }
    finally {
      loading.value = false
    }
  }

  async function handleLogout() {
    try {
      await auth.signOut()
    }
    catch (error: any) {
      errorText.value = error.message
    }
  }

  return {
    email, password, loading, errorText, handleLogin, handleLogout,
  }
})
