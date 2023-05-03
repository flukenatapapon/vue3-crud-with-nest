// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTaskGroupStore = defineStore('taskGroup', () => {

  function create(payload) {
    return axios.post('/task-groups', payload)
  }

  function index() {
    return axios.get('/task-groups')
  }

  return { create, index }
})
