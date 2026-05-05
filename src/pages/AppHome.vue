<script setup lang="ts">
import AppWorking from '@/components/AppWorking.vue'
import AppHeader from '../components/AppHeader.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <div class="text-center m-2">
      <h1 class="text-3xl mt-5">Welcome to W</h1>
      <p class="text-base mb-6">Portfolio di Wang</p>
    </div>
    <AppWorking />
  </div>
</template>
