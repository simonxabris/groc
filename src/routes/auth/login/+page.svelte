<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<form method="POST">
	<label for="email">Email</label>
	<input required type="email" id="email" name="email" />
	<button>Login</button>
</form>

{#if form?.success}
	<p>Successfully created user</p>
{/if}

{#if form?.success === false}
	<p>Failed to signup/login</p>
{/if}
