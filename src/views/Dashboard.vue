<script setup>
import {ref, reactive,onBeforeMount} from 'vue'
import router from '../router/index';
import { useProductStore } from '../stores/productStore';

const productStore = useProductStore()


let items = ref([])
onBeforeMount(() => {
    items.value = productStore.products.map((product,index) => {
        return {
            "sl": index+1,
            "title" : product.title,
            "price" : product.price,
            "quantity": product.quantity,
            "product_id": product.id,
            "image_link":product.image_link
        }
    })
})
const headers = [
      { text: "Sl", value: "sl", sortable: true },
      { text: "Image", value: "image" },
      { text: "Title", value: "title", sortable: true },
      { text: "Price", value: "price", sortable: true },
      { text: "Quantity", value: "quantity", sortable: true },
      { text: "Operation", value: "operation" }
    ];
const showDetails = (item)=>{
    router.push(`/product_details/${item.product_id}`)
}

</script>
<template>
    
    <!-- Top Bar -->
    <header class="bg-white shadow-md p-4 flex justify-between items-center">
        <div>
            <h2 class="text-2xl font-semibold">Products</h2>
        </div>
        
    </header>

    <!-- Content Section -->
    <div class="bg-white shadow-md p-6 mt-4 rounded-lg">
        

        <EasyDataTable
        buttons-pagination
            :headers="headers"
            :items="items"
            :rows-per-page="5"
            theme-color="#2563eb"
        >
        <template #item-image="{ image_link }">
            <div class="player-wrapper">
              <img class=" w-20" :src="image_link" alt="" />
            </div>
          </template>
        <template #item-operation="item">
            <div class="operation-wrapper">
                <button type="button" @click="showDetails(item)" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</button>
                
            </div>
          </template>
        </EasyDataTable>
    </div>
</template>