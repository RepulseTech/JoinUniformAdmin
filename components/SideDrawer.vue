<script setup lang="ts">
const navItems = [
  {
    text: 'Dashboard',
    url: '/',
  },
  {
    text: 'Users',
    url: '/users',
  },
  {
    text: 'Entries',
    url: '/entries',
  },
  {
    text: 'Templates',
    url: '/templates',
  },
  {
    text: 'Exams',
    url: '/exams',
  },
  {
    text: 'Questions',
    url: '/questions',
  },
  {
    text: 'Syllabus',
    url: '/syllabus',
  },
  {
    text: 'Announcements',
    url: '/announcements',
  },
  {
    text: 'Videos',
    url: '/videos',
  },
  {
    text: 'Articles',
    url: '/articles',
  },
]
</script>

<template>
  <div class="w-60 h-full shadow-md bg-white sticky">
    <div class="pt-4 pb-2 px-6">
      <a href="#!">
        <div class="flex items-center">
          <div class="shrink-0">
            <SiteLogo />
          </div>
          <div class="grow ml-3">
            <p class="text-sm font-semibold">JoinUniform</p>
          </div>
        </div>
      </a>
    </div>
    <ul class="menu bg-base-100 w-56 p-2 rounded-box">
      <li v-for="item in navItems" :key="item.text">
        <NuxtLink :to="item.url">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          {{ item.text }}
        </NuxtLink>
      </li>
    </ul>
    <div class="text-center bottom-0 absolute w-full">
      <hr class="m-0">
      <p class="py-2 text-sm text-gray-700">
        tailwind-elements.com
      </p>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  background-color: #529B03;
  color: #DCFFB8
}
</style>
