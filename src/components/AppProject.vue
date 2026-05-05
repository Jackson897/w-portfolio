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
  <div class="bg-gray-100 p-5 rounded-lg">
    <h2 class="text-xl mb-2">
      <router-link v-if="!isExternal" :to="props.link" class="text-blue-600 hover:text-blue-800">
        {{ props.title }}
      </router-link>
      <a
        v-else
        :href="props.link"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-600 hover:text-blue-800"
      >
        {{ props.title }}
      </a>
    </h2>
    <p class="text-gray-700">{{ props.description }}</p>
  </div>
</template>
