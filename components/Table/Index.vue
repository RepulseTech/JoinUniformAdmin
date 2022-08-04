<template>
  <div class="overflow-x-auto w-full">
    <table class="table w-full">
      <thead>
        <tr>
          <slot name="header" />
        </tr>
      </thead>
      <tbody>
        <slot name="body" />
      </tbody>
    </table>
  </div>
</template>
