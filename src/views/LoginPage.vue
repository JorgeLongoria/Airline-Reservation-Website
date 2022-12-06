<script setup>
  import { ref } from 'vue' 
  import { useRouter, useRoute } from 'vue-router'
  import { useAuth } from '@/composables/useAuth'
  import { async } from '@firebase/util';
  
  const router = useRouter()
  const route = useRoute()

  const { login, logout } = useAuth()
  const username = ref('')
  const password = ref('')

  const logUserIn = async () => {
    if (await login(username.value, password.value)) {
      if (route.query.redirect) {
        router.push(route.query.redirect)
      } else {
        router.push({ name: 'Home' })
      }
    } else {
      logout()
    }
}
</script>

<template>
    <div class="bg-container">
      <img class="background-img" src="https://static.toiimg.com/photo/70739792.cms" >

      <form class="login-form" @submit.prevent="logUserIn">
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit" class="login-button">Log In</button>
      </form>
    </div>
</template>

<style scoped lang="postcss">
  .bg-container {
    background-image: url("https://static.toiimg.com/photo/70739792.cms");
    position: relative;
  }

  .login-form {
    position: absolute;
    top: 10%;
    left: 62%;
  }

    .login-form {
      @apply mx-auto flex max-w-lg flex-col gap-4 rounded-md bg-yellow-900 p-20 shadow-lg;
      & input {
        @apply rounded-md px-8 py-4 text-xl ring-1 ring-gray-300;
    }

    .login-button {
      @apply rounded-md px-8 py-4 text-xl ring-1 bg-green-400;
    }
  }
</style>