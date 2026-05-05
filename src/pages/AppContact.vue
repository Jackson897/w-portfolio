<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppWorking from '@/components/AppWorking.vue'
</script>

<template>
  <AppHeader />
  <div class="text-center m-2">
    <h1 class="text-3xl mt-5">Contact</h1>
    <p class="text-base mb-6">
      Per contattarmi, puoi inviarmi un'email a
      <a href="mailto:wangzhenjie1314@gmail.com" class="text-blue-600 hover:text-blue-800"
        >wangzhenjie1314@gmail.com</a
      >
    </p>
    <p class="text-base mb-6">In alternativa, puoi seguirmi sui social media:</p>
    <ul class="flex justify-center gap-5 list-none">
      <li>
        <a href="https://github.com/Jackson897" class="text-blue-600 hover:text-blue-800">GitHub</a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/profile.php?id=61574606739117"
          class="text-blue-600 hover:text-blue-800"
          >Facebook</a
        >
      </li>
      <li>
        <a href="https://www.instagram.com/wang031119/" class="text-blue-600 hover:text-blue-800"
          >Instagram</a
        >
      </li>
    </ul>
  </div>
  <AppWorking />
</template>
