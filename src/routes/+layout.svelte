<script lang="ts">
	import '@fontsource-variable/montserrat';
	import '@fontsource-variable/nunito';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
