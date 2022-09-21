<template>
  <div class="w-full">
    <table class="table w-full">
      <tr class="bg-white border-b-2">
        <slot name="header" />
      </tr>
      <tbody>
        <slot name="body" />
      </tbody>
    </table>
  </div>
</template>
