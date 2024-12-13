<template>
  <div class="lang-toggle" @click="toggleLang" :title="t('theme.language')">
    <i class="fas fa-globe"></i>
    <span class="lang-code">{{ currentLocale.toUpperCase() }}</span>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const currentLocale = ref(locale.value)

const toggleLang = () => {
  currentLocale.value = currentLocale.value === 'zh' ? 'en' : 'zh'
}

watch(currentLocale, (newLocale) => {
  locale.value = newLocale
  localStorage.setItem('language', newLocale)
})
</script>

<style scoped>
.lang-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 6px;
  height: 32px;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.lang-toggle:hover {
  color: var(--primary-color);
  background: var(--surface-color);
}

.lang-toggle i {
  font-size: 1.1rem;
}

.lang-code {
  font-size: 0.85rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .lang-toggle {
    height: 28px;
  }
  
  .lang-toggle i {
    font-size: 1rem;
  }
  
  .lang-code {
    font-size: 0.8rem;
  }
}
</style> 