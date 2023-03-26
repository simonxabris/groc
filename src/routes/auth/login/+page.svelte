<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div
	class="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex items-center justify-center dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900"
>
	<div class="bg-white w-96 rounded-lg shadow-lg p-6 dark:bg-gray-800">
		<h1 class="text-3xl font-bold text-blue-600 mb-6 text-center dark:text-blue-300">Login</h1>
		<p class="mb-4 text-gray-700 dark:text-gray-300">
			Enter your email address and you will receive an email containing a link that you can use to
			sign in.
		</p>
		<form action="#" method="post">
			<div class="mb-4">
				<label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>Email:</label
				>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="example@example.com"
					required
					autocomplete="off"
					class="w-full mt-1 border-blue-400 focus:border-blue-600 focus:ring-blue-600 focus:outline-none rounded-md text-gray-900 placeholder-gray-500 border-2 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-gray-400 dark:focus:ring-gray-400"
				/>
			</div>
			<button
				type="submit"
				class="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 rounded-md transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-700"
				>Login</button
			>
			{#if form?.success}
				<p class="mt-4 text-gray-700 dark:text-gray-300">
					Check your email and sign in using the magic link we just sent you
				</p>
			{/if}
		</form>
	</div>
</div>
