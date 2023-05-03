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

  function show(params) {
    return axios.get(`/task-groups/${params}`)
  }

  function update(payload, params) {
    return axios.patch(`/task-groups/${params}`, payload)
  }

  function destroy(params) {
    return axios.delete(`/task-groups/${params}`)
  }

  return { create, index, show, update, destroy }
})
