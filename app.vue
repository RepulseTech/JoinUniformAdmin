<script setup>
import '@fontsource/work-sans'
import '~/assets/css/tailwind.css'
useHead({
  title: 'Admin Panel - JoinUniform',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/favicon.ico',
    },
  ],
})
</script>

<template>
  <div class="antialiased">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
