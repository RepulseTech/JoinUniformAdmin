export default defineNuxtPlugin(() => {
  const user = useSupabaseUser()
  // globally watch user and route. If a user and a redirect query param exist:
  watchEffect(() => {
    if (user.value) {
      const route = useRoute()
      if (route.query.redirect)
        navigateTo({ path: route.query.redirect as string })
    }
  })
})
