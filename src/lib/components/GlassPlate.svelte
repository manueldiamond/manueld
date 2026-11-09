<script lang="ts">
	// One of the home page About section's glass plates: neumorphic, skewed, with an inset core.
	// It drifts with the nearest ancestor's --par (see the parallax action) at its own depth.
	let {
		left,
		top,
		size,
		skew = 20,
		depth = 120,
		delay = 0
	}: {
		left: string;
		top: string;
		size: string;
		skew?: number;
		depth?: number;
		delay?: number;
	} = $props();
</script>

<div
	aria-hidden="true"
	class="glass-plate pointer-events-none absolute"
	style="left: {left}; top: {top}; width: {size}; --depth: {depth}px; --delay: {delay}s"
>
	<div class="float">
		<div
			class="plate neumorphic relative aspect-square bg-linear-to-b! from-white/2! from-30% via-white/5 to-white/0 backdrop-blur-sm"
			style="transform: skew({skew}deg)"
		>
			<div
				class="neumorphic-inner absolute top-1/2 left-1/2 aspect-square h-full -translate-x-1/2 -translate-y-1/2 scale-[0.7] backdrop-blur-sm"
			></div>
		</div>
	</div>
</div>

<style>
	.glass-plate {
		transform: translate3d(0, calc(var(--par, 0) * var(--depth) * -1), 0);
		will-change: transform;
	}

	.float {
		animation: float 9s ease-in-out infinite alternate;
		animation-delay: calc(var(--delay) * -3);
	}

	@keyframes float {
		from {
			translate: 0 -10px;
			rotate: -2deg;
		}

		to {
			translate: 0 12px;
			rotate: 2deg;
		}
	}

	/* Swings in like the home page plates when its section arrives. */
	.plate {
		opacity: 0;
		scale: 0.55;
		rotate: -28deg;
		transition:
			opacity 0.5s ease,
			scale 0.6s cubic-bezier(0.5, 0, 0.75, 0),
			rotate 0.6s cubic-bezier(0.5, 0, 0.75, 0);
	}

	:global(.is-in) .plate {
		opacity: 1;
		scale: 1;
		rotate: 0deg;
		transition:
			opacity 0.8s ease,
			scale 1.1s cubic-bezier(0.16, 1, 0.3, 1),
			rotate 1.1s cubic-bezier(0.16, 1, 0.3, 1);
		transition-delay: var(--delay);
	}

	@media (prefers-reduced-motion: reduce) {
		.glass-plate {
			transform: none;
		}

		.float {
			animation: none;
		}

		.plate {
			opacity: 1;
			scale: 1;
			rotate: 0deg;
			transition: none;
		}
	}
</style>
