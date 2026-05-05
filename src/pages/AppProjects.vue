<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppWorking from '@/components/AppWorking.vue'
import AppProject from '@/components/AppProject.vue'
</script>

<template>
  <AppHeader />
  <div class="text-center m-2">
    <h1 class="text-3xl mt-5">Projects</h1>
    <p class="text-base mb-6">Here are some of my projects:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <AppProject
        title="Personal Portfolio Website"
        description="This is a personal portfolio website built using Vue.js and TypeScript. It showcases my skills, experience, and projects in a clean and modern design."
        link="/"
      />
      <AppProject
        title="Personal Accounting Software"
        description="This is an accounting software built using Vue.js and Express.js. It helps users manage their finances, track expenses, and generate reports."
        link="http://localhost:5175/"
      />
    </div>
  </div>
  <AppWorking />
</template>
