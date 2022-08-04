<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <div class="flex">
    <aside class="h-screen sticky top-0">
      <SideDrawer />
    </aside>

    <div class="flex flex-col w-full">
      <TopBar />
      <main class="relative py-20 px-10 text-center min-h-screen bg-base-200">
        <slot />
      </main>
    </div>
  </div>
</template>
