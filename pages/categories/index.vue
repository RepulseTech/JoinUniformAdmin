<script setup lang="ts">
import { storeToRefs } from 'pinia'

import IcOutlineRemoveRedEye from '~icons/ic/outline-remove-red-eye'
import MaterialSymbolsAdd from '~icons/material-symbols/add'

definePageMeta({
  middleware: 'auth',
})

const isOpen = ref(false)
const setIsOpen = (value: boolean) => isOpen.value = value

const entriesStore = useEntriesStore()
const { entries, loading } = storeToRefs(entriesStore)
await entriesStore.initEntries()
</script>

<template>
  <div class="flex flex-col gap-4 items-center mb-8">
    <p v-if="loading">
      Loading....
    </p>
    <div v-else class="w-full">
      <div class="flex items-center justify-between m-2 my-4">
        <p class="text-2xl font-bold">
          Categories ({{ entries.reduce((acc, entry) => acc + entry.categories.length, 0) }})
        </p>
        <button class="btn btn-primary" @click="() => setIsOpen(true)">
          New Entry / Category
        </button>
      </div>
      <AddEntryModal v-if="isOpen" :show="isOpen" :on-close="() => setIsOpen(false)" :entries="entries" :create-entry-handler="entriesStore.createEntry" :create-category-handler="entriesStore.createCategory" />
      <div v-for="entry in entries" :key="entry.id" class="mt-2">
        <div class="flex justify-between space-x-3 bg-white p-4 rounded-lg rounded-b-none">
          <div class="flex space-x-3 items-center">
            <div class="avatar">
              <div class="mask mask-squircle w-16 h-16">
                <img :src="entry.iconUrl">
              </div>
            </div>
            <div class="text-2xl">
              {{ entry.name }}
            </div>
          </div>
          <div>
            <button class="btn btn-ghost btn-sm">
              Edit
            </button>
            <button class="btn btn-ghost btn-sm text-red-600" @click="() => entriesStore.deleteEntry(entry.id)">
              Delete
            </button>
          </div>
        </div>
        <Table v-if="entry.categories.length">
          <template #header>
            <TableHeadItem>
              Category
            </TableHeadItem>
            <TableHeadItem>
              Template
            </TableHeadItem>
            <TableHeadItem>
              Syllabus
            </TableHeadItem>
            <TableHeadItem>
              Activated
            </TableHeadItem>
            <TableHeadItem>
              Actions
            </TableHeadItem>
          </template>
          <template #body>
            <TableRow v-for="(category) in entry.categories" :key="category.id">
              <TableItem>
                <div class="font-bold">
                  {{ category.name }}
                </div>
              </TableItem>
              <TableItem>
                <button class="btn gap-1 btn-ghost btn-sm" @click="$router.push(`/categories/${category.id}/new-template`)">
                  <MaterialSymbolsAdd />
                  Add
                </button>
              </TableItem>
              <TableItem>
                <button class="btn gap-1 btn-ghost btn-sm">
                  <IcOutlineRemoveRedEye />
                  View
                </button>
              </TableItem>
              <TableItem>
                <input type="checkbox" class="toggle toggle-sm toggle-primary" checked>
              </TableItem>
              <TableItem>
                <TableActionButton @on-remove="() => entriesStore.deleteCategory(category.id)" />
              </TableItem>
            </TableRow>
          </template>
        </Table>
        <div v-else class="bg-white p-2 pb-14">
          <p class="text-lg font-bold">
            No categories exists.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

