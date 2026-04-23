<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppWorking from '@/components/AppWorking.vue'
import AppProject from '@/components/AppProject.vue'
</script>

<template>
  <AppHeader />
  <div>
    <h1>Projects</h1>
    <p>Here are some of my projects:</p>
    <div class="list">
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

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
