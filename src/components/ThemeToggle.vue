<template>
  <div class="theme-toggle" @click="toggleTheme" :title="t('theme.toggle')">
    <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const updateTheme = () => {
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme === 'dark' || 
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  updateTheme()
})

// 监听系统主题变化
onMounted(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
      updateTheme()
    }
  })
})
</script>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.theme-toggle:hover {
  color: var(--primary-color);
  background: var(--surface-color);
}

.theme-toggle i {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .theme-toggle {
    width: 28px;
    height: 28px;
  }
  
  .theme-toggle i {
    font-size: 1rem;
  }
}
</style> 