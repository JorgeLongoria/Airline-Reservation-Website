<script setup>
import { ref } from 'vue'
const title = ref('Login Page')
</script>

<template>
  <main class="flex min-h-screen items-center justify-center">
    <h1 class="text-6xl font-thin">{{ title }}</h1>
  </main>
</template>