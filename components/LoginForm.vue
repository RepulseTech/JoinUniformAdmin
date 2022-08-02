<script setup lang="ts">
const { auth } = useSupabaseClient()

const email = $ref('')
const password = $ref('')

let loading = $ref(false)
let errorText = $ref('')

async function handleLogin() {
  try {
    errorText = ''
    loading = true
    const { error } = await auth.signIn({ email, password })
    if (error)
      throw error

    await navigateTo('/')
  }
  catch (error: any) {
    errorText = error.message
  }
  finally {
    loading = false
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
      <div class="flex justify-center">
        <img class="h-20 w-20" src="~/assets/img/logo.svg" alt="JoinUniform SVG">
      </div>

      <h3 class="mt-4 text-2xl font-bold text-center">
        Login to your account
      </h3>
      <div v-if="errorText" class="bg-red-100 rounded-lg py-3 px-6 mb-4 text-base text-red-700 mt-4" role="alert">
        {{ errorText }}
      </div>
      <form @submit.prevent="handleLogin">
        <div class="mt-4">
          <div>
            <label class="block" for="email">Email</label>
            <input
              v-model="email" type="email" name="email" placeholder="Email"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
            >
            <span class="text-xs  text-gray-600">*Administrator accounts only.</span>
          </div>
          <div class="mt-4">
            <label class="block" for="password">Password</label>
            <input
              v-model="password" type="password" name="password" placeholder="Password"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
            >
          </div>
          <div class="flex items-baseline justify-between mt-4">
            <button
              type="submit"
              :class="`btn btn-primary btn-block mt-4 text-white ${loading && 'loading'}`"
              :disabled="loading"
            >
              Login
            </button>

            <!-- <a href="#" class="text-sm text-primary hover:underline">Forgot password?</a> -->
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
