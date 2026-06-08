<script>
	import { buzzwordStrips } from '$lib/constants/misc';
</script>

<section class=" mt-20 marquee-wrapper container mx-auto overflow-hidden pb-10">
	<div class="marquee-1" style="animation-duration: 180s;">
		{#each [...buzzwordStrips.top, ...buzzwordStrips.top] as thing}
			<div
				class="min-w-max px-8 py-2 border-carafe-light border bg-linear-to-b from-50% to-50% from-carafe to-carafe-light border-b-carafe shadow-lg text-sm font-semibold text-mblack brightness-125"
			>
				{thing}
			</div>
		{/each}
	</div>
	<div class="mt-1 marquee-2 flex flex-row gap-1" style="animation-duration: 180s;">
		{#each [...buzzwordStrips.bottom, ...buzzwordStrips.bottom] as thing}
			<div
				class="min-w-max px-8 py-2 border-carafe-light border bg-linear-to-b from-50% to-50% from-carafe to-carafe-light border-b-carafe scale-z-1 shadow-lg text-sm font-semibold text-mblack brightness-125"
			>
				{thing}
			</div>
		{/each}
	</div>
</section>
