<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();
</script>

<template>
  <header>
    <a @click.prevent="router.push('/')">
      <img src="../asserts/logo.jpg" alt="Logo" class="logo" />
    </a>
    <ul>
      <li><a class="list" @click.prevent="router.push('/projects')">Projects</a></li>
      <li><a class="list" @click.prevent="router.push('/contact')">Contact</a></li>
      <li><a class="list" @click.prevent="router.push('/about')">About</a></li>
    </ul>
  </header>
</template>

<style scoped>
header {
  background-color: #333;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: end;
  align-items: center;
}

.list {
  text-decoration: none;
  color: white;
  margin: 0 20px;
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 5px;
}

.logo {
  width: 100px;
  border-radius: 100%;
}

a{
  cursor: pointer;
}
</style>
