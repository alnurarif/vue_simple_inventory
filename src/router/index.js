import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import ProductDetails from '../views/ProductDetails.vue'
import AddProduct from '../views/AddProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/product_details/:product_id',
      name: 'product_details',
      component: ProductDetails
    },
    {
      path: '/add_product',
      name: 'add_product',
      component: AddProduct
    }
  ]
})
router.beforeEach((to, from, next) => {
  
  next()
  
})
export default router
