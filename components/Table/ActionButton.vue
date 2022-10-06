<script setup lang="ts">
import CharmMenuKebab from '~icons/charm/menu-kebab'
import MaterialSymbolsEdit from '~icons/material-symbols/edit'
import IcRoundDelete from '~icons/ic/round-delete'

defineEmits<{
  (e: 'onRemove'): void
  (e: 'onEdit'): void
}>()
</script>

<template>
  <div class="dropdown">
    <label tabindex="0" class="btn btn-sm btn-ghost m-1"><CharmMenuKebab color="green" /></label>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box gap-1 w-32">
      <button class="btn btn-sm btn-ghost justify-start gap-2" @click="$emit('onEdit')">
        <MaterialSymbolsEdit />
        Edit
      </button>
      <button class="btn btn-sm btn-ghost justify-start gap-2 text-red-500" @click="$emit('onRemove')">
        <IcRoundDelete />
        Delete
      </button>
    </ul>
  </div>
</template>
