<script setup lang="ts">
import { Dialog, DialogPanel } from '@headlessui/vue'
import MaterialSymbolsClose from '~icons/material-symbols/close'

defineProps<{
  show: boolean
  onClose: () => void
}>()
</script>

<template>
  <Dialog :open="show" class="relative z-50" @close="onClose">
    <!-- The backdrop, rendered as a fixed sibling to the panel container -->
    <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

    <!-- Full-screen container to center the panel -->
    <div class="fixed inset-0 flex items-center justify-center">
      <!-- The actual dialog panel -->
      <DialogPanel class="modal-box w-full max-w-4xl bg-white">
        <div class="border-b-4 pb-4">
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-xl">
              <slot name="title" />
            </h3>
            <button class="btn btn-sm btn-ghost m-0" @click="onClose">
              <MaterialSymbolsClose />
            </button>
          </div>
        </div>
        <p class="py-2">
          <slot name="body" />
        </p>
        <div class="modal-action justify-start">
          <slot name="footer" />
        </div>

        <!-- ... -->
      </DialogPanel>
    </div>
  </Dialog>
</template>

