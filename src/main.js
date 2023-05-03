import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

axios.defaults.baseURL = 'http://localhost:3000'

app.mount('#app')
