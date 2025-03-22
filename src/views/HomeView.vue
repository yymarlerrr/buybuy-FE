<template lang="">
    <main class="flex flex-col items-center gap-4">
        <router-link
            v-for="button in buttonList"
            :key="button.path"
            :to="button.path"
            class="w-3/4"
        >
            <Button class="bg-primary700 w-full">{{ button.label }}</Button>
        </router-link>
    </main>
</template>
<script setup>
import { Button } from '@/components/ui/button'
import { ref } from 'vue'

const buttonList = ref([
    {
        label: '新增訂單',
        path: '/order/add'
    },
    {
        label: '查詢歷史訂單',
        path: '/order'
    }
])
</script>
<style scoped></style>
