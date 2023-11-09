<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
    <h1>Site Wide Header</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header> -->
  <div class="flex flex-column mt-8">
    <h1>Build Scheduler</h1>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
