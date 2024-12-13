import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: null
  }),
  
  getters: {
    isLoggedIn: (state) => !!state.token
  },
  
  actions: {
    setUser(user) {
      this.user = user
    },
    setToken(token) {
      this.token = token
    },
    logout() {
      this.user = null
      this.token = null
    }
  }
}) 