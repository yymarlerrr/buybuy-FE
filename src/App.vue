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
import { createUser, getUser } from '@/utils/api'

const userStore = useUserStore()

const handleGetUserApi = async (profile) => {
    try {
        const user = await getUser(profile.userId)
        const { userId, displayName } = profile
        if (!user.data.data.length) {
            await createUser({
                userId,
                displayName
            })
        }
    } catch (error) {
        console.log(error)
    }
}

onMounted(async () => {
    try {
        await liff.init({ liffId: import.meta.env.VITE_LIFF_ID, withLoginOnExternalBrowser: true })

        if (!liff.isLoggedIn()) {
            console.log('!liff.isLoggedIn()')
            liff.login()
        } else {
            console.log('liff.isLoggedIn()')
            const profile = await liff.getProfile()
            userStore.user = profile
            handleGetUserApi(profile)
        }
    } catch (error) {
        console.error(error)
    }
})
</script>

<style scoped></style>
