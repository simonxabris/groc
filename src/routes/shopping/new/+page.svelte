<script lang="ts">
	const items = Array.from({ length: 3 });
</script>

<div class="container mx-auto">
	<!-- List items -->
	<div class="space-y-4 mx-4">
		<!-- Repeat the following div for as many list items as needed -->
		{#each items as item}
			<div
				class="dark:text-gray-300 flex justify-between items-center border-b border-gray-200 py-4"
			>
				<span class="text-lg font-semibold">Product Name</span>
				<span class="text-lg font-semibold text-blue-600">$99.99</span>
				<button
					class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white p-2 rounded transition duration-200"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6v6m0 0v6m0-6h6m-6 0H6"
						/>
					</svg>
				</button>
			</div>
		{/each}
		<!-- End of list item -->
	</div>

	<!-- Sticky button at the bottom -->
	<div class="fixed bottom-0 left-0 w-full py-4 drop-shadow-2xl">
		<button
			class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded mx-auto block transition duration-200"
		>
			Create Shopping Trip
		</button>
	</div>
</div>
