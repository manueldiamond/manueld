<script lang="ts">
	import { prefersReducedMotion, reveal } from '$lib/utils/inView';

	let {
		count,
		rotation = 0,
		tilt = false
	}: { count: number; rotation?: number; tilt?: boolean } = $props();

	let wrapper: HTMLDivElement;

	// Pointer depth: each layer drifts by its depth, so the stack reads as a tunnel
	// rather than a flat drawing. Writes two custom properties per frame, nothing else.
	$effect(() => {
		if (!tilt || prefersReducedMotion()) return;
		let frame = 0;

		const onMove = (e: PointerEvent) => {
			if (frame) return;
			frame = requestAnimationFrame(() => {
				frame = 0;
				const r = wrapper.getBoundingClientRect();
				const x = (e.clientX - (r.left + r.width / 2)) / innerWidth;
				const y = (e.clientY - (r.top + r.height / 2)) / innerHeight;
				wrapper.style.setProperty('--mx', x.toFixed(3));
				wrapper.style.setProperty('--my', y.toFixed(3));
			});
		};

		addEventListener('pointermove', onMove, { passive: true });

		return () => {
			removeEventListener('pointermove', onMove);
			cancelAnimationFrame(frame);
		};
	});
</script>

<div bind:this={wrapper} class="boxx absolute inset-0" use:reveal={0.05}>
	{#each Array(count) as _, i}
		{@const scale = 1 - Math.pow((i + 1) / count, 0.8)}
		{@const tval = `calc(-50% + min(-25px, 2.75vw) * (${i / count}))`}
		<div
			style="translate: {tval} {tval};
				width: {scale * 100}%;
				height: {scale * 100}%;
				filter: blur({1 + Math.pow(i / count, 2) * 3}px);
				rotate: {(i / count) * rotation}deg;
				--depth: {(i / count) * 28}px;
				--in-delay: {i * 28}ms;
				--out-delay: {(count - i) * 14}ms;
				"
			class="boxx-layer bg-mblack/50 absolute left-1/2 top-1/2 shadow-xl shadow-black/50 group cursor-pointer select-none"
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
</div>

<style>
	/* Entry: the stack unfolds from the centre, outer frames first. Exit: it folds back
	   in, inner frames first, so leaving the section reads as the shape closing. */
	.boxx-layer {
		scale: 0.1;
		opacity: 0;
		transform: translate(calc(var(--mx, 0) * var(--depth)), calc(var(--my, 0) * var(--depth)));
		transition:
			scale 0.7s cubic-bezier(0.5, 0, 0.75, 0) var(--out-delay),
			opacity 0.5s ease var(--out-delay),
			transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
	}
	:global(.boxx.is-in) .boxx-layer {
		scale: 1;
		opacity: 1;
		transition:
			scale 0.9s cubic-bezier(0.16, 1, 0.3, 1) var(--in-delay),
			opacity 0.6s ease var(--in-delay),
			transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
	}
	@media (prefers-reduced-motion: reduce) {
		.boxx-layer {
			scale: 1;
			opacity: 1;
			transition: none;
		}
	}
</style>
