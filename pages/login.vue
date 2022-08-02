<script setup lang="ts">
definePageMeta({
  layout: 'guest',
})
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

watchEffect(() => {
  if (user.value)
    navigateTo('/')
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
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">
          Login now!
        </h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
      <form @submit.prevent="handleLogin">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input v-model="email" type="text" placeholder="email" class="input input-bordered">
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input v-model="password" type="password" placeholder="password" class="input input-bordered">
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div class="form-control mt-6">
              <input
                type="submit" class="btn btn-primary" :value="loading ? 'Loading' : 'Login'"
                :disabled="loading"
              >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
