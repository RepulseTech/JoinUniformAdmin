<script setup lang="ts">
import { storeToRefs } from 'pinia'

import IcOutlineRemoveRedEye from '~icons/ic/outline-remove-red-eye'
import AddEntryModal1 from '~~/components/AddEntryModal.vue'

definePageMeta({
  middleware: 'auth',
})

const entriesStore = useEntriesStore()
const { entries, loading } = storeToRefs(entriesStore)
await entriesStore.initEntries()

const isOpen = ref(false)

function setIsOpen(value: boolean) {
  isOpen.value = value
}
</script>

<template>
  <div class="flex flex-col gap-4 items-center mb-8">
    <p v-if="loading">
      Loading....
    </p>
    <div v-else class="w-full">
      <div class="flex items-center justify-between m-2 my-4">
        <p class="text-3xl font-bold">
          Categories ({{ entries.reduce((acc, entry) => acc + entry.categories.length, 0) }})
        </p>
        <button class="btn btn-primary" @click="() => setIsOpen(true)">
          New Entry / Category
        </button>
      </div>
      <AddEntryModal :show="isOpen" :on-close="() => setIsOpen(false)" />
      <Table v-for="entry in entries" :key="entry.id">
        <template #header>
          <TableHeadItem>
            #
          </TableHeadItem>
          <TableHeadItem>
            Name
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
          <TableRow v-for="(category, i) in entry.categories" :key="category.id">
            <TableItem>
              {{ i + 1 }}.
            </TableItem>
            <TableItem>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img :src="entry.iconUrl">
                  </div>
                </div>
                <div class="font-bold">
                  {{ category.name }}
                </div>
              </div>
            </TableItem>
            <TableItem>
              <button class="btn gap-1 btn-ghost btn-sm">
                <IcOutlineRemoveRedEye />
                View
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
              <ActionButton />
            <!-- <div class="flex gap-2">
              <button class="btn btn-ghost btn-circle btn-sm">
                <MaterialSymbolsEdit />
              </button>
              <button class="btn btn-error btn-ghost btn-circle btn-sm" style="color: red">
                <IcRoundDelete />
              </button>
            </div> -->
            </TableItem>
          </TableRow>
        </template>
      </Table>
    </div>
  </div>
</template>
