<template>
  <div class="p-10">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import liff from '@line/liff'
import { useUserStore } from './stores/user'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-vue-next'

const userStore = useUserStore()
const errorMessage = ref('')

onMounted(async () => {
  try {
    await liff.init({ liffId: import.meta.env.VITE_LIFF_ID })

    if (!liff.isLoggedIn()) {
      liff.login()
    } else {
      const profile = await liff.getProfile()
      userStore.user = profile
    }
  } catch (error) {
    errorMessage.value = '無法取得使用者資訊'
    console.error(error)
  }
})
</script>

<style scoped></style>
