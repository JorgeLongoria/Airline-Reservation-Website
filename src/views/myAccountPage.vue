<script setup>
import { ref } from 'vue'
</script>

<template>
    <div class="bg-container">
      <img class="background-img" src="https://static.toiimg.com/photo/70739792.cms" >
      <div class="text_top">My Account</div>
    </div>
</template>

<style scoped lang="postcss">
  .bg-container {
    background-image: url("https://static.toiimg.com/photo/70739792.cms");
    position: relative;
  }
  .text_top {
    position: absolute;
    top: 10%;
    left: 37%;
    font-size: 50px;
  }
</style>