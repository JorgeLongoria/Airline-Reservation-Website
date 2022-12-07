<script setup>
import { ref } from 'vue'
</script>

<template>
    <div class="bg-container">
      <img class="background-img" src="https://static.toiimg.com/photo/70739792.cms" >
      <div class="text_top">Fast, Frequent and Direct Flights
        <p class="paragraph">After flying domestic flights for years, our 
          airline offers a professional and low cost travel service. Whatever destination you chose,
          our airplanes will get you there!
        </p>
      </div>
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
    left: 3%;
    font-size: 50px;
  }

  .paragraph {
    font-size: 30px;
  }

  .book-link {
    position: absolute;
    top: 30%;
    left: 39%;
    font-size: 50px;
  }

  .book-link {
    @apply mx-1 rounded-md bg-yellow-900 px-2 py-1 text-black hover:bg-yellow-800;
  }
</style>
