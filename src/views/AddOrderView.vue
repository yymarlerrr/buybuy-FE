<template lang="">
  <form @submit="handleSubmit">
    <div class="mb-4">Hi {{ userStore.user?.displayName }}，請選擇欲購買項目</div>
    <Select v-model="selectedProduct" @update:modelValue="handleSelectProduct">
      <SelectTrigger>
        <SelectValue placeholder="選擇方案" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>超值旅遊選</SelectLabel>
          <SelectItem
            v-for="product in productList"
            :key="product.id"
            :value="product.id"
            @click="handleSelectProduct(product.id)"
          >
            {{ product.name }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Button class="mt-4" type="submit">送出</Button>
  </form>

  <div>{{ userStore.user }}</div>
</template>
<script setup>
import { Button } from '@/components/ui/button'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const productList = ref([
  {
    id: 1,
    name: '北海岸一日遊',
  },
  {
    id: 2,
    name: '宜蘭礁溪泡湯',
  },
  {
    id: 3,
    name: '台北101觀景台',
  },
  {
    id: 4,
    name: '台北故宮博物院',
  },
  {
    id: 5,
    name: '陽明山大縱走',
  },
])

const selectedProduct = ref(null)

const handleSelectProduct = (id) => {
  console.log(123)
  selectedProduct.value = id
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(e.target.value)
  console.log(selectedProduct.value)
}

const userStore = useUserStore()
</script>
<style scoped></style>
