<template>
  <nav>
    <RouterLink to="/Home">Home</RouterLink>
    <RouterLink to="/BookFlight">Book Flight</RouterLink>
    <RouterLink to="/Destinations">Destinations</RouterLink>
    <RouterLink to="/Login">Login</RouterLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
