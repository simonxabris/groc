<script>
	import '../app.css';
</script>

<header class="w-full py-4 bg-white shadow-md dark:bg-gray-900">
	<div class="container mx-auto">
		<h1 class="text-4xl font-bold text-center text-blue-600 dark:text-blue-400">groc</h1>
	</div>
</header>

<main
	class="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen  dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900"
>
	<slot />
</main>
