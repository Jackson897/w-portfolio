<script setup lang="ts">
import AppWorking from '@/components/AppWorking.vue';
import AppHeader from '../components/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <div>
    <h1>Welcome to W</h1>
    <p>Portfolio di Wang</p>
  </div>

  <AppWorking />
</template>

<style scoped>
h1 {
  font-size: 1.8rem;
  margin-top: 1.3rem;
}
p {
  font-size: 1rem;
  margin-bottom: 1.5rem;
}
template{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

div {
  text-align: center;
  margin: 0.5rem;
}
</style>
