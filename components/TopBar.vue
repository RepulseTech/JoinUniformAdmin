<script setup lang="ts">
const { handleLogout } = useAuthStore()
</script>

<template>
  <div class="navbar bg-base-100 sticky top-0 z-50">
    <div class="navbar-start" />
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y">
          </div>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Settings</a></li>
          <li><a class="text-red-600" @click="handleLogout">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
