<script setup>
import { ref } from 'vue'
const title = ref(import.meta.env.VITE_APP_NAME)
</script>

<template>
  <nav>
    <div class="wrapper">
      <RouterLink to="/Home" class="brand">
        <span class="brand-title">{{ title }}</span>
      </RouterLink>
      <div class="menu">
        <RouterLink to="/Home" href="#" class="menu-items">Home</RouterLink>
      <RouterLink to="/BookFlight" href="#" class="menu-items">Book Flight</RouterLink>
      <RouterLink to="/Destinations" href="#" class="menu-items">Destinations</RouterLink>
      <RouterLink to="/Login" href="#" class="menu-login">Login</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
  nav {
    @apply h-20 bg-yellow-900;
    .wrapper {
      @apply container mx-auto flex w-full items-center justify-between;
      .brand {
        &-title {
          @apply text-4xl font-semibold text-white;
        }
      }
      .menu {
        @apply flex gap-2;

        &-items {
          @apply mt-5 text-white hover:text-gray-600;
        }
        &-login {
          @apply mt-5 text-white hover:text-green-300;
        }
      }
    }
  }
</style>
