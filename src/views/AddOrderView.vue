<template lang="">
    <Form @submit="handleSubmit">
        <p class="text-2xl font-bold mb-4">新增訂單</p>
        <div class="mb-4">Hi {{ userStore.user?.displayName }}，請選擇欲購買項目</div>
        <div class="flex flex-col gap-4">
            <Label>行程</Label>
            <Field name="productId" v-slot="{ field, errorMessage }" :rules="{ required: true }">
                <Select v-bind="field" @update:modelValue="handleSelectProduct">
                    <SelectTrigger :class="{ 'border-red-500': errorMessage }">
                        <SelectValue placeholder="選擇行程" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>超值旅遊選</SelectLabel>
                            <SelectItem
                                v-for="product in productList"
                                :key="product.id"
                                :value="product.id"
                                class="cursor-pointer"
                            >
                                {{ product.name }}
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <span v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</span>
            </Field>
            <Label>參加人數</Label>
            <Field
                name="participantNumber"
                v-slot="{ field, errorMessage }"
                :rules="{ max: 10, required: true, min: 1, integer: true }"
                @input="selected.participantNumber = $event.target.value"
            >
                <Input
                    v-bind="field"
                    type="number"
                    min="1"
                    max="10"
                    placeholder="請輸入參加人數（上限 10 人）"
                    :class="{ 'border-red-500': errorMessage }"
                />
                <span v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</span>
            </Field>
        </div>
        <div class="flex items-center mt-4 gap-4">
            <Button class="" type="submit" :class="{ 'opacity-50 pointer-events-none': isLoading }">
                送出
            </Button>
            <LoadingIcon v-if="isLoading" class="animate-spin" />
        </div>
    </Form>
</template>
<script setup>
import { Form, Field } from 'vee-validate'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { addOrder } from '@/utils/api'
import LoadingIcon from '@/components/icons/LoadingIcon.vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const isLoading = ref(false)

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'

const productList = ref([
    {
        id: 1,
        name: '北海岸一日遊'
    },
    {
        id: 2,
        name: '宜蘭礁溪泡湯'
    },
    {
        id: 3,
        name: '台北101觀景台'
    },
    {
        id: 4,
        name: '台北故宮博物院'
    },
    {
        id: 5,
        name: '陽明山大縱走'
    }
])

const selected = ref({
    product: '',
    participantNumber: 0
})

const handleSelectProduct = (e) => {
    selected.value.product = e
}

const handleSubmit = async () => {
    try {
        isLoading.value = true

        const product = productList.value.find((product) => product.id === selected.value.product)

        if (!product) {
            return
        }

        const res = await addOrder({
            product: product.name,
            participantNumber: selected.value.participantNumber,
            userId: userStore.user.userId
        })

        if (res.status === 201) {
            router.push('/order')
        }
    } catch (error) {
        console.log(error)
    } finally {
        isLoading.value = false
    }
}
</script>
<style scoped></style>
