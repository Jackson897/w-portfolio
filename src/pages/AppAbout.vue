<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppWorking from '@/components/AppWorking.vue'
</script>

<template>
  <AppHeader />
  <div>
    <h1>About</h1>
    <p>Sono Wang Zhen Jie, studente di informatica presso l'Università di Pisa.</p>
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
div {
  text-align: center;
  margin: 0.5rem;
}
</style>
