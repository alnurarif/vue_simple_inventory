<script setup>
</script>

<template>
	<div class="flex justify-center border-b-2">
		<div class=" w-full md:w-400  bg-blue-600 text-white p-4">
			<div class="flex justify-left">
				<p class=" text-4xl">Inventory</p>
			</div>
		</div>
	</div>
	<div class="flex h-screen">
        <!-- Sidebar -->
        <aside class="w-64 bg-blue-600 text-white p-4">
           

            <!-- Sidebar Menu -->
            <ul>
                <li class="mb-2">
                    <RouterLink to="/"  class="flex items-center text-white hover:bg-blue-700 p-2 rounded-lg">Products</RouterLink>
                    <RouterLink to="/add_product"  class="flex items-center text-white hover:bg-blue-700 p-2 rounded-lg">Add Product</RouterLink>
                </li>
                <!-- Add more menu items as needed -->
            </ul>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 p-6">
            <RouterView />
        </main>
    </div>
	
</template>

<style scoped></style>
