import './assets/main.css'
import liff from '@line/liff'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const liffId = import.meta.env.VITE_LIFF_ID

liff
  .init({ liffId })
  .then(() => {
    console.log('LIFF init success')
  })
  .catch((err) => {
    console.error('LIFF init failed', err)
  })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
