<script lang="ts">
	let { count, rotation = 0 }: { count: number; rotation?: number } = $props();
</script>

{#each Array(count) as _, i}
	{@const scale = 1 - Math.pow((i + 1) / count, 0.8)}

	{@const tval = `calc(-50% + min(-25px, 2.75vw) * (${i / count}))`}
	<div
		style="translate: {tval} {tval};
			width: {scale * 100}%;
			height: {scale * 100}%;
			filter: blur({1 + Math.pow(i / count, 2) * 3}px);
			rotate: {(i / count) * rotation}deg;
			"
		class="border-inherit bg-mblack/50 absolute --border left-1/2 top-1/2 shadow-xl shadow-black/50 rotate-0 group cursor-pointer select-none"
	>
		<div
			class="inset-0 bg-white absolute hover:opacity-100 select-none"
			style="opacity: {Math.pow((i + 1) / count, 2) * 0.4}"
		></div>
		<div
			class="inset-0 bg-transparent absolute group-hover:bg-white group-hover:shadow-[0_0_20px_white] transition-all group-active:opacity-100 opacity-30"
		></div>
	</div>
{/each}
