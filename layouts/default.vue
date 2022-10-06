<template>
  <div class="flex">
    <aside class="h-screen sticky top-0">
      <SideDrawer />
    </aside>

    <div class="flex flex-col w-full">
      <TopBar />
      <main class="relative py-5 px-10 min-h-screen bg-base-200">
        <Suspense>
          <slot />
          <template #fallback>
            Loading...
          </template>
        </Suspense>
      </main>
    </div>
  </div>
</template>
