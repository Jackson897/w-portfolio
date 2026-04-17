<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  description: string
  link: string
}>()

const isExternal = computed(() => props.link.startsWith('http'))
</script>

<template>
  <div class="project">
    <h2>
      <router-link
        v-if="!isExternal"
        :to="props.link"
        class="project-link"
      >
        {{ props.title }}
      </router-link>
      <a
        v-else
        :href="props.link"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
      >
        {{ props.title }}
      </a>
    </h2>
    <p>{{ props.description }}</p>
  </div>

</template>

<style scoped>
.project{
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
}
</style>
