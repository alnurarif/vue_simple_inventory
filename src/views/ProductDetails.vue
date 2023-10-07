<script setup>
import {ref, reactive,onBeforeMount} from 'vue'
import router from '../router/index';
import { useProductStore } from '../stores/productStore';
import {useRoute} from 'vue-router'
const productStore = useProductStore()
const route = useRoute()
let product = ref({})
onBeforeMount(() => {
    product.value = productStore.products.find(product => product.id == route.params.product_id)
})
</script>
<template>
    <header class="bg-white shadow-md p-4 flex justify-between items-center">
        <div>
            <h2 class="text-2xl font-semibold">Product Details</h2>
        </div>
        <RouterLink to="/" class="font-bold">Back</RouterLink>
        
    </header>
    <div class="flex">
        
    <!-- Product Image (Left) -->
    <div class="w-1/3 p-4">
        <img :src="product.image_link" alt="Product Image" class="w-full h-auto">
    </div>
    
    <!-- Product Details (Right) -->
    <div class="w-2/3 p-4">
        <h2 class="text-3xl font-semibold">{{product.title}}</h2>
        <p class=" mt-10 text-xl text-gray-600">{{product.description}}</p>
        <p class="mt-5 text-xl text-gray-600">Quantity: {{product.quantity}}</p>
        

        <p class="mt-5 text-lg font-semibold text-blue-500">Price: ${{product.price}}</p>
        <!-- Add more product details here as needed -->
    </div>
    </div>
</template>