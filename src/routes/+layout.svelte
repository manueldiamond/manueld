<script lang="ts">
	import '@fontsource-variable/montserrat';
	import '@fontsource-variable/nunito';
	import favicon from '$lib/assets/favicon.ico';
	import '../app.css';
	import { metadata as meta } from '$lib/constants/misc';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	{#each Object.entries(meta) as [key, value]}
		{#if key === 'description'}
			<meta name="description" content={value} />
		{:else if key.startsWith('twitter:')}
			<meta name={key} content={value} />
		{:else}
			<meta property={key} content={value} />
		{/if}
	{/each}
</svelte:head>

{@render children()}
