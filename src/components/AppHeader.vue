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
  <header>
    <a @click.prevent="router.push('/')" class="logo-link">
      <img src="../asserts/logo.jpg" alt="Logo" class="logo" />
    </a>

    <!-- 汉堡菜单按钮 (仅在移动设备显示) -->
    <button class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- 导航菜单 -->
    <nav class="nav-menu" :class="{ active: isMenuOpen }">
      <ul>
        <li>
          <a class="list" @click.prevent="[router.push('/projects'), closeMenu()]">Projects</a>
        </li>
        <li><a class="list" @click.prevent="[router.push('/contact'), closeMenu()]">Contact</a></li>
        <li><a class="list" @click.prevent="[router.push('/about'), closeMenu()]">About</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
html {
  font-size: 10px;
}

header {
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 1rem;
  box-sizing: border-box;
}

.logo-link {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo {
  width: 100px;
  border-radius: 100%;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

/* 导航菜单 */
.nav-menu {
  display: flex;
}

.nav-menu ul {
  list-style-type: none;
  margin: 0rem;
  padding: 0rem;
  display: flex;
  gap: 1rem;
}

.list {
  text-decoration: none;
  color: white;
  border: 1px solid white;
  padding: 0.3em 0.75em;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
  display: block;
  white-space: nowrap;
}

.list:hover {
  background-color: white;
  color: #333;
}

/* 汉堡菜单 (默认隐藏) */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* 平板设备 (768px 及以上) */
@media (max-width: 768px) {
  html {
    font-size: 9px;
  }

  header {
    padding: 0.5rem 1rem;
  }

  .logo {
    width: 70px;
  }

  .list {
    padding: 0.8em 1em;
    font-size: 0.9rem;
  }

  .hamburger {
    display: flex;
  }

  /* 菜单动画 */
  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(10px, 10px);
  }

  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -8px);
  }

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
  html {
    font-size: 8px;
  }

  header {
    padding: 0.5rem 0.75rem;
  }

  .logo {
    width: 50px;
  }

  .list {
    padding: 0.7em 0em;
    font-size: 0.85rem;
  }

  .nav-menu.active {
    max-height: 250px;
  }
}
</style>
