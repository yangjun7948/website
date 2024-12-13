import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    language: localStorage.getItem('language') || 'zh-CN',
    theme: localStorage.getItem('theme') || 'light'
  }),
  
  actions: {
    setLanguage(lang) {
      this.language = lang
      localStorage.setItem('language', lang)
    },
    
    setTheme(theme) {
      this.theme = theme
      localStorage.setItem('theme', theme)
      document.documentElement.setAttribute('data-theme', theme)
    },

    initTheme() {
      const savedTheme = localStorage.getItem('theme') || 'light'
      this.setTheme(savedTheme)
    }
  }
}) 