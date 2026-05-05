<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="bg-gray-800 flex items-center justify-between w-full pr-4 box-border">
    <a @click.prevent="router.push('/')" class="flex items-center cursor-pointer">
      <img
        src="../asserts/logo.jpg"
        alt="Logo"
        class="w-24 rounded-full transition-transform duration-300 hover:scale-105"
      />
    </a>

    <!-- 汉堡菜单按钮 (仅在移动设备显示) -->
    <button
      class="hamburger md:hidden flex flex-col gap-2 bg-none border-none cursor-pointer p-0 m-0"
      :class="{ active: isMenuOpen }"
      @click="toggleMenu"
    >
      <span class="w-6 h-0.5 bg-white rounded transition-all duration-300"></span>
      <span class="w-6 h-0.5 bg-white rounded transition-all duration-300"></span>
      <span class="w-6 h-0.5 bg-white rounded transition-all duration-300"></span>
    </button>

    <!-- 导航菜单 -->
    <nav class="nav-menu flex" :class="{ active: isMenuOpen }">
      <ul class="list-none m-0 p-0 flex gap-4">
        <li>
          <a
            class="list no-underline text-white border border-white py-1 px-3 rounded transition-all duration-300 cursor-pointer block whitespace-nowrap hover:bg-white hover:text-gray-800"
            @click.prevent="[router.push('/projects'), closeMenu()]"
            >Projects</a
          >
        </li>
        <li>
          <a
            class="list no-underline text-white border border-white py-1 px-3 rounded transition-all duration-300 cursor-pointer block whitespace-nowrap hover:bg-white hover:text-gray-800"
            @click.prevent="[router.push('/contact'), closeMenu()]"
            >Contact</a
          >
        </li>
        <li>
          <a
            class="list no-underline text-white border border-white py-1 px-3 rounded transition-all duration-300 cursor-pointer block whitespace-nowrap hover:bg-white hover:text-gray-800"
            @click.prevent="[router.push('/about'), closeMenu()]"
            >About</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* 汉堡菜单动画 */
.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(10px, 10px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

/* 平板设备 (768px 及以上) */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  /* 菜单动画 */
  .nav-menu {
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #333;
    width: 100%;
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .nav-menu.active {
    max-height: 300px;
  }

  .nav-menu ul {
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
  }

  .list {
    width: 100%;
    text-align: center;
  }
}

/* 手机设备 (480px 及以下) */
@media (max-width: 480px) {
  .nav-menu.active {
    max-height: 250px;
  }
}
</style>
