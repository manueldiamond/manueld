<script lang="ts">
	import '@fontsource-variable/montserrat/index.css';
	import '@fontsource-variable/nunito/index.css';
	import favicon from '$lib/assets/favicon.ico';
	import '../app.css';
	import { metadata as meta } from '$lib/constants/misc';
	import { prefersReducedMotion } from '$lib/utils/inView';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	// Smooth wheel scrolling across the site. Touch keeps the native feel.
	onMount(() => {
		if (prefersReducedMotion()) return;

		const lenis = new Lenis({ autoRaf: true, lerp: 0.12, anchors: true });

		return () => lenis.destroy();
	});
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
