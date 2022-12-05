<script setup>
import { ref } from 'vue'
const title = ref('Home Page')
</script>

<template>
    <div class="bg-container">
      <img class="background-img" src="https://static.toiimg.com/photo/70739792.cms" >
      <div class="text_top">Fast, Frequent and Direct Flights</div>
      <RouterLink to="/BookFlight" class="book">
        <h1 class="book-link"> Book Now! </h1>
      </RouterLink>
    </div>
</template>

<style scoped lang="postcss">
  .bg-container {
    background-image: url("https://static.toiimg.com/photo/70739792.cms");
    position: relative;
    text-align: center;
    color: black;
  }

  .text_top {
    position: absolute;
    top: 10%;
    left: 25%;
    font-size: 50px;
  }

  .book-link {
    position: absolute;
    top: 20%;
    left: 39%;
    font-size: 50px;
  }

  .book-link {
    @apply mx-1 rounded-md bg-yellow-900 px-4 py-2 text-black hover:bg-yellow-800;
  }
</style>
