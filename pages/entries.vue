<script setup lang="ts">
import { storeToRefs } from 'pinia'

const entriesStore = useEntriesStore()
await entriesStore.initEntries()

const { entries } = storeToRefs(entriesStore)
</script>

<template>
  <div>
    <div v-for="entry in entries" :key="entry.id">
      <h2>
        {{ entry.name }}
      </h2>
      <img class="h-20 w-20" :src="entry.iconUrl" alt="">
      <div v-for="subEntry in entry.subEntries" :key="subEntry.id">
        <h3>{{ subEntry.name }}</h3>
        <img class="h-20 w-20" :src="subEntry.iconUrl" alt="">
        <div v-for="category in subEntry.categories" :key="category.id">
          <p>{{ category.name }}</p>
        </div>
      </div>
    </div>
    <button class="btn btn-active btn-secondary w-32" @click="entriesStore.fetchEntries">
      Refresh
    </button>
  </div>
</template>
