<script setup lang="ts">
import type { EntryInput } from '~~/graphql/generated'
import { fileToBase64 } from '~~/utils/file-reader'
import type { EntryType } from '~~/utils/types'

const { createEntryHandler, onClose } = defineProps<{
  show: boolean
  onClose: () => void
  entries: EntryType[]
  createEntryHandler: (entry: EntryInput) => Promise<void>
}>()

const loading = ref(false)

const itemType = ref('entry')
const file = ref<File | null>()
const fileUrl = ref('')

const entryName = ref('')

onUnmounted(() => {
  fileUrl.value = ''
  file.value = null
})

function onFileChanged($event: Event) {
  const target = $event.target as HTMLInputElement
  if (target && target.files) {
    file.value = target.files[0]
    fileUrl.value = URL.createObjectURL(file.value)
  }
}

async function onEntryCreate() {
  if (!entryName.value || !file.value)
    return

  try {
    loading.value = true

    const fileString = await fileToBase64(file.value)
    const base64 = fileString.split(',')[1]

    const icon = {
      filename: file.value.name,
      mimetype: file.value.type,
      body: base64,
    }

    await createEntryHandler({ name: entryName.value, icon, parentId: null })
    onClose()
  }
  catch (error) {
    console.log(error)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <Modal :show="show" :on-close="onClose">
    <template #title>
      New Entry / Category
    </template>
    <template #body>
      <div class="flex gap-4 mt-2">
        <div class="flex gap-2 items-center">
          <input id="entry" v-model="itemType" type="radio" value="entry" class="radio radio-primary radio-sm">
          <label for="one" class="font-bold">Add new Entry</label>
        </div>

        <div class="flex gap-2 items-center">
          <input id="category" v-model="itemType" type="radio" value="category" class="radio radio-primary radio-sm">
          <label for="two" class="font-bold">Add Category to exisiting Entry</label>
        </div>
      </div>
      <br>
      <div class="flex gap-32 items-center">
        <div v-if="itemType === 'entry'">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text text-base">Entry name</span>
            </label>
            <input v-model="entryName" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs text-lg">
          </div>
          <br>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text text-base">Entry logo</span>
            </label>
            <input type="file" @change="onFileChanged">
          </div>
        </div>
        <div v-if="itemType === 'category'">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text text-base font-bold">Pick select exising entry</span>
            </label>
            <select class="select select-bordered">
              <option v-for="entry in entries" :key="entry.id">
                {{ entry.name }}
              </option>
            </select>
          </div>
        </div>
        <div v-if="fileUrl && itemType === 'entry'">
          <strong>Preview</strong>
          <img :src="fileUrl" class="w-32 h-32">
        </div>
      </div>
    </template>
    <template #footer>
      <button :class="`btn btn-primary ${loading && 'btn-ghost loading'}`" @click="onEntryCreate">
        {{ loading ? 'Creating...' : 'Create' }}
      </button>
    </template>
  </Modal>
</template>
