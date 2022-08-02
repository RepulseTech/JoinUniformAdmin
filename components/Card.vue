<template>
  <div class="card bg-base-100 shadow-xl">
    <slot name="header" />
    <div class="card-body">
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
