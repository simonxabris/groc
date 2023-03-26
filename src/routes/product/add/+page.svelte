<form class="px-8 pt-8" method="post">
	<div class="mb-4">
		<label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
			>Name:</label
		>
		<input
			type="text"
			id="name"
			name="name"
			placeholder="Product name"
			required
			autocomplete="off"
			class="w-full mt-1 border-blue-400 focus:border-blue-600 focus:ring-blue-600 focus:outline-none rounded-md text-gray-900 placeholder-gray-500 border-2 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-gray-400 dark:focus:ring-gray-400"
		/>
	</div>
	<div class="mb-4">
		<label for="brand" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
			>Brand:</label
		>
		<input
			type="text"
			id="brand"
			name="brand"
			placeholder="Product brand"
			required
			autocomplete="off"
			class="w-full mt-1 border-blue-400 focus:border-blue-600 focus:ring-blue-600 focus:outline-none rounded-md text-gray-900 placeholder-gray-500 border-2 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-gray-400 dark:focus:ring-gray-400"
		/>
	</div>
	<div class="mb-4">
		<label for="price" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
			>Price:</label
		>
		<input
			type="number"
			id="price"
			name="price"
			placeholder="Product price"
			step="0.01"
			required
			autocomplete="off"
			class="w-full mt-1 border-blue-400 focus:border-blue-600 focus:ring-blue-600 focus:outline-none rounded-md text-gray-900 placeholder-gray-500 border-2 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-gray-400 dark:focus:ring-gray-400"
		/>
	</div>
	<div class="mb-4">
		<label for="store" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
			>Store:</label
		>
		<input
			type="text"
			id="store"
			name="store"
			placeholder="Store name"
			autocomplete="off"
			class="w-full mt-1 border-blue-400 focus:border-blue-600 focus:ring-blue-600 focus:outline-none rounded-md text-gray-900 placeholder-gray-500 border-2 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-gray-400 dark:focus:ring-gray-400"
		/>
	</div>
	<button
		type="submit"
		class="w-full bg-yellow-500 hover:bg-blue-800 text-white font-bold py-2 rounded-md transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-700"
		>Add product</button
	>
</form>
