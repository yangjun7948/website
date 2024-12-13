import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    loading: false,
    error: null,
    notifications: []
  }),

  actions: {
    setLoading(status) {
      this.loading = status
    },
    
    setError(error) {
      this.error = error
    },

    addNotification(notification) {
      this.notifications.push({
        id: Date.now(),
        ...notification
      })
    },

    removeNotification(id) {
      this.notifications = this.notifications.filter(n => n.id !== id)
    },

    clearError() {
      this.error = null
    }
  }
}) 