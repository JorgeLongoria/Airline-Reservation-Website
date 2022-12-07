<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { isAuthenticated, logout, user } = useAuth()
const title = ref(import.meta.env.VITE_APP_NAME)
</script>

<template>
  <nav>
    <div class="wrapper">
      <RouterLink to="/Home" class="brand">
        <span class="brand-title">{{ title }}</span>
      </RouterLink>
      <div class="menu">
        <p v-show="isAuthenticated" class="user text- text-yellow-600">
          Welcome back
          <strong>
            <i>{{ user?.email }}</i>
          </strong>
        </p>
        <RouterLink to="/Home" href="#" class="menu-items">Home</RouterLink>
        <RouterLink to="/BookFlight" href="#" class="menu-items">Book Flight</RouterLink>
        <RouterLink to="/Fleet" href="#" class="menu-items">Fleet</RouterLink>
        <div v-if="isAuthenticated">
          <RouterLink to="/MyAccount" href="#" class="menu-items">My Account</RouterLink>
          <button href="#" class="menu-logout" @click="logout">Logout</button>
        </div>
        <div v-else>
        <RouterLink to="/Login" href="#" class="menu-login">Login</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
  nav {
    @apply h-24 bg-yellow-900;
    .wrapper {
      @apply container mx-auto flex w-full items-center justify-between;
      .brand {
        &-title {
          @apply text-6xl font-semibold text-white;
        }
      }
      .menu {
        @apply flex gap-4;

        &-items {
          @apply flex font-medium mt-7 ml-3 text-white hover:text-gray-600;
        }
        &-login {
          @apply flex font-medium mt-7 ml-3 mr-20 text-white hover:text-green-300;
        }
        &-logout {
          @apply flex font-medium mt-2 ml-7 text-red-600 hover:text-red-300;
        }
      }
    }
  }

  .user {
    position: absolute;
    left: 73.5%;
  }

</style>
