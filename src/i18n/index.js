import { createI18n } from 'vue-i18n'
import zh from './locales/zh.js'
import en from './locales/en.js'

const i18n = createI18n({
  legacy: false, // 使用 Composition API
  locale: localStorage.getItem('language') || 'zh',
  fallbackLocale: 'zh',
  messages: {
    zh,
    en
  }
})

export default i18n 