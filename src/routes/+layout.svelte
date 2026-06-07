<script lang="ts">
	import '@fontsource/fira-code';
	import '@fontsource-variable/nunito';
	import favicon from '$lib/assets/favicon.ico';
	import '../app.css';
	import { metadata as meta } from '$lib/constants/misc';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	{#each Object.entries(meta) as [key, value]}
		<meta property={key} content={value} />
	{/each}
</svelte:head>

{@render children()}
