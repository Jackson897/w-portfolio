<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppWorking from '@/components/AppWorking.vue'
</script>

<template>
  <AppHeader />
  <div>
    <h1>Contact</h1>
    <p>
      Per contattarmi, puoi inviarmi un'email a
      <a href="mailto:wangzhenjie1314@gmail.com">wangzhenjie1314@gmail.com</a>
    </p>
    <p>In alternativa, puoi seguirmi sui social media:</p>
    <ul>
      <li><a href="https://github.com/Jackson897">GitHub</a></li>
      <li><a href="https://www.facebook.com/profile.php?id=61574606739117">Facebook</a></li>
      <li><a href="https://www.instagram.com/wang031119/">Instagram</a></li>
    </ul>
  </div>
  <AppWorking />
</template>

<style scoped>
li {
  list-style: none;
}

ul {
  display: flex;
  gap: 20px;
}

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
