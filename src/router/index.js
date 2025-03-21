import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddOrderView from '../views/AddOrderView.vue'
import OrderListView from '../views/OrderListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/order/add',
      name: 'addOrder',
      component: AddOrderView,
    },
    {
      path: '/order',
      name: 'order',
      component: OrderListView,
    },
  ],
})

export default router
