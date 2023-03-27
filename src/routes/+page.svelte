<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="text-gray-300 text-center grid place-items-center mx-4 h-screen">
	{#if !data.isAuthenticated}
		<a
			class="block px-2 w-full bg-yellow-500 hover:bg-blue-800 text-white font-bold py-2 rounded-md transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-700"
			href="/auth/login">Login</a
		>
	{:else}
		<a
			class="block px-2 w-full bg-yellow-500 hover:bg-blue-800 text-white font-bold py-2 rounded-md transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-700"
			href="/shopping/new">Add new</a
		>
	{/if}
</div>
