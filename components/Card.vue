<template>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <slot name="header" />
      <h2 class="card-title">
        <slot name="title" />
      </h2>
      <slot name="body" />
      <div class="card-actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
