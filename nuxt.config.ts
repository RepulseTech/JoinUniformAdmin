export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
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
  vueuse: {
    ssrHandlers: true,
  },
  colorMode: {
    preference: 'light',
    classSuffix: '',
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  alias: {
    'graphql/language/parser': 'graphql/language/parser.mjs',
    'graphql/language/printer': 'graphql/language/printer.mjs',
    'hookable': 'hookable-beta',
  },
  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GRAPHQL_URL, // overwritten by process.env.GQL_HOST
    },
  },
})
