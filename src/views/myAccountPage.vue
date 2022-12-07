<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { isAuthenticated, logout, user } = useAuth()
</script>

<template>
    <div class="bg-container">
      <img class="background-img" src="https://static.toiimg.com/photo/70739792.cms" >
    </div>

    <div class="account-form">
        <p v-show="isAuthenticated" class="text-white">
          Hello
          <strong>
            <i>{{ user?.email }},</i>
          </strong>
          from your account dashboard, you can view your recent flights.
        </p>

        <div class="account-recent">
            <p>Flight Number</p>
            <p>Departure</p>
            <p>Destination</p>
            <p>Trip Total</p>

        </div>
  </div>
</template>

<style scoped lang="postcss">
  .bg-container {
    background-image: url("https://static.toiimg.com/photo/70739792.cms");
    position: relative;
  }

   .account-form {
    position: absolute;
    top: 20%;
    left: 23%;
  }

   .account-form {
    @apply text-white mx-auto flex max-w-4xl flex-col gap-2 rounded-lg bg-yellow-900 p-8 shadow-lg;
  

    .account-recent {
    @apply flex justify-between gap-20 py-14 font-extrabold;
    }
  }   

</style>