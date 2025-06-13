import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore= defineStore('user', () => {
  const token = ref(localStorage.getItem('token') || '')

  function setToken(newToken: string) {
    token.value = newToken
  }

  function clearToken() {
    setToken('')
  }

  return { token, setToken, clearToken }
})
