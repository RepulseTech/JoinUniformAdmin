<script setup lang="ts">
import MdiViewDashboard from '~icons/mdi/view-dashboard'
import MdiAccountSupervisor from '~icons/mdi/account-supervisor'
import IonIosPaper from '~icons/ion/ios-paper'
import MdiBriefcaseEdit from '~icons/mdi/briefcase-edit'
import ZondiconsAnnouncement from '~icons/zondicons/announcement'
import MaterialSymbolsLiveTvOutline from '~icons/material-symbols/live-tv-outline'
import OouiArticlesRtl from '~icons/ooui/articles-rtl'
import MaterialSymbolsLogoutRounded from '~icons/material-symbols/logout-rounded'
const navItems = [
  {
    text: 'Dashboard',
    url: '/',
    icon: MdiViewDashboard,
  },
  {
    text: 'Users',
    url: '/users',
    icon: MdiAccountSupervisor,
  },
  {
    text: 'Categories',
    url: '/categories',
    icon: MaterialSymbolsLogoutRounded,
  },
  {
    text: 'Exams',
    url: '/exams',
    icon: IonIosPaper,
  },
  {
    text: 'Questions',
    url: '/questions',
    icon: MdiBriefcaseEdit,
  },
  {
    text: 'Announcements',
    url: '/announcements',
    icon: ZondiconsAnnouncement,
  },
  {
    text: 'Videos',
    url: '/videos',
    icon: MaterialSymbolsLiveTvOutline,
  },
  {
    text: 'Articles',
    url: '/articles',
    icon: OouiArticlesRtl,
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
          <component :is="item.icon" />
          {{ item.text }}
        </NuxtLink>
      </li>
    </ul>
    <div class="text-center bottom-0 absolute w-full">
      <hr class="m-0">
      <p class="py-2 text-sm text-gray-700">
        Made with ❤️ by Repulse
      </p>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  background-color: #529B03;
  color: white
}
</style>
