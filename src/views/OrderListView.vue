<template lang="">
    <main>
        <p class="text-2xl font-bold mb-4">歷史訂單</p>
        <div v-if="isLoading" class="flex justify-center items-center">
            <LoadingIcon class="animate-spin" />
        </div>
        <Table v-else>
            <TableHead>
                <TableRow>
                    <TableCell>行程</TableCell>
                    <TableCell>參加人數</TableCell>
                </TableRow>
                <TableBody>
                    <TableRow v-for="order in orderList" :key="order.id">
                        <TableCell>{{ order.product }}</TableCell>
                        <TableCell>{{ order.participantNumber }}</TableCell>
                    </TableRow>
                </TableBody>
            </TableHead>
        </Table>
    </main>
    <div>{{ errorMessage }}</div>
</template>
<script setup>
import { Button } from '@/components/ui/button'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@/components/ui/table'
import { ref, onMounted } from 'vue'
import { getOrderByUserId } from '@/utils/api'
import { useUserStore } from '@/stores/user'
import LoadingIcon from '@/components/icons/LoadingIcon.vue'

const userStore = useUserStore()

const isLoading = ref(false)

const orderList = ref([])

const errorMessage = ref(null)

onMounted(async () => {
    try {
        isLoading.value = true
        const res = await getOrderByUserId(userStore.user?.userId)
        if (res.status === 200) {
            orderList.value = res.data.data
        }
    } catch (error) {
        console.log(error)
        errorMessage.value = error
    } finally {
        isLoading.value = false
    }
})
</script>
<style scoped></style>
