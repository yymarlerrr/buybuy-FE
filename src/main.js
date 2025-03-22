import './assets/main.css'
import liff from '@line/liff'

import { defineRule } from 'vee-validate'
import { required, max } from '@vee-validate/rules'

import piniaPersist from 'pinia-plugin-persistedstate'

defineRule('required', (value) => {
    if (!value) return '此欄位為必填'
    return true
})
defineRule('max', (value, max) => {
    if (value > max) return `此欄位不能超過 ${max} 人`
    return true
})

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
pinia.use(piniaPersist)

const liffId = import.meta.env.VITE_LIFF_ID

liff.init({ liffId })
    .then(() => {
        console.log('LIFF init success')
    })
    .catch((err) => {
        console.error('LIFF init failed', err)
    })

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
