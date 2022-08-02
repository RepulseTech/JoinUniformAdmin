import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/supabase',
    [
      'unplugin-icons/nuxt',
      {
        autoInstall: true,
        prefix: false,
      },
    ],
  ],
  components: {
    global: true,
    dirs: [
      '~/components',
      '~/node_modules/@headlessui/vue/dist/components',
    ],
  },
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  colorMode: {
    classSuffix: '',
  },
})
