<script setup lang="ts">
import { Dialog } from '@headlessui/vue'

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
      <DialogPanel class="modal-box w-full bg-white">
        <h3 class="font-bold text-lg">
          Congratulations random Internet user!
        </h3>
        <p class="py-4">
          You've been selected for a chance to get one year of subscription to use Wikipedia for free!
        </p>
        <div class="modal-action">
          <button class="btn btn-ghost" @click="onClose">
            Close
          </button>
        </div>

        <!-- ... -->
      </DialogPanel>
    </div>
  </Dialog>
</template>
